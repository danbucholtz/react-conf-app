/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-gesture-controller",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
class GestureController {
    constructor() {
        this.gestureId = 0;
        this.requestedStart = {};
        this.disabledGestures = {};
        this.disabledScroll = new Set();
        this.capturedId = null;
    }
    createGesture(gestureName, gesturePriority, disableScroll) {
        return new GestureDelegate(this, this.newID(), gestureName, gesturePriority, disableScroll);
    }
    createBlocker(opts = {}) {
        return new BlockerDelegate(this.newID(), this, opts.disable, !!opts.disableScroll);
    }
    newID() {
        return this.gestureId++;
    }
    start(gestureName, id, priority) {
        if (!this.canStart(gestureName)) {
            delete this.requestedStart[id];
            return false;
        }
        this.requestedStart[id] = priority;
        return true;
    }
    capture(gestureName, id, priority) {
        if (!this.start(gestureName, id, priority)) {
            return false;
        }
        let requestedStart = this.requestedStart;
        let maxPriority = -10000;
        for (let gestureID in requestedStart) {
            maxPriority = Math.max(maxPriority, requestedStart[gestureID]);
        }
        if (maxPriority === priority) {
            this.capturedId = id;
            this.requestedStart = {};
            return true;
        }
        delete requestedStart[id];
        return false;
    }
    release(id) {
        delete this.requestedStart[id];
        if (this.capturedId && id === this.capturedId) {
            this.capturedId = null;
        }
    }
    disableGesture(gestureName, id) {
        let set = this.disabledGestures[gestureName];
        if (!set) {
            set = new Set();
            this.disabledGestures[gestureName] = set;
        }
        set.add(id);
    }
    enableGesture(gestureName, id) {
        let set = this.disabledGestures[gestureName];
        if (set) {
            set.delete(id);
        }
    }
    disableScroll(id) {
        // let isEnabled = !this.isScrollDisabled();
        this.disabledScroll.add(id);
        // if (this._app && isEnabled && this.isScrollDisabled()) {
        //   console.debug('GestureController: Disabling scrolling');
        //   this._app._setDisableScroll(true);
        // }
    }
    enableScroll(id) {
        // let isDisabled = this.isScrollDisabled();
        this.disabledScroll.delete(id);
        // if (this._app && isDisabled && !this.isScrollDisabled()) {
        //   console.debug('GestureController: Enabling scrolling');
        //   this._app._setDisableScroll(false);
        // }
    }
    canStart(gestureName) {
        if (this.capturedId) {
            // a gesture already captured
            return false;
        }
        if (this.isDisabled(gestureName)) {
            return false;
        }
        return true;
    }
    isCaptured() {
        return !!this.capturedId;
    }
    isScrollDisabled() {
        return this.disabledScroll.size > 0;
    }
    isDisabled(gestureName) {
        let disabled = this.disabledGestures[gestureName];
        if (disabled && disabled.size > 0) {
            return true;
        }
        return false;
    }
}
class GestureDelegate {
    constructor(ctrl, gestureDelegateId, name, priority, disableScroll) {
        this.ctrl = ctrl;
        this.gestureDelegateId = gestureDelegateId;
        this.name = name;
        this.priority = priority;
        this.disableScroll = disableScroll;
    }
    canStart() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.canStart(this.name);
    }
    start() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.start(this.name, this.gestureDelegateId, this.priority);
    }
    capture() {
        if (!this.ctrl) {
            return false;
        }
        let captured = this.ctrl.capture(this.name, this.gestureDelegateId, this.priority);
        if (captured && this.disableScroll) {
            this.ctrl.disableScroll(this.gestureDelegateId);
        }
        return captured;
    }
    release() {
        if (this.ctrl) {
            this.ctrl.release(this.gestureDelegateId);
            if (this.disableScroll) {
                this.ctrl.enableScroll(this.gestureDelegateId);
            }
        }
    }
    destroy() {
        this.release();
        this.ctrl = null;
    }
}
class BlockerDelegate {
    constructor(blockerDelegateId, controller, disable, disableScroll) {
        this.blockerDelegateId = blockerDelegateId;
        this.controller = controller;
        this.disable = disable;
        this.disableScroll = disableScroll;
        this.blocked = false;
    }
    block() {
        if (!this.controller) {
            return;
        }
        if (this.disable) {
            this.disable.forEach(gesture => {
                this.controller.disableGesture(gesture, this.blockerDelegateId);
            });
        }
        if (this.disableScroll) {
            this.controller.disableScroll(this.blockerDelegateId);
        }
        this.blocked = true;
    }
    unblock() {
        if (!this.controller) {
            return;
        }
        if (this.disable) {
            this.disable.forEach(gesture => {
                this.controller.enableGesture(gesture, this.blockerDelegateId);
            });
        }
        if (this.disableScroll) {
            this.controller.enableScroll(this.blockerDelegateId);
        }
        this.blocked = false;
    }
    destroy() {
        this.unblock();
        this.controller = null;
    }
}

exports['ion-gesture-controller'] = GestureController;
},


/***************** ion-gesture-controller *****************/
[
/** ion-gesture-controller: tag **/
"ion-gesture-controller",

/** ion-gesture-controller: members **/
0 /* no members */,

/** ion-gesture-controller: host **/
{}

]
);