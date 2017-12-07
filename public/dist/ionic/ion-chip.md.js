/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-chip_md","ion-chip {\n  display: inline-flex;\n  align-self: center;\n  font-weight: normal;\n  vertical-align: middle;\n  box-sizing: border-box;\n}\n\nion-chip ion-icon {\n  text-align: center;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  font-size: 18px;\n  line-height: 36px;\n}\n\n.chip-md {\n  border-radius: 16px;\n  margin: 2px 0;\n  height: 32px;\n  font-size: 13px;\n  line-height: 32px;\n  color: rgba(0, 0, 0, 0.87);\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.chip-md > ion-label {\n  margin: 0 10px;\n}\n\n.chip-md > ion-icon {\n  background-color: #488aff;\n  fill: #fff;\n}\n\n.chip-md ion-avatar {\n  width: 32px;\n  height: 32px;\n}\n\n.chip-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.chip-md .icon-md-primary {\n  background-color: #488aff;\n  fill: #fff;\n}\n\n.chip-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.chip-md .icon-md-secondary {\n  background-color: #32db64;\n  fill: #fff;\n}\n\n.chip-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.chip-md .icon-md-danger {\n  background-color: #f53d3d;\n  fill: #fff;\n}\n\n.chip-md-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.chip-md .icon-md-light {\n  background-color: #f4f4f4;\n  fill: #000;\n}\n\n.chip-md-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.chip-md .icon-md-dark {\n  background-color: #222;\n  fill: #fff;\n}\nion-chip.hydrated{visibility:inherit}","ion-chip-button_md",".chip-button {\n  border-radius: 50%;\n  margin: 0;\n  width: 32px;\n  height: 32px;\n}\n\n.chip-button-md {\n  background-color: #488aff;\n}\n\n.chip-button-md .icon {\n  fill: #fff;\n}\n\n.chip-button-clear-md {\n  color: #488aff;\n  background-color: transparent;\n}\n\n.chip-button-clear-md .icon {\n  fill: #488aff;\n}\n\n.chip-button-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.chip-button-md-primary .icon {\n  fill: #fff;\n}\n\n.chip-button-clear-md-primary {\n  color: #488aff;\n}\n\n.chip-button-clear-md-primary .icon {\n  fill: #488aff;\n}\n\n.chip-button-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.chip-button-md-secondary .icon {\n  fill: #fff;\n}\n\n.chip-button-clear-md-secondary {\n  color: #32db64;\n}\n\n.chip-button-clear-md-secondary .icon {\n  fill: #32db64;\n}\n\n.chip-button-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.chip-button-md-danger .icon {\n  fill: #fff;\n}\n\n.chip-button-clear-md-danger {\n  color: #f53d3d;\n}\n\n.chip-button-clear-md-danger .icon {\n  fill: #f53d3d;\n}\n\n.chip-button-md-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.chip-button-md-light .icon {\n  fill: #000;\n}\n\n.chip-button-clear-md-light {\n  color: #f4f4f4;\n}\n\n.chip-button-clear-md-light .icon {\n  fill: #f4f4f4;\n}\n\n.chip-button-md-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.chip-button-md-dark .icon {\n  fill: #fff;\n}\n\n.chip-button-clear-md-dark {\n  color: #222;\n}\n\n.chip-button-clear-md-dark .icon {\n  fill: #222;\n}\nion-chip-button.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-chip.md",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
class Chip {
    render() {
        return h("slot", null);
    }
}

// @stencil/core

/**
 * Create the mode and color classes for the component based on the classes passed in
 */

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

class ChipButton {
    constructor() {
        /**
         * @input {boolean} If true, activates a transparent button style.
         */
        this.clear = false;
        /**
         * @input {boolean} If true, sets the button into a disabled state.
         */
        this.disabled = false;
    }
    /**
     * @hidden
     * Get the classes based on the button type
     * e.g. alert-button, action-sheet-button
     */
    getButtonClassList(buttonType, mode) {
        if (!buttonType) {
            return [];
        }
        return [
            buttonType,
            `${buttonType}-${mode}`
        ];
    }
    /**
     * @hidden
     * Get the classes for the color
     */
    getColorClassList(color, buttonType, style, mode) {
        let className = (style === 'default') ? `${buttonType}` : `${buttonType}-${style}`;
        return [`${className}-${mode}`].concat(style !== 'default' ? `${className}` : [], color ? `${className}-${mode}-${color}` : []);
    }
    /**
     * @hidden
     * Get the classes for the style
     * Chip buttons can only be clear or default (solid)
     */
    getStyleClassList(buttonType) {
        let classList = [].concat(this.clear ? this.getColorClassList(this.color, buttonType, 'clear', this.mode) : []);
        if (classList.length === 0) {
            classList = this.getColorClassList(this.color, buttonType, 'default', this.mode);
        }
        return classList;
    }
    render() {
        const buttonType = 'chip-button';
        const hostClasses = getElementClassObject(this.el.classList);
        const elementClasses = []
            .concat(this.getButtonClassList(buttonType, this.mode), this.getStyleClassList(buttonType))
            .reduce((prevValue, cssClass) => {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
        const TagType = this.href ? 'a' : 'button';
        const buttonClasses = Object.assign({}, hostClasses, elementClasses);
        return (h(TagType, { class: buttonClasses, disabled: this.disabled },
            h("span", { class: 'button-inner' },
                h("slot", null)),
            h("div", { class: 'button-effect' })));
    }
}

exports['ion-chip'] = Chip;
exports['ion-chip-button'] = ChipButton;
},


/***************** ion-chip *****************/
[
/** ion-chip: tag **/
"ion-chip",

/** ion-chip: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-chip: host **/
{"theme":"chip"}

],

/***************** ion-chip-button *****************/
[
/** ion-chip-button: tag **/
"ion-chip-button",

/** ion-chip-button: members **/
[
  [ "clear", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "href", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-chip-button: host **/
{}

]
);