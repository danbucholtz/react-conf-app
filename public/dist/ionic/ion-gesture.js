/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-gesture",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
/** @hidden */

function assert(bool, msg) {
    if (!bool) {
        console.error(msg);
    }
}



function updateDetail(ev, detail) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    let x = 0;
    let y = 0;
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            x = touch.clientX;
            y = touch.clientY;
        }
        else if (ev.pageX !== undefined) {
            x = ev.pageX;
            y = ev.pageY;
        }
    }
    detail.currentX = x;
    detail.currentY = y;
}

function getElementReference(elm, ref) {
    if (ref === 'child') {
        return elm.firstElementChild;
    }
    if (ref === 'parent') {
        return getParentElement(elm) || elm;
    }
    if (ref === 'body') {
        return elm.ownerDocument.body;
    }
    if (ref === 'document') {
        return elm.ownerDocument;
    }
    if (ref === 'window') {
        return elm.ownerDocument.defaultView;
    }
    return elm;
}
function getParentElement(elm) {
    if (elm.parentElement) {
        // normal element with a parent element
        return elm.parentElement;
    }
    if (elm.parentNode && elm.parentNode.host) {
        // shadow dom's document fragment
        return elm.parentNode.host;
    }
    return null;
}

function applyStyles(elm, styles) {
    const styleProps = Object.keys(styles);
    if (elm) {
        for (var i = 0; i < styleProps.length; i++) {
            elm.style[styleProps[i]] = styles[styleProps[i]];
        }
    }
}

/**
 * @hidden
 * Given a side, return if it should be on the right
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 * @param defaultRight whether the default side is right
 */

/** @hidden */



/** @hidden */








/**
 * @private
 */

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
const BLOCK_ALL = {
    disable: ['menu-swipe', 'goback-swipe'],
    disableScroll: true
};

// @stencil/core

class PanRecognizer {
    constructor(direction, threshold, maxAngle) {
        this.dirty = false;
        this.angle = 0;
        this.isPan = 0;
        const radians = maxAngle * (Math.PI / 180);
        this.isDirX = direction === 'x';
        this.maxCosine = Math.cos(radians);
        this.threshold = threshold * threshold;
    }
    start(x, y) {
        this.startX = x;
        this.startY = y;
        this.angle = 0;
        this.isPan = 0;
        this.dirty = true;
    }
    detect(x, y) {
        if (!this.dirty) {
            return false;
        }
        const deltaX = (x - this.startX);
        const deltaY = (y - this.startY);
        const distance = deltaX * deltaX + deltaY * deltaY;
        if (distance < this.threshold) {
            return false;
        }
        const hypotenuse = Math.sqrt(distance);
        const cosine = ((this.isDirX) ? deltaX : deltaY) / hypotenuse;
        if (cosine > this.maxCosine) {
            this.isPan = 1;
        }
        else if (cosine < -this.maxCosine) {
            this.isPan = -1;
        }
        else {
            this.isPan = 0;
        }
        this.dirty = false;
        return true;
    }
    isGesture() {
        return this.isPan !== 0;
    }
    getDirection() {
        return this.isPan;
    }
}

