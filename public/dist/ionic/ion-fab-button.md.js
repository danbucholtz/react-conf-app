/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-fab-button_md",".fab-button {\n  text-align: center;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  position: relative;\n  z-index: 0;\n  display: block;\n  overflow: hidden;\n  width: 56px;\n  height: 56px;\n  font-size: 14px;\n  line-height: 56px;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: background-color, opacity 100ms linear;\n  background-clip: padding-box;\n  font-kerning: none;\n  user-select: none;\n  contain: strict;\n}\n\n.fab-button ion-icon {\n  flex: 1;\n  font-size: 2.4rem;\n  line-height: 1.8rem;\n}\n\nion-fab-button[mini] .fab-button {\n  margin: 8px;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n\n.fab-button-close-icon {\n  left: 0;\n  right: 0;\n  top: 0;\n  position: absolute;\n  height: 100%;\n  opacity: 0;\n  transform: scale(0.4) rotateZ(-45deg);\n  transition: all ease-in-out 300ms;\n  transition-property: transform, opacity;\n}\n\n.fab-button-close-icon .icon-inner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.fab-button .button-inner {\n  transition: all ease-in-out 300ms;\n  transition-property: transform, opacity;\n}\n\n.fab-button-close-active .fab-button-close-icon {\n  opacity: 1;\n  transform: scale(1) rotateZ(0deg);\n}\n\n.fab-button-close-active .button-inner {\n  opacity: 0;\n  transform: scale(0.4) rotateZ(45deg);\n}\n\n.fab-button-md {\n  color: #fff;\n  background-color: #488aff;\n  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.fab-button-md.activated {\n  background-color: #427feb;\n  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.4), 0 4px 7px 0 rgba(0, 0, 0, 0.1);\n}\n\n.fab-button-md .icon {\n  fill: #fff;\n}\n\n.fab-button-md-in-list {\n  color: #000;\n  background-color: #f4f4f4;\n  transition: transform 200ms ease 10ms, opacity 200ms ease 10ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.fab-button-md-in-list.activated {\n  background-color: #e0e0e0;\n}\n\n.fab-button-md-in-list .icon {\n  fill: #000;\n}\n\n.fab-button-md .button-effect {\n  background-color: #fff;\n}\n\n.fab-button-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.fab-button-md-primary .icon {\n  fill: #fff;\n}\n\n.fab-button-md-primary.activated {\n  background-color: #427feb;\n}\n\n.fab-button-md-primary .button-effect {\n  background-color: #fff;\n}\n\n.fab-button-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.fab-button-md-secondary .icon {\n  fill: #fff;\n}\n\n.fab-button-md-secondary.activated {\n  background-color: #2ec95c;\n}\n\n.fab-button-md-secondary .button-effect {\n  background-color: #fff;\n}\n\n.fab-button-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.fab-button-md-danger .icon {\n  fill: #fff;\n}\n\n.fab-button-md-danger.activated {\n  background-color: #e13838;\n}\n\n.fab-button-md-danger .button-effect {\n  background-color: #fff;\n}\n\n.fab-button-md-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.fab-button-md-light .icon {\n  fill: #000;\n}\n\n.fab-button-md-light.activated {\n  background-color: #e0e0e0;\n}\n\n.fab-button-md-light .button-effect {\n  background-color: #000;\n}\n\n.fab-button-md-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.fab-button-md-dark .icon {\n  fill: #fff;\n}\n\n.fab-button-md-dark.activated {\n  background-color: #343434;\n}\n\n.fab-button-md-dark .button-effect {\n  background-color: #fff;\n}\nion-fab-button.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-fab-button.md",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

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

class FabButton {
    constructor() {
        /**
         * @input {boolean} If true, adds transparency to the fab.
         * Only affects `ios` mode. Defaults to `false`.
         */
        this.translucent = false;
        this.activated = false;
        this.toggleActive = () => { };
        this.show = false;
        this.inContainer = false;
        this.inList = false;
        /**
         * @input {boolean} If true, sets the button into a disabled state.
         */
        this.disabled = false;
    }
    componentDidLoad() {
        const parentNode = this.el.parentNode.nodeName;
        this.inList = (parentNode === 'ION-FAB-LIST');
        this.inContainer = (parentNode === 'ION-FAB');
    }
    clickedFab() {
        if (this.inContainer) {
            this.toggleActive();
        }
    }
    /**
     * @hidden
     * Get the classes for fab buttons in lists
     */
    getFabListClassList() {
        if (!this.inList) {
            return [];
        }
        let listClasses = [
            `fab-button-in-list`,
            `fab-button-${this.mode}-in-list`
        ];
        if (this.translucent) {
            listClasses.push(`fab-button-translucent-${this.mode}-in-list`);
        }
        return listClasses;
    }
    /**
     * @hidden
     * Get the close active class for fab buttons
     */
    getFabActiveClassList() {
        if (!this.activated) {
            return [];
        }
        return [
            `fab-button-close-active`
        ];
    }
    /**
     * @hidden
     * Get the show class for fab buttons
     */
    getFabShowClassList() {
        if (!this.show) {
            return [];
        }
        return [
            `fab-button-show`
        ];
    }
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'fab-button');
        const translucentClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'fab-button-translucent') : {};
        const hostClasses = getElementClassObject(this.el.classList);
        const elementClasses = []
            .concat(this.getFabListClassList(), this.getFabActiveClassList(), this.getFabShowClassList())
            .reduce((prevValue, cssClass) => {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
        const TagType = this.href ? 'a' : 'button';
        const fabClasses = Object.assign({}, themedClasses, translucentClasses, hostClasses, elementClasses);
        return (h(TagType, { class: fabClasses, onClick: this.clickedFab.bind(this), disabled: this.disabled },
            h("ion-icon", { name: 'close', class: 'fab-button-close-icon' }),
            h("span", { class: 'button-inner' },
                h("slot", null)),
            h("div", { class: 'button-effect' })));
    }
}

exports['ion-fab-button'] = FabButton;
},


/***************** ion-fab-button *****************/
[
/** ion-fab-button: tag **/
"ion-fab-button",

/** ion-fab-button: members **/
[
  [ "activated", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "href", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "inContainer", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "inList", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "show", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "toggleActive", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "translucent", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-fab-button: host **/
{}

]
);