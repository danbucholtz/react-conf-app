/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-item_ios","ion-item {\n  display: block;\n  contain: content;\n}\n\n.item-block {\n  margin: 0;\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 44px;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  color: inherit;\n}\n\n.item-inner {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  overflow: hidden;\n  flex: 1;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  min-height: inherit;\n  border: 0;\n}\n\n.input-wrapper {\n  display: flex;\n  overflow: hidden;\n  flex: 1;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  text-overflow: ellipsis;\n}\n\n.item[no-lines],\n.item.item[no-lines] .item-inner {\n  border: 0;\n}\n\nion-item-group {\n  display: block;\n}\n\n[vertical-align-top],\nion-input.item {\n  align-items: flex-start;\n}\n\n.item-cover {\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  cursor: pointer;\n}\n\n.item-ios {\n  padding-left: 16px;\n  padding-left: calc(constant(safe-area-inset-left) + 16px);\n  padding-left: calc(env(safe-area-inset-left) + 16px);\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #000;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n}\n\n.item-ios.activated {\n  background-color: #d9d9d9;\n  transition-duration: 0ms;\n}\n\n.item-ios h1 {\n  margin: 0 0 2px;\n  font-size: 2.4rem;\n  font-weight: normal;\n}\n\n.item-ios h2 {\n  margin: 0 0 2px;\n  font-size: 1.7rem;\n  font-weight: normal;\n}\n\n.item-ios h3,\n.item-ios h4,\n.item-ios h5,\n.item-ios h6 {\n  margin: 0 0 3px;\n  font-size: 1.4rem;\n  font-weight: normal;\n  line-height: normal;\n}\n\n.item-ios p {\n  margin: 0 0 2px;\n  overflow: inherit;\n  font-size: 1.4rem;\n  line-height: normal;\n  text-overflow: inherit;\n  color: #8e9093;\n}\n\n.item-ios h2:last-child,\n.item-ios h3:last-child,\n.item-ios h4:last-child,\n.item-ios h5:last-child,\n.item-ios h6:last-child,\n.item-ios p:last-child {\n  margin-bottom: 0;\n}\n\n.item-ios.item-block .item-inner {\n  padding-right: 8px;\n  border-bottom: 0.55px solid #c8c7cc;\n}\n\n\@media screen and (orientation: landscape) {\n  .item-ios.item-block .item-inner {\n    padding-right: calc(constant(safe-area-inset-right) + 8px);\n    padding-right: calc(env(safe-area-inset-right) + 8px);\n  }\n}\n\n.item-ios [slot=\"start\"] {\n  margin: 8px 16px 8px 0;\n}\n\n.item-ios [slot=\"end\"] {\n  margin: 8px;\n}\n\n.item-ios ion-icon[slot=\"start\"],\n.item-ios ion-icon[slot=\"end\"] {\n  margin-left: 0;\n  margin-top: 9px;\n  margin-bottom: 8px;\n}\n\n.item-ios .item-button {\n  padding: 0 0.5em;\n  height: 24px;\n  font-size: 1.3rem;\n}\n\n.item-ios .item-button ion-icon[slot=\"icon-only\"] {\n  padding: 0 1px;\n}\n\n.item-ios ion-avatar[slot=\"start\"],\n.item-ios ion-thumbnail[slot=\"start\"] {\n  margin: 8px 16px 8px 0;\n}\n\n.item-ios ion-avatar[slot=\"end\"],\n.item-ios ion-thumbnail[slot=\"end\"] {\n  margin: 8px;\n}\n\n.item-ios.item-label-stacked [slot=\"end\"],\n.item-ios.item-label-floating [slot=\"end\"] {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.item-ios ion-avatar {\n  width: 36px;\n  height: 36px;\n}\n\n.item-ios ion-thumbnail {\n  width: 56px;\n  height: 56px;\n}\n\n.item-ios[detail-push] .item-inner,\nbutton.item-ios:not([detail-none]) .item-inner,\na.item-ios:not([detail-none]) .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='%23c8c7cc'/></svg>\");\n  padding-right: 32px;\n  background-position: right 14px center;\n  background-position: right calc(14px + constant(safe-area-inset-right)) center;\n  background-position: right calc(14px + env(safe-area-inset-right)) center;\n  background-repeat: no-repeat;\n  background-size: 14px 14px;\n}\n\nion-item-group .item-ios:first-child .item-inner {\n  border-top-width: 0;\n}\n\nion-item-group .item-ios:last-child .item-inner,\nion-item-group .item-wrapper:last-child .item-ios .item-inner {\n  border: 0;\n}\n\n.item-ios .text-ios-primary {\n  color: #488aff;\n}\n\n.item-ios-primary,\n.item-divider-ios-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.item-ios-primary p,\n.item-divider-ios-primary p {\n  color: #fff;\n}\n\n.item-ios-primary.activated,\n.item-divider-ios-primary.activated {\n  background-color: #427feb;\n}\n\n.item-ios .text-ios-secondary {\n  color: #32db64;\n}\n\n.item-ios-secondary,\n.item-divider-ios-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.item-ios-secondary p,\n.item-divider-ios-secondary p {\n  color: #fff;\n}\n\n.item-ios-secondary.activated,\n.item-divider-ios-secondary.activated {\n  background-color: #2ec95c;\n}\n\n.item-ios .text-ios-danger {\n  color: #f53d3d;\n}\n\n.item-ios-danger,\n.item-divider-ios-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.item-ios-danger p,\n.item-divider-ios-danger p {\n  color: #fff;\n}\n\n.item-ios-danger.activated,\n.item-divider-ios-danger.activated {\n  background-color: #e13838;\n}\n\n.item-ios .text-ios-light {\n  color: #f4f4f4;\n}\n\n.item-ios-light,\n.item-divider-ios-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.item-ios-light p,\n.item-divider-ios-light p {\n  color: #000;\n}\n\n.item-ios-light.activated,\n.item-divider-ios-light.activated {\n  background-color: #e0e0e0;\n}\n\n.item-ios .text-ios-dark {\n  color: #222;\n}\n\n.item-ios-dark,\n.item-divider-ios-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.item-ios-dark p,\n.item-divider-ios-dark p {\n  color: #fff;\n}\n\n.item-ios-dark.activated,\n.item-divider-ios-dark.activated {\n  background-color: #343434;\n}\nion-item.hydrated{visibility:inherit}","ion-item","\nion-item.hydrated{visibility:inherit}","ion-item-divider","\nion-item-divider.hydrated{visibility:inherit}","ion-item-divider_ios","ion-item-divider {\n  margin: 0;\n  padding: 0;\n  z-index: 100;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 30px;\n}\n\nion-item-divider[sticky] {\n  position: sticky;\n  top: 0;\n}\n\n.item-divider-ios {\n  padding-left: 16px;\n  color: #222;\n  background-color: #f7f7f7;\n}\n\n.item-divider-ios-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.item-divider-ios-primary p {\n  color: #fff;\n}\n\n.item-divider-ios-primary.activated {\n  background-color: #427feb;\n}\n\n.item-divider-ios-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.item-divider-ios-secondary p {\n  color: #fff;\n}\n\n.item-divider-ios-secondary.activated {\n  background-color: #2ec95c;\n}\n\n.item-divider-ios-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.item-divider-ios-danger p {\n  color: #fff;\n}\n\n.item-divider-ios-danger.activated {\n  background-color: #e13838;\n}\n\n.item-divider-ios-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.item-divider-ios-light p {\n  color: #000;\n}\n\n.item-divider-ios-light.activated {\n  background-color: #e0e0e0;\n}\n\n.item-divider-ios-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.item-divider-ios-dark p {\n  color: #fff;\n}\n\n.item-divider-ios-dark.activated {\n  background-color: #343434;\n}\nion-item-divider.hydrated{visibility:inherit}","ion-label","\nion-label.hydrated{visibility:inherit}","ion-label_ios","ion-label {\n  margin: 0;\n  display: block;\n  overflow: hidden;\n  flex: 1;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.item-input ion-label {\n  flex: initial;\n  max-width: 200px;\n  pointer-events: none;\n}\n\n[text-wrap] ion-label {\n  white-space: normal;\n}\n\nion-label[fixed] {\n  flex: 0 0 100px;\n  width: 100px;\n  min-width: 100px;\n  max-width: 200px;\n}\n\n.item-label-stacked ion-label,\n.item-label-floating ion-label {\n  align-self: stretch;\n  width: auto;\n  max-width: 100%;\n}\n\nion-label[stacked],\nion-label[floating] {\n  margin-bottom: 0;\n}\n\n.item-label-stacked .input-wrapper,\n.item-label-floating .input-wrapper {\n  flex: 1;\n  flex-direction: column;\n}\n\n.item-label-stacked ion-select,\n.item-label-floating ion-select {\n  align-self: stretch;\n  max-width: 100%;\n}\n\n.label-ios {\n  margin: 11px 8px 11px 0;\n}\n\n.label-ios[stacked] {\n  margin-bottom: 4px;\n  font-size: 1.2rem;\n}\n\n.label-ios[floating] {\n  margin-bottom: 0;\n  transform: translate3d(0,  27px,  0);\n  transform-origin: left top;\n  transition: transform 150ms ease-in-out;\n}\n\n.item-input-has-focus .label-ios[floating],\n.item-input-has-value .label-ios[floating] {\n  transform: translate3d(0,  0,  0) scale(0.8);\n}\n\n.label-ios-primary,\n.item-input .label-ios-primary,\n.item-select .label-ios-primary,\n.item-datetime .label-ios-primary {\n  color: #488aff;\n}\n\n.label-ios-secondary,\n.item-input .label-ios-secondary,\n.item-select .label-ios-secondary,\n.item-datetime .label-ios-secondary {\n  color: #32db64;\n}\n\n.label-ios-danger,\n.item-input .label-ios-danger,\n.item-select .label-ios-danger,\n.item-datetime .label-ios-danger {\n  color: #f53d3d;\n}\n\n.label-ios-light,\n.item-input .label-ios-light,\n.item-select .label-ios-light,\n.item-datetime .label-ios-light {\n  color: #f4f4f4;\n}\n\n.label-ios-dark,\n.item-input .label-ios-dark,\n.item-select .label-ios-dark,\n.item-datetime .label-ios-dark {\n  color: #222;\n}\nion-label.hydrated{visibility:inherit}","ion-list","\nion-list.hydrated{visibility:inherit}","ion-list_ios","ion-list {\n  margin: 0;\n  padding: 0;\n  display: block;\n  contain: content;\n  list-style-type: none;\n}\n\nion-list[inset] {\n  overflow: hidden;\n  transform: translateZ(0);\n}\n\n.list-ios {\n  margin: -1px 0 32px;\n}\n\n.list-ios > .item-block:first-child {\n  border-top: 0.55px solid #c8c7cc;\n}\n\n.list-ios > .item-block:last-child,\n.list-ios > .item-wrapper:last-child .item-block {\n  border-bottom: 0.55px solid #c8c7cc;\n}\n\n.list-ios > .item-block:last-child .item-inner,\n.list-ios > .item-wrapper:last-child .item-block .item-inner {\n  border-bottom: 0;\n}\n\n.list-ios .item-block .item-inner {\n  border-bottom: 0.55px solid #c8c7cc;\n}\n\n.list-ios .item[no-lines],\n.list-ios .item[no-lines] .item-inner {\n  border-width: 0;\n}\n\n.list-ios:not([inset]) + .list-ios:not([inset]) ion-list-header {\n  margin-top: -10px;\n  padding-top: 0;\n}\n\n.list-ios[inset] {\n  margin: 16px;\n  border-radius: 4px;\n}\n\n.list-ios[inset] ion-list-header {\n  background-color: #fff;\n}\n\n.list-ios[inset] .item {\n  border-bottom: 1px solid #c8c7cc;\n}\n\n.list-ios[inset] .item-inner {\n  border-bottom: 0;\n}\n\n.list-ios[inset] > .item:first-child,\n.list-ios[inset] > .item-wrapper:first-child .item {\n  border-top: 0;\n}\n\n.list-ios[inset] > .item:last-child,\n.list-ios[inset] > .item-wrapper:last-child .item {\n  border-bottom: 0;\n}\n\n.list-ios[inset] + ion-list[inset] {\n  margin-top: 0;\n}\n\n.list-ios[no-lines] ion-list-header,\n.list-ios[no-lines] .item,\n.list-ios[no-lines] .item .item-inner {\n  border-width: 0;\n}\nion-list.hydrated{visibility:inherit}","ion-list-header","\nion-list-header.hydrated{visibility:inherit}","ion-list-header_ios","ion-list-header {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 4rem;\n}\n\n.list-header-ios {\n  padding-left: 16px;\n  position: relative;\n  border-bottom: 0.55px solid #c8c7cc;\n  font-size: 1.2rem;\n  font-weight: 500;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n  color: #333;\n  background: transparent;\n}\n\n.list-header-ios-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.list-header-ios-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.list-header-ios-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.list-header-ios-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.list-header-ios-dark {\n  color: #fff;\n  background-color: #222;\n}\nion-list-header.hydrated{visibility:inherit}","ion-skeleton-text","ion-skeleton-text {\n  display: inline-block;\n  width: 100%;\n  pointer-events: none;\n  user-select: none;\n}\n\nion-skeleton-text span {\n  display: inline-block;\n  font-size: .8rem;\n  background-color: #ececec;\n}\nion-skeleton-text.hydrated{visibility:inherit}","ion-skeleton-text_ios","\nion-skeleton-text.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-item.ios",

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

class Item {
    constructor() {
        this.itemStyles = {};
    }
    itemStyle(ev) {
        ev.stopPropagation();
        let hasChildStyleChange = false;
        let tagName = ev.target.tagName;
        let updatedStyles = ev.detail;
        for (var key in updatedStyles) {
            if (('item-' + key) !== key) {
                Object.defineProperty(updatedStyles, 'item-' + key, Object.getOwnPropertyDescriptor(updatedStyles, key));
                delete updatedStyles[key];
                hasChildStyleChange = true;
            }
        }
        this.itemStyles[tagName] = updatedStyles;
        if (hasChildStyleChange) {
            this.hasStyleChange = true;
        }
    }
    componentDidLoad() {
        // Add item-button classes to each ion-button in the item
        const buttons = this.el.querySelectorAll('ion-button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].itemButton = true;
        }
    }
    render() {
        let childStyles = {};
        for (var key in this.itemStyles) {
            childStyles = Object.assign(childStyles, this.itemStyles[key]);
        }
        let themedClasses = Object.assign({}, childStyles, createThemedClasses(this.mode, this.color, 'item'), { 'item-block': true });
        this.hasStyleChange = false;
        // TODO add support for button items
        const TagType = this.href ? 'a' : 'div';
        return (h(TagType, { class: themedClasses },
            h("slot", { name: 'start' }),
            h("div", { class: 'item-inner' },
                h("div", { class: 'input-wrapper' },
                    h("slot", null)),
                h("slot", { name: 'end' })),
            h("div", { class: 'button-effect' })));
    }
}

class ItemDivider {
    render() {
        return [
            h("slot", { name: 'start' }),
            h("div", { class: 'item-inner' },
                h("div", { class: 'input-wrapper' },
                    h("slot", null)),
                h("slot", { name: 'end' }))
        ];
    }
}

class Label {
    constructor() {
        /**
         * @output {Event} If true, the label will sit alongside an input. Defaults to `false`.
         */
        this.fixed = false;
        /**
         * @output {Event} If true, the label will float above an input when the value is empty or the input is focused. Defaults to `false`.
         */
        this.floating = false;
        /**
         * @output {Event} If true, the label will be stacked above an input. Defaults to `false`.
         */
        this.stacked = false;
    }
    /**
     * @hidden
     */
    getText() {
        return this.el.textContent || '';
    }
    componentDidLoad() {
        this.emitStyle();
    }
    emitStyle() {
        clearTimeout(this.styleTmr);
        let styles = {
            'label-fixed': this.fixed,
            'label-floating': this.floating,
            'label-stacked': this.stacked
        };
        this.styleTmr = setTimeout(() => {
            this.ionStyle.emit(styles);
        });
    }
    render() {
        return h("slot", null);
    }
}

/** @hidden */












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

class List {
    getOpenedItem() {
        return this.openedItem;
    }
    setOpenedItem(itemSliding) {
        this.openedItem = itemSliding;
    }
    closeSlidingItems() {
        if (this.openedItem) {
            this.openedItem.close();
            this.openedItem = null;
            return true;
        }
        return false;
    }
    render() {
        return h("slot", null);
    }
}

class ListHeader {
    render() {
        return h("slot", null);
    }
}

class SkeletonText {
    constructor() {
        this.width = '100%';
    }
    render() {
        return h("span", { style: { width: this.width } }, "\u00A0");
    }
}

exports['ion-item'] = Item;
exports['ion-item-divider'] = ItemDivider;
exports['ion-label'] = Label;
exports['ion-list'] = List;
exports['ion-list-header'] = ListHeader;
exports['ion-skeleton-text'] = SkeletonText;
},