class Gesture {
    constructor() {
        this.detail = {};
        this.positions = [];
        this.lastTouch = 0;
        this.hasCapturedPan = false;
        this.hasPress = false;
        this.hasStartedPan = false;
        this.hasFiredStart = true;
        this.isMoveQueued = false;
        this.enabled = true;
        this.attachTo = 'child';
        this.autoBlockAll = false;
        this.block = null;
        this.disableScroll = false;
        this.direction = 'x';
        this.gestureName = '';
        this.gesturePriority = 0;
        this.maxAngle = 40;
        this.threshold = 10;
        this.type = 'pan';
    }
    componentDidLoad() {
        // in this case, we already know the GestureController and Gesture are already
        // apart of the same bundle, so it's safe to load it this way
        // only create one instance of GestureController, and reuse the same one later
        this.ctrl = Context.gesture = Context.gesture || new GestureController;
        this.gesture = this.ctrl.createGesture(this.gestureName, this.gesturePriority, this.disableScroll);
        const types = this.type.replace(/\s/g, '').toLowerCase().split(',');
        if (types.indexOf('pan') > -1) {
            this.pan = new PanRecognizer(this.direction, this.threshold, this.maxAngle);
        }
        this.hasPress = (types.indexOf('press') > -1);
        this.enabledChanged(this.enabled);
        if (this.pan || this.hasPress) {
            Context.dom.write(() => {
                applyStyles(getElementReference(this.el, this.attachTo), GESTURE_INLINE_STYLES);
            });
        }
        if (this.autoBlockAll) {
            this.blocker = this.ctrl.createBlocker(BLOCK_ALL);
            this.blocker.block();
        }
    }
    enabledChanged(isEnabled) {
        if (this.pan || this.hasPress) {
            Context.enableListener(this, 'touchstart', isEnabled, this.attachTo);
            Context.enableListener(this, 'mousedown', isEnabled, this.attachTo);
            if (!isEnabled) {
                this.abortGesture();
            }
        }
    }
    blockChanged(block) {
        if (this.blocker) {
            this.blocker.destroy();
        }
        if (block) {
            this.blocker = this.ctrl.createBlocker({ disable: block.split(',') });
        }
    }
    // DOWN *************************
    onTouchStart(ev) {
        this.lastTouch = now(ev);
        if (this.pointerDown(ev, this.lastTouch)) {
            this.enableMouse(false);
            this.enableTouch(true);
        }
        else {
            this.abortGesture();
        }
    }
    onMouseDown(ev) {
        const timeStamp = now(ev);
        if (this.lastTouch === 0 || (this.lastTouch + MOUSE_WAIT < timeStamp)) {
            if (this.pointerDown(ev, timeStamp)) {
                this.enableMouse(true);
                this.enableTouch(false);
            }
            else {
                this.abortGesture();
            }
        }
    }
    pointerDown(ev, timeStamp) {
        if (!this.gesture || this.hasStartedPan || !this.hasFiredStart) {
            return false;
        }
        const detail = this.detail;
        updateDetail(ev, detail);
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTimeStamp = detail.timeStamp = timeStamp;
        detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
        detail.event = ev;
        this.positions.length = 0;
        assert(this.hasFiredStart, 'fired start must be false');
        assert(!this.hasStartedPan, 'pan can be started at this point');
        assert(!this.hasCapturedPan, 'pan can be started at this point');
        assert(!this.isMoveQueued, 'some move is still queued');
        assert(this.positions.length === 0, 'positions must be emprty');
        // Check if gesture can start
        if (this.canStart && this.canStart(detail) === false) {
            return false;
        }
        // Release fallback
        this.gesture.release();
        // Start gesture
        if (!this.gesture.start()) {
            return false;
        }
        this.positions.push(detail.currentX, detail.currentY, timeStamp);
        if (this.pan) {
            this.hasStartedPan = true;
            if (this.threshold === 0) {
                return this.tryToCapturePan();
            }
            this.pan.start(detail.startX, detail.startY);
        }
        return true;
    }
    // MOVE *************************
    onTouchMove(ev) {
        this.lastTouch = this.detail.timeStamp = now(ev);
        this.pointerMove(ev);
    }
    onMoveMove(ev) {
        const timeStamp = now(ev);
        if (this.lastTouch === 0 || (this.lastTouch + MOUSE_WAIT < timeStamp)) {
            this.detail.timeStamp = timeStamp;
            this.pointerMove(ev);
        }
    }
    pointerMove(ev) {
        assert(!!this.pan, 'pan must be non null');
        // fast path, if gesture is currently captured
        // do minimun job to get user-land even dispatched
        if (this.hasCapturedPan) {
            if (!this.isMoveQueued && this.hasFiredStart) {
                this.isMoveQueued = true;
                this.calcGestureData(ev);
                Context.dom.write(this.fireOnMove.bind(this));
            }
            return;
        }
        // gesture is currently being detected
        const detail = this.detail;
        this.calcGestureData(ev);
        if (this.pan.detect(detail.currentX, detail.currentY)) {
            if (this.pan.isGesture()) {
                if (!this.tryToCapturePan()) {
                    this.abortGesture();
                }
            }
        }
    }
    fireOnMove() {
        // Since fireOnMove is called inside a RAF, onEnd() might be called,
        // we must double check hasCapturedPan
        if (!this.hasCapturedPan) {
            return;
        }
        const detail = this.detail;
        this.isMoveQueued = false;
        if (this.onMove) {
            this.onMove(detail);
        }
        else {
            this.ionGestureMove.emit(detail);
        }
    }
    calcGestureData(ev) {
        const detail = this.detail;
        updateDetail(ev, detail);
        const currentX = detail.currentX;
        const currentY = detail.currentY;
        const timestamp = detail.timeStamp;
        detail.deltaX = currentX - detail.startX;
        detail.deltaY = currentY - detail.startY;
        detail.event = ev;
        const timeRange = timestamp - 100;
        const positions = this.positions;
        let startPos = positions.length - 1;
        // move pointer to position measured 100ms ago
        for (; startPos > 0 && positions[startPos] > timeRange; startPos -= 3) { }
        if (startPos > 1) {
            // compute relative movement between these two points
            var frequency = 1 / (positions[startPos] - timestamp);
            var movedY = positions[startPos - 1] - currentY;
            var movedX = positions[startPos - 2] - currentX;
            // based on XXms compute the movement to apply for each render step
            // velocity = space/time = s*(1/t) = s*frequency
            detail.velocityX = movedX * frequency;
            detail.velocityY = movedY * frequency;
        }
        else {
            detail.velocityX = 0;
            detail.velocityY = 0;
        }
        positions.push(currentX, currentY, timestamp);
    }
    tryToCapturePan() {
        if (this.gesture && !this.gesture.capture()) {
            return false;
        }
        this.hasCapturedPan = true;
        this.hasFiredStart = false;
        // reset start position since the real user-land event starts here
        // If the pan detector threshold is big, not reseting the start position
        // will cause a jump in the animation equal to the detector threshold.
        // the array of positions used to calculate the gesture velocity does not
        // need to be cleaned, more points in the positions array always results in a
        // more acurate value of the velocity.
        const detail = this.detail;
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTimeStamp = detail.timeStamp;
        if (this.onWillStart) {
            this.onWillStart(this.detail).then(this.fireOnStart.bind(this));
        }
        else {
            this.fireOnStart();
        }
        return true;
    }
    fireOnStart() {
        assert(!this.hasFiredStart, 'has fired must be false');
        if (this.onStart) {
            this.onStart(this.detail);
        }
        else {
            this.ionGestureStart.emit(this.detail);
        }
        this.hasFiredStart = true;
    }
    abortGesture() {
        this.reset();
        this.enable(false);
        this.notCaptured && this.notCaptured(this.detail);
    }
    reset() {
        this.hasCapturedPan = false;
        this.hasStartedPan = false;
        this.isMoveQueued = false;
        this.hasFiredStart = true;
        this.gesture && this.gesture.release();
    }
    // END *************************
    onTouchCancel(ev) {
        this.lastTouch = this.detail.timeStamp = now(ev);
        this.pointerUp(ev);
        this.enableTouch(false);
    }
    onTouchEnd(ev) {
        this.lastTouch = this.detail.timeStamp = now(ev);
        this.pointerUp(ev);
        this.enableTouch(false);
    }
    onMouseUp(ev) {
        const timeStamp = now(ev);
        if (this.lastTouch === 0 || (this.lastTouch + MOUSE_WAIT < timeStamp)) {
            this.detail.timeStamp = timeStamp;
            this.pointerUp(ev);
            this.enableMouse(false);
        }
    }
    pointerUp(ev) {
        const hasCaptured = this.hasCapturedPan;
        const hasFiredStart = this.hasFiredStart;
        this.reset();
        if (!hasFiredStart) {
            return;
        }
        const detail = this.detail;
        this.calcGestureData(ev);
        // Try to capture press
        if (hasCaptured) {
            detail.type = 'pan';
            if (this.onEnd) {
                this.onEnd(detail);
            }
            else {
                this.ionGestureEnd.emit(detail);
            }
            return;
        }
        // Try to capture press
        if (this.hasPress && this.detectPress()) {
            return;
        }
        // Not captured any event
        if (this.notCaptured) {
            this.notCaptured(detail);
        }
        else {
            this.ionGestureNotCaptured.emit(detail);
        }
    }
    detectPress() {
        const detail = this.detail;
        const vecX = detail.deltaX;
        const vecY = detail.deltaY;
        const dis = vecX * vecX + vecY * vecY;
        if (dis < 100) {
            detail.type = 'press';
            if (this.onPress) {
                this.onPress(detail);
            }
            else {
                this.ionPress.emit(detail);
            }
            return true;
        }
        return false;
    }
    // ENABLE LISTENERS *************************
    enableMouse(shouldEnable) {
        if (this.pan) {
            Context.enableListener(this, 'document:mousemove', shouldEnable);
        }
        Context.enableListener(this, 'document:mouseup', shouldEnable);
    }
    enableTouch(shouldEnable) {
        if (this.pan) {
            Context.enableListener(this, 'touchmove', shouldEnable, this.attachTo);
        }
        Context.enableListener(this, 'touchcancel', shouldEnable, this.attachTo);
        Context.enableListener(this, 'touchend', shouldEnable, this.attachTo);
    }
    enable(shouldEnable) {
        this.enableMouse(shouldEnable);
        this.enableTouch(shouldEnable);
    }
    componentDidUnload() {
        if (this.blocker) {
            this.blocker.destroy();
            this.blocker = null;
        }
        this.gesture && this.gesture.destroy();
        this.ctrl = this.gesture = this.pan = this.detail = this.detail.event = null;
    }
}
const GESTURE_INLINE_STYLES = {
    'touch-action': 'none',
    'user-select': 'none',
    '-webkit-user-drag': 'none',
    '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
};
const MOUSE_WAIT = 2500;
function now(ev) {
    return ev.timeStamp || Date.now();
}

