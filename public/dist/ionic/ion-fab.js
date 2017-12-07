/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-fab","ion-fab {\n  position: absolute;\n  z-index: 999;\n}\n\nion-fab[center] {\n  left: 50%;\n  margin-left: -28px;\n}\n\nion-fab[middle] {\n  margin-top: -28px;\n  top: 50%;\n}\n\nion-fab[top] {\n  top: 10px;\n}\n\nion-fab[right] {\n  right: 10px;\n  right: calc(10px + constant(safe-area-inset-right));\n  right: calc(10px + env(safe-area-inset-right));\n}\n\nion-fab[end] {\n  right: 10px;\n  right: calc(constant(safe-area-inset-right) + 10px);\n  right: calc(env(safe-area-inset-right) + 10px);\n}\n\nion-fab[bottom] {\n  bottom: 10px;\n}\n\nion-fab[left] {\n  left: 10px;\n  left: calc(10px + constant(safe-area-inset-left));\n  left: calc(10px + env(safe-area-inset-left));\n}\n\nion-fab[start] {\n  left: 10px;\n  left: calc(constant(safe-area-inset-left) + 10px);\n  left: calc(env(safe-area-inset-left) + 10px);\n}\n\nion-fab[top][edge] {\n  top: -28px;\n}\n\nion-fab[bottom][edge] {\n  bottom: -28px;\n}\nion-fab.hydrated{visibility:inherit}","ion-fab-list","ion-fab-list {\n  margin: 66px 0;\n  position: absolute;\n  top: 0;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  min-width: 56px;\n  min-height: 56px;\n}\n\n.fab-list-active {\n  display: flex;\n}\n\n.fab-button-in-list {\n  margin: 8px 0;\n  width: 40px;\n  height: 40px;\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(0);\n}\n\n.fab-button-in-list.fab-button-show {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n}\n\nion-fab-list[side=left] .fab-button-in-list,\nion-fab-list[side=right] .fab-button-in-list {\n  margin: 0 8px;\n}\n\nion-fab-list[side=top] {\n  top: auto;\n  bottom: 0;\n  flex-direction: column-reverse;\n}\n\nion-fab-list[side=left] {\n  margin: 0 66px;\n  right: 0;\n  flex-direction: row-reverse;\n}\n\nion-fab-list[side=right] {\n  margin: 0 66px;\n  left: 0;\n  flex-direction: row;\n}\nion-fab-list.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-fab",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
class Fab {
    constructor() {
        this.activated = false;
        this.toggleActive = () => {
            this.activated = !this.activated;
        };
    }
    /**
     * Close an active FAB list container
     */
    close() {
        this.activated = false;
    }
    render() {
        const fab = this.el.querySelector('ion-fab-button');
        fab.toggleActive = this.toggleActive;
        fab.activated = this.activated;
        const lists = this.el.querySelectorAll('ion-fab-list');
        for (let i = 0, length = lists.length; i < length; i += 1) {
            lists[i].activated = this.activated;
        }
        return (h("slot", null));
    }
}

class FabList {
    constructor() {
        this.activated = false;
    }
    activatedChanged(activated) {
        const fabs = this.el.querySelectorAll('ion-fab-button');
        // if showing the fabs add a timeout, else show immediately
        var timeout = activated ? 30 : 0;
        for (var i = 0; i < fabs.length; i++) {
            const fab = fabs[i];
            setTimeout(() => fab.show = activated, i * timeout);
        }
    }
    hostData() {
        return {
            class: {
                'fab-list-active': this.activated
            }
        };
    }
    render() {
        return (h("slot", null));
    }
}

exports['ion-fab'] = Fab;
exports['ion-fab-list'] = FabList;
},


/***************** ion-fab *****************/
[
/** ion-fab: tag **/
"ion-fab",

/** ion-fab: members **/
[
  [ "activated", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "close", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-fab: host **/
{}

],

/***************** ion-fab-list *****************/
[
/** ion-fab-list: tag **/
"ion-fab-list",

/** ion-fab-list: members **/
[
  [ "activated", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-fab-list: host **/
{},

/** ion-fab-list: events **/
0 /* no events */,

/** ion-fab-list: propWillChanges **/
0 /* no prop will change methods */,

/** ion-fab-list: propDidChanges **/
[
  [
    /*****  ion-fab-list prop did change [0] ***** /
    /* prop name **/ "activated",
    /* call fn *****/ "activatedChanged"
  ]
]

]
);