/***************** ion-item *****************/
[
/** ion-item: tag **/
"ion-item",

/** ion-item: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "hasStyleChange", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "href", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-item: host **/
{}

],

/***************** ion-item-divider *****************/
[
/** ion-item-divider: tag **/
"ion-item-divider",

/** ion-item-divider: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-item-divider: host **/
{"theme":"item item-divider"}

],

/***************** ion-label *****************/
[
/** ion-label: tag **/
"ion-label",

/** ion-label: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "fixed", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "floating", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "getText", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "stacked", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-label: host **/
{"theme":"label"},

/** ion-label: events **/
[
  [
    /*****  ion-label ionStyle ***** /
    /* event name ***/ "ionStyle"
  ]
]

],

/***************** ion-list *****************/
[
/** ion-list: tag **/
"ion-list",

/** ion-list: members **/
[
  [ "closeSlidingItems", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getOpenedItem", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "setOpenedItem", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-list: host **/
{"theme":"list"}

],

/***************** ion-list-header *****************/
[
/** ion-list-header: tag **/
"ion-list-header",

/** ion-list-header: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-list-header: host **/
{"theme":"list-header"}

],

/***************** ion-skeleton-text *****************/
[
/** ion-skeleton-text: tag **/
"ion-skeleton-text",

/** ion-skeleton-text: members **/
[
  [ "width", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-skeleton-text: host **/
{}

]
);