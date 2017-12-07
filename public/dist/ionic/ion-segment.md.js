/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-segment_md","ion-segment {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.segment-button {\n  margin-left: 0;\n  margin-right: 0;\n  text-align: center;\n  position: relative;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.segment-md ion-segment-button {\n  display: flex;\n  flex: 1;\n}\n\n.segment-md .segment-button {\n  padding: 0 6px;\n  flex: 1;\n  width: 0;\n  height: 4.2rem;\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(0, 0, 0, 0.1);\n  font-size: 1.2rem;\n  font-weight: 500;\n  line-height: 4rem;\n  text-transform: uppercase;\n  color: #488aff;\n  background-color: transparent;\n  opacity: 0.7;\n  transition: 100ms all linear;\n}\n\n.segment-md .segment-button ion-icon {\n  font-size: 2.6rem;\n  line-height: 4rem;\n}\n\n.segment-md .segment-button.activated, .segment-md .segment-button.segment-activated {\n  border-color: #488aff;\n  opacity: 1;\n}\n\n.segment-md.segment-disabled,\n.segment-md .segment-button-disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.toolbar .segment-md {\n  margin: 0 auto;\n}\n\n.toolbar .segment-md .segment-button.activated,\n.toolbar .segment-md .segment-button.segment-activated {\n  opacity: 1;\n}\n\n.segment-md-primary .segment-button {\n  color: #488aff;\n}\n\n.segment-md-primary .segment-button.activated, .segment-md-primary .segment-button.segment-activated {\n  border-color: #488aff;\n  color: #488aff;\n  opacity: 1;\n}\n\n.segment-md-secondary .segment-button {\n  color: #32db64;\n}\n\n.segment-md-secondary .segment-button.activated, .segment-md-secondary .segment-button.segment-activated {\n  border-color: #32db64;\n  color: #32db64;\n  opacity: 1;\n}\n\n.segment-md-danger .segment-button {\n  color: #f53d3d;\n}\n\n.segment-md-danger .segment-button.activated, .segment-md-danger .segment-button.segment-activated {\n  border-color: #f53d3d;\n  color: #f53d3d;\n  opacity: 1;\n}\n\n.segment-md-light .segment-button {\n  color: #f4f4f4;\n}\n\n.segment-md-light .segment-button.activated, .segment-md-light .segment-button.segment-activated {\n  border-color: #f4f4f4;\n  color: #f4f4f4;\n  opacity: 1;\n}\n\n.segment-md-dark .segment-button {\n  color: #222;\n}\n\n.segment-md-dark .segment-button.activated, .segment-md-dark .segment-button.segment-activated {\n  border-color: #222;\n  color: #222;\n  opacity: 1;\n}\nion-segment.hydrated{visibility:inherit}","ion-segment-button_md","\nion-segment-button.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-segment.md",

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