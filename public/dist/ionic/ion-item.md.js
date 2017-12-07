/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-item_md","ion-item {\n  display: block;\n  contain: content;\n}\n\n.item-block {\n  margin: 0;\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 44px;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  color: inherit;\n}\n\n.item-inner {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  overflow: hidden;\n  flex: 1;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  min-height: inherit;\n  border: 0;\n}\n\n.input-wrapper {\n  display: flex;\n  overflow: hidden;\n  flex: 1;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  text-overflow: ellipsis;\n}\n\n.item[no-lines],\n.item.item[no-lines] .item-inner {\n  border: 0;\n}\n\nion-item-group {\n  display: block;\n}\n\n[vertical-align-top],\nion-input.item {\n  align-items: flex-start;\n}\n\n.item-cover {\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  cursor: pointer;\n}\n\n.item-md {\n  padding-left: 16px;\n  padding-right: 0;\n  position: relative;\n  font-size: 1.6rem;\n  font-weight: normal;\n  text-transform: none;\n  color: #000;\n  background-color: #fff;\n  box-shadow: none;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.item-md.activated {\n  background-color: #f1f1f1;\n}\n\n.item-md[no-lines] {\n  border-width: 0;\n}\n\n.item-md h1 {\n  margin: 0 0 2px;\n  font-size: 2.4rem;\n  font-weight: normal;\n}\n\n.item-md h2 {\n  margin: 2px 0;\n  font-size: 1.6rem;\n  font-weight: normal;\n}\n\n.item-md h3,\n.item-md h4,\n.item-md h5,\n.item-md h6 {\n  margin: 2px 0;\n  font-size: 1.4rem;\n  font-weight: normal;\n  line-height: normal;\n}\n\n.item-md p {\n  margin: 0 0 2px;\n  overflow: inherit;\n  font-size: 1.4rem;\n  line-height: normal;\n  text-overflow: inherit;\n  color: #666;\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 8px;\n  border-bottom: 1px solid #dedede;\n}\n\n.item-md [slot=\"start\"],\n.item-md [slot=\"end\"] {\n  margin: 9px 8px 9px 0;\n}\n\n.item-md ion-icon[slot=\"start\"],\n.item-md ion-icon[slot=\"end\"] {\n  margin-left: 0;\n  margin-top: 11px;\n  margin-bottom: 10px;\n}\n\n.item-md .item-button {\n  padding: 0 0.6em;\n  height: 25px;\n  font-size: 1.2rem;\n}\n\n.item-md .item-button ion-icon[slot=\"icon-only\"] {\n  padding: 0;\n}\n\n.item-md ion-icon[slot=\"start\"] + .item-inner,\n.item-md ion-icon[slot=\"start\"] + .item-input {\n  margin-left: 24px;\n}\n\n.item-md ion-avatar[slot=\"start\"],\n.item-md ion-thumbnail[slot=\"start\"] {\n  margin: 8px 16px 8px 0;\n}\n\n.item-md ion-avatar[slot=\"end\"],\n.item-md ion-thumbnail[slot=\"end\"] {\n  margin: 8px;\n}\n\n.item-md.item-label-stacked [slot=\"end\"],\n.item-md.item-label-floating [slot=\"end\"] {\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n\n.item-md ion-avatar {\n  width: 40px;\n  height: 40px;\n}\n\n.item-md ion-thumbnail {\n  width: 80px;\n  height: 80px;\n}\n\nion-item-group .item-md:first-child .item-inner {\n  border-top-width: 0;\n}\n\nion-item-group .item-md:last-child .item-inner,\nion-item-group .item-md .item-wrapper:last-child .item-inner {\n  border: 0;\n}\n\n.item-md .text-md-primary {\n  color: #488aff;\n}\n\n.item-md-primary,\n.item-divider-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.item-md-primary p,\n.item-divider-md-primary p {\n  color: #fff;\n}\n\n.item-md-primary.activated,\n.item-divider-md-primary.activated {\n  background-color: #427feb;\n}\n\n.item-md .text-md-secondary {\n  color: #32db64;\n}\n\n.item-md-secondary,\n.item-divider-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.item-md-secondary p,\n.item-divider-md-secondary p {\n  color: #fff;\n}\n\n.item-md-secondary.activated,\n.item-divider-md-secondary.activated {\n  background-color: #2ec95c;\n}\n\n.item-md .text-md-danger {\n  color: #f53d3d;\n}\n\n.item-md-danger,\n.item-divider-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.item-md-danger p,\n.item-divider-md-danger p {\n  color: #fff;\n}\n\n.item-md-danger.activated,\n.item-divider-md-danger.activated {\n  background-color: #e13838;\n}\n\n.item-md .text-md-light {\n  color: #f4f4f4;\n}\n\n.item-md-light,\n.item-divider-md-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.item-md-light p,\n.item-divider-md-light p {\n  color: #000;\n}\n\n.item-md-light.activated,\n.item-divider-md-light.activated {\n  background-color: #e0e0e0;\n}\n\n.item-md .text-md-dark {\n  color: #222;\n}\n\n.item-md-dark,\n.item-divider-md-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.item-md-dark p,\n.item-divider-md-dark p {\n  color: #fff;\n}\n\n.item-md-dark.activated,\n.item-divider-md-dark.activated {\n  background-color: #343434;\n}\n\n.item-md ion-reorder {\n  font-size: 1.5em;\n  opacity: .3;\n}\nion-item.hydrated{visibility:inherit}","ion-item","\nion-item.hydrated{visibility:inherit}","ion-item-divider","\nion-item-divider.hydrated{visibility:inherit}","ion-item-divider_md","ion-item-divider {\n  margin: 0;\n  padding: 0;\n  z-index: 100;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 30px;\n}\n\nion-item-divider[sticky] {\n  position: sticky;\n  top: 0;\n}\n\n.item-divider-md {\n  padding-left: 16px;\n  border-bottom: 1px solid #dedede;\n  font-size: 1.4rem;\n  color: #858585;\n  background-color: #fff;\n}\n\n.item-divider-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.item-divider-md-primary p {\n  color: #fff;\n}\n\n.item-divider-md-primary.activated {\n  background-color: #427feb;\n}\n\n.item-divider-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.item-divider-md-secondary p {\n  color: #fff;\n}\n\n.item-divider-md-secondary.activated {\n  background-color: #2ec95c;\n}\n\n.item-divider-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.item-divider-md-danger p {\n  color: #fff;\n}\n\n.item-divider-md-danger.activated {\n  background-color: #e13838;\n}\n\n.item-divider-md-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.item-divider-md-light p {\n  color: #000;\n}\n\n.item-divider-md-light.activated {\n  background-color: #e0e0e0;\n}\n\n.item-divider-md-dark {\n  color: #fff;\n  background-color: #222;\n}\n\n.item-divider-md-dark p {\n  color: #fff;\n}\n\n.item-divider-md-dark.activated {\n  background-color: #343434;\n}\nion-item-divider.hydrated{visibility:inherit}","ion-label","\nion-label.hydrated{visibility:inherit}","ion-label_md","ion-label {\n  margin: 0;\n  display: block;\n  overflow: hidden;\n  flex: 1;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.item-input ion-label {\n  flex: initial;\n  max-width: 200px;\n  pointer-events: none;\n}\n\n[text-wrap] ion-label {\n  white-space: normal;\n}\n\nion-label[fixed] {\n  flex: 0 0 100px;\n  width: 100px;\n  min-width: 100px;\n  max-width: 200px;\n}\n\n.item-label-stacked ion-label,\n.item-label-floating ion-label {\n  align-self: stretch;\n  width: auto;\n  max-width: 100%;\n}\n\nion-label[stacked],\nion-label[floating] {\n  margin-bottom: 0;\n}\n\n.item-label-stacked .input-wrapper,\n.item-label-floating .input-wrapper {\n  flex: 1;\n  flex-direction: column;\n}\n\n.item-label-stacked ion-select,\n.item-label-floating ion-select {\n  align-self: stretch;\n  max-width: 100%;\n}\n\n.label-md {\n  margin: 13px 8px 13px 0;\n}\n\n[text-wrap] .label-md {\n  font-size: 1.4rem;\n  line-height: 1.5;\n}\n\n.item-input .label-md,\n.item-select .label-md,\n.item-datetime .label-md {\n  color: #999;\n}\n\n.label-md[stacked] {\n  font-size: 1.2rem;\n}\n\n.label-md[floating] {\n  transform: translate3d(0,  27px,  0);\n  transform-origin: left top;\n  transition: transform 150ms ease-in-out;\n}\n\n.label-md[stacked],\n.label-md[floating] {\n  margin-left: 0;\n  margin-bottom: 0;\n}\n\n.item-input-has-focus .label-md[stacked],\n.item-input-has-focus .label-md[floating] {\n  color: #488aff;\n}\n\n.item-input-has-focus .label-md[floating],\n.item-input-has-value .label-md[floating] {\n  transform: translate3d(0,  0,  0) scale(0.8);\n}\n\n.label-md-primary,\n.item-input .label-md-primary,\n.item-select .label-md-primary,\n.item-datetime .label-md-primary {\n  color: #488aff;\n}\n\n.label-md-secondary,\n.item-input .label-md-secondary,\n.item-select .label-md-secondary,\n.item-datetime .label-md-secondary {\n  color: #32db64;\n}\n\n.label-md-danger,\n.item-input .label-md-danger,\n.item-select .label-md-danger,\n.item-datetime .label-md-danger {\n  color: #f53d3d;\n}\n\n.label-md-light,\n.item-input .label-md-light,\n.item-select .label-md-light,\n.item-datetime .label-md-light {\n  color: #f4f4f4;\n}\n\n.label-md-dark,\n.item-input .label-md-dark,\n.item-select .label-md-dark,\n.item-datetime .label-md-dark {\n  color: #222;\n}\nion-label.hydrated{visibility:inherit}","ion-list","\nion-list.hydrated{visibility:inherit}","ion-list_md","ion-list {\n  margin: 0;\n  padding: 0;\n  display: block;\n  contain: content;\n  list-style-type: none;\n}\n\nion-list[inset] {\n  overflow: hidden;\n  transform: translateZ(0);\n}\n\n.list-md {\n  margin: -1px 0 16px;\n}\n\n.list-md .item-block .item-inner {\n  border-bottom: 1px solid #dedede;\n}\n\n.list-md > .item-block:last-child ion-label,\n.list-md > .item-block:last-child .item-inner,\n.list-md > .item-wrapper:last-child ion-label,\n.list-md > .item-wrapper:last-child .item-inner {\n  border-bottom: 0;\n}\n\n.list-md > ion-input:last-child::after {\n  left: 0;\n}\n\n.list-md .item[no-lines],\n.list-md .item[no-lines] .item-inner {\n  border-width: 0;\n}\n\n.list-md + ion-list ion-list-header {\n  margin-top: -16px;\n}\n\n.list-md[inset] {\n  margin: 16px;\n  border-radius: 2px;\n}\n\n.list-md[inset] .item:first-child {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  border-top-width: 0;\n}\n\n.list-md[inset] .item:last-child {\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n  border-bottom-width: 0;\n}\n\n.list-md[inset] .item-input {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.list-md[inset] + ion-list[inset] {\n  margin-top: 0;\n}\n\n.list-md[inset] ion-list-header {\n  background-color: #fff;\n}\n\n.list-md[no-lines] .item-block,\n.list-md[no-lines] .item .item-inner {\n  border-width: 0;\n}\n\n.list-md .item-input:last-child {\n  border-bottom: 1px solid #dedede;\n}\nion-list.hydrated{visibility:inherit}","ion-list-header","\nion-list-header.hydrated{visibility:inherit}","ion-list-header_md","ion-list-header {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 4rem;\n}\n\n.list-header-md {\n  padding-left: 16px;\n  margin-bottom: 13px;\n  min-height: 4.5rem;\n  border-top: 1px solid #dedede;\n  font-size: 1.4rem;\n  color: #757575;\n}\n\n.list-header-md-primary {\n  color: #fff;\n  background-color: #488aff;\n}\n\n.list-header-md-secondary {\n  color: #fff;\n  background-color: #32db64;\n}\n\n.list-header-md-danger {\n  color: #fff;\n  background-color: #f53d3d;\n}\n\n.list-header-md-light {\n  color: #000;\n  background-color: #f4f4f4;\n}\n\n.list-header-md-dark {\n  color: #fff;\n  background-color: #222;\n}\nion-list-header.hydrated{visibility:inherit}","ion-skeleton-text","ion-skeleton-text {\n  display: inline-block;\n  width: 100%;\n  pointer-events: none;\n  user-select: none;\n}\n\nion-skeleton-text span {\n  display: inline-block;\n  font-size: .8rem;\n  background-color: #ececec;\n}\nion-skeleton-text.hydrated{visibility:inherit}","ion-skeleton-text_md","\nion-skeleton-text.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-item.md",

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