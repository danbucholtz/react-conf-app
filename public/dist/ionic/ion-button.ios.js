/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-button_ios",".button {\n  text-align: center;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  position: relative;\n  z-index: 0;\n  display: inline-block;\n  border: 0;\n  line-height: 1;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: top;\n  vertical-align: -webkit-baseline-middle;\n  transition: background-color, opacity 100ms linear;\n  font-kerning: none;\n  user-select: none;\n  contain: content;\n}\n\n.button-inner {\n  display: flex;\n  flex-flow: row nowrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\na[disabled],\nbutton[disabled],\n.button[disabled] {\n  cursor: default;\n  opacity: .4;\n  pointer-events: none;\n}\n\n.button-block {\n  display: block;\n  clear: both;\n  width: 100%;\n  contain: strict;\n}\n\n.button-block::after {\n  clear: both;\n}\n\n.button-full {\n  display: block;\n  width: 100%;\n  contain: strict;\n}\n\n.button-full.button-outline {\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0;\n}\n\n.button ion-icon {\n  width: 1.4em;\n  height: 1.4em;\n  pointer-events: none;\n}\n\n.button ion-icon[slot=\"start\"] {\n  margin: 0 0.3em 0 -0.3em;\n}\n\n.button ion-icon[slot=\"end\"] {\n  margin: 0 -0.2em 0 0.3em;\n}\n\n.button ion-icon[slot=\"icon-only\"] {\n  width: 1.8em;\n  height: 1.8em;\n}\n\n.button-ios {\n  border-radius: 4px;\n  margin: 0.4rem 0.2rem;\n  padding: 0 1em;\n  height: 2.8em;\n  font-size: 1.6rem;\n  color: #fff;\n  background-color: #488aff;\n}\n\n.button-ios.activated {\n  background-color: #427feb;\n  opacity: 1;\n}\n\n.button-ios:hover:not(.disable-hover) {\n  opacity: 0.8;\n}\n\n.button-ios .icon {\n  fill: currentColor;\n}\n\n.button-large-ios {\n  padding: 0 1em;\n  height: 2.8em;\n  font-size: 2rem;\n}\n\n.button-small-ios {\n  padding: 0 0.9em;\n  height: 2.1em;\n  font-size: 1.3rem;\n}\n\n.button-block-ios {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.button-full-ios {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0;\n}\n\n.button-outline-ios {\n  border-radius: 4px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #488aff;\n  color: #488aff;\n  background-color: transparent;\n}\n\n.button-outline-ios.activated {\n  color: #fff;\n  background-color: #488aff;\n  opacity: 1;\n}\n\n.button-clear-ios {\n  border-color: transparent;\n  color: #488aff;\n  background-color: transparent;\n}\n\n.button-clear-ios.activated {\n  background-color: transparent;\n  opacity: 0.4;\n}\n\n.button-clear-ios:hover:not(.disable-hover) {\n  color: #488aff;\n  opacity: 0.6;\n}\n\n.button-round-ios {\n  border-radius: 64px;\n  padding: 0 2.6rem;\n}\n\n.button-ios-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.button-ios-primary.activated {\n  background-color: #427feb;\n}\n\n.button-outline-ios-primary {\n  border-color: #488aff;\n  color: #488aff;\n  background-color: transparent;\n}\n\n.button-outline-ios-primary.activated {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.button-clear-ios-primary {\n  border-color: transparent;\n  color: #488aff;\n  background-color: transparent;\n}\n\n.button-clear-ios-primary.activated {\n  opacity: 0.4;\n}\n\n.button-clear-ios-primary:hover:not(.disable-hover) {\n  color: #488aff;\n}\n\n.button-ios-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.button-ios-secondary.activated {\n  background-color: #2ec95c;\n}\n\n.button-outline-ios-secondary {\n  border-color: #32db64;\n  color: #32db64;\n  background-color: transparent;\n}\n\n.button-outline-ios-secondary.activated {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.button-clear-ios-secondary {\n  border-color: transparent;\n  color: #32db64;\n  background-color: transparent;\n}\n\n.button-clear-ios-secondary.activated {\n  opacity: 0.4;\n}\n\n.button-clear-ios-secondary:hover:not(.disable-hover) {\n  color: #32db64;\n}\n\n.button-ios-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.button-ios-danger.activated {\n  background-color: #e13838;\n}\n\n.button-outline-ios-danger {\n  border-color: #f53d3d;\n  color: #f53d3d;\n  background-color: transparent;\n}\n\n.button-outline-ios-danger.activated {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.button-clear-ios-danger {\n  border-color: transparent;\n  color: #f53d3d;\n  background-color: transparent;\n}\n\n.button-clear-ios-danger.activated {\n  opacity: 0.4;\n}\n\n.button-clear-ios-danger:hover:not(.disable-hover) {\n  color: #f53d3d;\n}\n\n.button-ios-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.button-ios-light.activated {\n  background-color: #e0e0e0;\n}\n\n.button-outline-ios-light {\n  border-color: #f4f4f4;\n  color: #f4f4f4;\n  background-color: transparent;\n}\n\n.button-outline-ios-light.activated {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.button-clear-ios-light {\n  border-color: transparent;\n  color: #f4f4f4;\n  background-color: transparent;\n}\n\n.button-clear-ios-light.activated {\n  opacity: 0.4;\n}\n\n.button-clear-ios-light:hover:not(.disable-hover) {\n  color: #f4f4f4;\n}\n\n.button-ios-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.button-ios-dark.activated {\n  background-color: #343434;\n}\n\n.button-outline-ios-dark {\n  border-color: #222;\n  color: #222;\n  background-color: transparent;\n}\n\n.button-outline-ios-dark.activated {\n  color: #fff;\n  background-color: #222;\n}\n\n.button-clear-ios-dark {\n  border-color: transparent;\n  color: #222;\n  background-color: transparent;\n}\n\n.button-clear-ios-dark.activated {\n  opacity: 0.4;\n}\n\n.button-clear-ios-dark:hover:not(.disable-hover) {\n  color: #222;\n}\n\n.button-strong-ios {\n  font-weight: 600;\n}\nion-button.hydrated{visibility:inherit}","ion-buttons_ios","\nion-buttons.hydrated{visibility:inherit}","ion-icon_ios","\nion-icon.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-button.ios",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
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

class Button {
    constructor() {
        this.itemButton = false;
        /**
         * The type of button.
         * Possible values are: `"button"`, `"bar-button"`.
         */
        this.buttonType = 'button';
        /**
         * If true, sets the button into a disabled state.
         */
        this.disabled = false;
        /**
         * Set to `"clear"` for a transparent button, to `"outline"` for a transparent
         * button with a border, or to `"solid"`. The default style is `"solid"` except inside of
         * `ion-navbar`, where the default is `"clear"`.
         */
        this.fill = 'default';
        /**
         * If true, activates a button with rounded corners.
         * Type: shape
         */
        this.round = false;
        /**
         * If true, activates a button with a heavier font weight.
         * Type: decorator
         */
        this.strong = false;
    }
    render() {
        const { buttonType, itemButton, color, expand, fill, mode, round, size, strong } = this;
        const elementClasses = []
            .concat(getButtonClassList(buttonType, mode), getClassList(buttonType, expand, mode), getClassList(buttonType, size, mode), getClassList(buttonType, round ? 'round' : null, mode), getClassList(buttonType, strong ? 'strong' : null, mode), getColorClassList(buttonType, color, fill, mode), getItemClassList(itemButton, size));
        const TagType = this.href ? 'a' : 'button';
        const buttonClasses = Object.assign({}, getElementClassObject(this.el.classList), getElementClassObject(elementClasses));
        return (h(TagType, { class: buttonClasses, disabled: this.disabled, href: this.href },
            h("span", { class: 'button-inner' },
                h("slot", { name: 'icon-only' }),
                h("slot", { name: 'start' }),
                h("slot", null),
                h("slot", { name: 'end' })),
            h("div", { class: 'button-effect' })));
    }
}
/**
 * Get the classes based on the button type
 * e.g. alert-button, action-sheet-button
 */
function getButtonClassList(buttonType, mode) {
    if (!buttonType) {
        return [];
    }
    return [
        buttonType,
        `${buttonType}-${mode}`
    ];
}
/**
 * Get the classes based on the type
 * e.g. block, full, round, large
 */
function getClassList(buttonType, type, mode) {
    if (!type) {
        return [];
    }
    type = type.toLocaleLowerCase();
    return [
        `${buttonType}-${type}`,
        `${buttonType}-${type}-${mode}`
    ];
}
function getColorClassList(buttonType, color, fill, mode) {
    let className = buttonType;
    if (buttonType !== 'bar-button' && fill === 'solid') {
        fill = 'default';
    }
    if (fill && fill !== 'default') {
        className += `-${fill.toLowerCase()}`;
    }
    // special case for a default bar button
    // if the bar button is default it should get the fill
    // but if a color is passed the fill shouldn't be added
    if (buttonType === 'bar-button' && fill === 'default') {
        className = buttonType;
        if (!color) {
            className += '-' + fill.toLowerCase();
        }
    }
    return [`${className}-${mode}`].concat(fill !== 'default' ? `${className}` : [], color ? `${className}-${mode}-${color}` : []);
}
function getItemClassList(itemButton, size) {
    return itemButton && !size ? ['item-button'] : [];
}

class Buttons {
    componentDidLoad() {
        const buttons = this.el.querySelectorAll('ion-button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('button-type', 'bar-button');
        }
    }
    render() {
        return h("slot", null);
    }
}

class Icon {
    constructor() {
        /**
         * @input {string} Specifies the label to use for accessibility. Defaults to the icon name.
         */
        this.ariaLabel = '';
        /**
         * @input {string} Specifies which icon to use. The appropriate icon will be used based on the mode.
         * For more information, see [Ionicons](/docs/ionicons/).
         */
        this.name = '';
        /**
         * @input {string} Specifies which icon to use on `ios` mode.
         */
        this.ios = '';
        /**
         * @input {string} Specifies which icon to use on `md` mode.
         */
        this.md = '';
        this.svgContent = null;
    }
    get iconName() {
        // if no name was passed set iconName to null
        if (!this.name) {
            return null;
        }
        let iconName = this.name.toLowerCase();
        // default to "md" if somehow the mode wasn't set
        const mode = this.mode || 'md';
        if (!(/^md-|^ios-|^logo-/.test(iconName))) {
            // this does not have one of the defaults
            // so lets auto add in the mode prefix for them
            iconName = mode + '-' + iconName;
        }
        else if (this.ios && mode === 'ios') {
            // if an icon was passed in using the ios or md attributes
            // set the iconName to whatever was passed in
            // when we're also on that mode
            // basically, use the ios attribute when you're on ios
            iconName = this.ios;
        }
        else if (this.md && mode === 'md') {
            // use the md attribute when you're in md mode
            // and the md attribute has been set
            iconName = this.md;
        }
        // only allow alpha characters and dash
        const invalidChars = iconName.replace(/[a-z]|-|\d/g, '');
        if (invalidChars !== '') {
            console.error(`invalid characters in ion-icon name: ${invalidChars}`);
            return null;
        }
        return iconName;
    }
    hostData() {
        const attrs = {
            'role': 'img'
        };
        if (this.ariaLabel) {
            // user provided label
            attrs['aria-label'] = this.ariaLabel;
        }
        else {
            // come up with the label based on the icon name
            const iconName = this.iconName;
            if (iconName) {
                attrs['aria-label'] = iconName
                    .replace('ios-', '')
                    .replace('md-', '')
                    .replace('-outline', '')
                    .replace(/\-/g, ' ');
            }
        }
        return attrs;
    }
    render() {
        if (this.isServer) {
            return h("div", { class: "icon-inner" });
        }
        const iconName = this.iconName;
        if (!iconName) {
            // we don't have good data
            return h("div", { class: "icon-inner" });
        }
        const svgContent = svgContents[iconName];
        if (svgContent === this.svgContent) {
            // we've already loaded up this svg at one point
            // and the svg content we've loaded and assigned checks out
            // render this svg!!
            return h("div", { class: "icon-inner", innerHTML: svgContent });
        }
        // haven't loaded this svg yet
        // start the request
        loadSvgContent(iconName, loadedSvgContent => {
            // we're finished loading the svg content!
            // set to this.svgContent so we do another render
            this.svgContent = loadedSvgContent;
        });
        // actively requesting the svg, so let's just render a div for now
        return h("div", { class: "icon-inner" });
    }
}
function loadSvgContent(iconName, callback) {
    // static since all IonIcons use this same function and pointing at global/shared data
    // passed in callback will have instance info
    // add to the list of callbacks to fiure when this url is finished loading
    (loadCallbacks[iconName] = loadCallbacks[iconName] || []).push(callback);
    if (activeRequests[iconName]) {
        // already requesting this icon, don't bother kicking off another
        return;
    }
    // add this icons to our list of active requests
    activeRequests[iconName] = true;
    // kick off the request for the external svg file
    // create a script element to add to the document.head
    var scriptElm = document.createElement('script');
    scriptElm.charset = 'utf-8';
    scriptElm.async = true;
    scriptElm.src = `${publicPath}svg/${iconName}.js`;
    // create a fallback timeout if something goes wrong
    var tmrId = setTimeout(onScriptComplete, 120000);
    function onScriptComplete() {
        clearTimeout(tmrId);
        scriptElm.onerror = scriptElm.onload = null;
        scriptElm.parentNode.removeChild(scriptElm);
        // remove from our list of active requests
        delete activeRequests[iconName];
    }
    // add script completed listener to this script element
    scriptElm.onerror = scriptElm.onload = onScriptComplete;
    // inject a script tag in the head
    // kick off the actual request
    document.head.appendChild(scriptElm);
}
const activeRequests = {};
const loadCallbacks = [];
const svgContents = {};
// add a jsonp handler to the window
// as svg jsonp files are requested
// once they load they'll call this method
window.loadIonicon = function loadIonicon(svgContent, iconName) {
    // awesome, we've finished loading the svg file
    // remove this url from the active requests
    delete activeRequests[iconName];
    svgContents[iconName] = svgContent;
    // find any callbacks waiting on this icon
    const svgLoadCallbacks = loadCallbacks[iconName];
    if (svgLoadCallbacks) {
        // loop through all the callbacks that are waiting on the svg content
        svgLoadCallbacks.forEach(cb => {
            // fire off this callback which was provided by an instance
            cb(svgContent);
        });
        delete loadCallbacks[iconName];
    }
};

exports['ion-button'] = Button;
exports['ion-buttons'] = Buttons;
exports['ion-icon'] = Icon;
},


/***************** ion-button *****************/
[
/** ion-button: tag **/
"ion-button",

/** ion-button: members **/
[
  [ "buttonType", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "expand", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "fill", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "href", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "itemButton", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "round", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "size", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "strong", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-button: host **/
{}

],

/***************** ion-buttons *****************/
[
/** ion-buttons: tag **/
"ion-buttons",

/** ion-buttons: members **/
[
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-buttons: host **/
{"theme":"bar-buttons"}

],

/***************** ion-icon *****************/
[
/** ion-icon: tag **/
"ion-icon",

/** ion-icon: members **/
[
  [ "ariaLabel", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "ios", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "isServer", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "isServer" ],
  [ "md", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mode", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "mode" ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "svgContent", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-icon: host **/
{"theme":"icon"}

]
);