exports['ion-gesture'] = Gesture;
},


/***************** ion-gesture *****************/
[
/** ion-gesture: tag **/
"ion-gesture",

/** ion-gesture: members **/
[
  [ "attachTo", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "autoBlockAll", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "block", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "canStart", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "direction", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disableScroll", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "gestureName", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "gesturePriority", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "maxAngle", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "notCaptured", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onEnd", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onMove", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onPress", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onStart", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onWillStart", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "threshold", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "type", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-gesture: host **/
{},

/** ion-gesture: events **/
[
  [
    /*****  ion-gesture ionGestureMove ***** /
    /* event name ***/ "ionGestureMove"
  ],
  [
    /*****  ion-gesture ionGestureStart ***** /
    /* event name ***/ "ionGestureStart"
  ],
  [
    /*****  ion-gesture ionGestureEnd ***** /
    /* event name ***/ "ionGestureEnd"
  ],
  [
    /*****  ion-gesture ionGestureNotCaptured ***** /
    /* event name ***/ "ionGestureNotCaptured"
  ],
  [
    /*****  ion-gesture ionPress ***** /
    /* event name ***/ "ionPress"
  ]
],

/** ion-gesture: propWillChanges **/
0 /* no prop will change methods */,

/** ion-gesture: propDidChanges **/
[
  [
    /*****  ion-gesture prop did change [0] ***** /
    /* prop name **/ "enabled",
    /* call fn *****/ "enabledChanged"
  ],
  [
    /*****  ion-gesture prop did change [1] ***** /
    /* prop name **/ "block",
    /* call fn *****/ "blockChanged"
  ]
]

]
);