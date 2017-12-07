/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-segment_ios","ion-segment {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.segment-button {\n  margin-left: 0;\n  margin-right: 0;\n  text-align: center;\n  position: relative;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.segment-ios ion-segment-button {\n  display: flex;\n  flex: 1;\n  width: 0;\n}\n\n.segment-ios ion-segment-button:first-of-type .segment-button {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 4px;\n  margin-right: 0;\n}\n\n.segment-ios ion-segment-button:not(:first-of-type) .segment-button {\n  border-left-width: 0;\n}\n\n.segment-ios ion-segment-button:last-of-type .segment-button {\n  border-top-left-radius: 0;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 0;\n  margin-left: 0;\n  border-left-width: 0;\n}\n\n.segment-ios .segment-button {\n  flex: 1;\n  height: 3.2rem;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #488aff;\n  font-size: 1.3rem;\n  line-height: 2.8rem;\n  color: #488aff;\n  background-color: transparent;\n}\n\n.segment-ios .segment-button ion-icon {\n  font-size: 2.6rem;\n  line-height: 2.8rem;\n}\n\n.segment-ios .segment-button.segment-activated {\n  color: #fff;\n  background-color: #488aff;\n  opacity: 1;\n  transition: 100ms all linear;\n}\n\n.segment-ios .segment-button:hover:not(.segment-activated) {\n  background-color: rgba(72, 138, 255, 0.1);\n  transition: 100ms all linear;\n}\n\n.segment-ios .segment-button:active:not(.segment-activated) {\n  background-color: rgba(72, 138, 255, 0.16);\n  transition: 100ms all linear;\n}\n\n[dir=\"rtl\"] .segment-ios ion-segment-button:first-of-type .segment-button {\n  border-left-width: 0;\n}\n\n[dir=\"rtl\"] .segment-ios ion-segment-button:last-of-type .segment-button {\n  border-left-width: 1px;\n}\n\n.segment-ios.segment-disabled {\n  opacity: .4;\n  pointer-events: none;\n}\n\n.segment-ios .segment-button-disabled {\n  color: rgba(72, 138, 255, 0.3);\n  pointer-events: none;\n}\n\n.toolbar-ios .segment-ios {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n}\n\n.toolbar-ios ion-segment-button {\n  max-width: 100px;\n}\n\n.toolbar-ios .segment-button {\n  height: 2.6rem;\n  font-size: 1.2rem;\n  line-height: 2.2rem;\n}\n\n.toolbar-ios .segment-button ion-icon {\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n}\n\n.segment-ios-primary .segment-button {\n  border-color: #488aff;\n  color: #488aff;\n}\n\n.segment-ios-primary .segment-button:hover:not(.segment-activated) {\n  background-color: rgba(72, 138, 255, 0.1);\n}\n\n.segment-ios-primary .segment-button:active:not(.segment-activated) {\n  background-color: rgba(72, 138, 255, 0.16);\n}\n\n.segment-ios-primary .segment-button.segment-activated {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.segment-ios-primary .segment-button-disabled {\n  color: rgba(72, 138, 255, 0.3);\n}\n\n.toolbar-ios-primary .segment-ios .segment-button.segment-activated {\n  color: #488aff;\n}\n\n.segment-ios-secondary .segment-button {\n  border-color: #32db64;\n  color: #32db64;\n}\n\n.segment-ios-secondary .segment-button:hover:not(.segment-activated) {\n  background-color: rgba(50, 219, 100, 0.1);\n}\n\n.segment-ios-secondary .segment-button:active:not(.segment-activated) {\n  background-color: rgba(50, 219, 100, 0.16);\n}\n\n.segment-ios-secondary .segment-button.segment-activated {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.segment-ios-secondary .segment-button-disabled {\n  color: rgba(50, 219, 100, 0.3);\n}\n\n.toolbar-ios-secondary .segment-ios .segment-button.segment-activated {\n  color: #32db64;\n}\n\n.segment-ios-danger .segment-button {\n  border-color: #f53d3d;\n  color: #f53d3d;\n}\n\n.segment-ios-danger .segment-button:hover:not(.segment-activated) {\n  background-color: rgba(245, 61, 61, 0.1);\n}\n\n.segment-ios-danger .segment-button:active:not(.segment-activated) {\n  background-color: rgba(245, 61, 61, 0.16);\n}\n\n.segment-ios-danger .segment-button.segment-activated {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.segment-ios-danger .segment-button-disabled {\n  color: rgba(245, 61, 61, 0.3);\n}\n\n.toolbar-ios-danger .segment-ios .segment-button.segment-activated {\n  color: #f53d3d;\n}\n\n.segment-ios-light .segment-button {\n  border-color: #f4f4f4;\n  color: #f4f4f4;\n}\n\n.segment-ios-light .segment-button:hover:not(.segment-activated) {\n  background-color: rgba(244, 244, 244, 0.1);\n}\n\n.segment-ios-light .segment-button:active:not(.segment-activated) {\n  background-color: rgba(244, 244, 244, 0.16);\n}\n\n.segment-ios-light .segment-button.segment-activated {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.segment-ios-light .segment-button-disabled {\n  color: rgba(244, 244, 244, 0.3);\n}\n\n.toolbar-ios-light .segment-ios .segment-button.segment-activated {\n  color: #f4f4f4;\n}\n\n.segment-ios-dark .segment-button {\n  border-color: #222;\n  color: #222;\n}\n\n.segment-ios-dark .segment-button:hover:not(.segment-activated) {\n  background-color: rgba(34, 34, 34, 0.1);\n}\n\n.segment-ios-dark .segment-button:active:not(.segment-activated) {\n  background-color: rgba(34, 34, 34, 0.16);\n}\n\n.segment-ios-dark .segment-button.segment-activated {\n  color: #fff;\n  background-color: #222;\n}\n\n.segment-ios-dark .segment-button-disabled {\n  color: rgba(34, 34, 34, 0.3);\n}\n\n.toolbar-ios-dark .segment-ios .segment-button.segment-activated {\n  color: #222;\n}\nion-segment.hydrated{visibility:inherit}","ion-segment-button_ios","\nion-segment-button.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-segment.ios",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class Segment {
    constructor() {
        /*
         * @input {boolean} If true, the user cannot interact with the segment. Default false.
         */
        this.disabled = false;
    }
    valueChanged(val) {
        this.selectButton(val);
    }
    componentDidLoad() {
        this.buttons = this.el.querySelectorAll('ion-segment-button');
        for (var i = 0; i < this.buttons.length; i++) {
            const button = this.buttons[i];
            button.activated = (button.value === this.value);
            // If there is no value set on the segment and a button
            // is checked we should activate it
            if (!this.value && button.checked) {
                button.activated = button.checked;
            }
        }
    }
    segmentClick(ev) {
        let selectedButton = ev.detail.segmentButton;
        this.value = selectedButton.value;
        this.selectButton(this.value);
        // TODO should this move to valueChanged
        this.ionChange.emit({ segment: this });
    }
    selectButton(val) {
        for (var i = 0; i < this.buttons.length; i++) {
            const button = this.buttons[i];
            button.activated = (button.value === val);
        }
        // returning true tells the renderer to queue an update
        return true;
    }
    hostData() {
        return {
            class: {
                'segment-disabled': this.disabled
            }
        };
    }
    render() {
        return h("slot", null);
    }
}

/**
 * Create the mode and color classes for the component based on the classes passed in
 */
function createThemedClasses(mode, color, classes) {
    let classObj = {};
    return classes.split(' ')
        .reduce((classObj, classString) => {
        classObj[classString] = true;
        if (mode) {
            classObj[`${classString}-${mode}`] = true;
            if (color) {
                classObj[`${classString}-${color}`] = true;
                classObj[`${classString}-${mode}-${color}`] = true;
            }
        }
        return classObj;
    }, classObj);
}
/**
 * Get the classes from a class list and return them as an object
 */
function getElementClassObject(classList) {
    let classObj = {};
    for (var i = 0; i < classList.length; i++) {
        classObj[classList[i]] = true;
    }
    return classObj;
}

class SegmentButton {
    constructor() {
        this.activated = false;
        /**
         * @input {boolean} If true, the segment button is selected. Defaults to `false`.
         */
        this.checked = false;
        /*
         * @input {boolean} If true, the user cannot interact with the segment button. Default false.
         */
        this.disabled = false;
    }
    segmentButtonClick(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        console.log('in segment button click');
        this.emitClick();
    }
    /**
     * Emit the click event to the parent segment
     */
    emitClick() {
        clearTimeout(this.styleTmr);
        this.styleTmr = setTimeout(() => {
            this.ionClick.emit({ segmentButton: this });
        });
    }
    /**
     * @hidden
     * Get the classes for the segment button state
     */
    getElementClassList() {
        let classList = [].concat(this.disabled ? 'segment-button-disabled' : [], this.activated ? 'segment-activated' : []);
        return classList;
    }
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'segment-button');
        const hostClasses = getElementClassObject(this.el.classList);
        const elementClasses = []
            .concat(this.getElementClassList())
            .reduce((prevValue, cssClass) => {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
        const buttonClasses = Object.assign({}, themedClasses, hostClasses, elementClasses);
        return [
            h("button", { onClick: this.segmentButtonClick.bind(this), class: buttonClasses, "aria-pressed": this.activated },
                h("slot", null))
        ];
    }
}

exports['ion-segment'] = Segment;
exports['ion-segment-button'] = SegmentButton;
},


/***************** ion-segment *****************/
[
/** ion-segment: tag **/
"ion-segment",

/** ion-segment: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-segment: host **/
{"theme":"segment"},

/** ion-segment: events **/
[
  [
    /*****  ion-segment ionChange ***** /
    /* event name ***/ "ionChange"
  ]
],

/** ion-segment: propWillChanges **/
0 /* no prop will change methods */,

/** ion-segment: propDidChanges **/
[
  [
    /*****  ion-segment prop did change [0] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

],

/***************** ion-segment-button *****************/
[
/** ion-segment-button: tag **/
"ion-segment-button",

/** ion-segment-button: members **/
[
  [ "activated", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "checked", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-segment-button: host **/
{},

/** ion-segment-button: events **/
[
  [
    /*****  ion-segment-button ionClick ***** /
    /* event name ***/ "ionClick"
  ]
]

]
);