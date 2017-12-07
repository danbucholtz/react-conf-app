import { createThemedClasses } from '../../utils/theme';
import { CssClassMap } from '../../index';
export class Item {
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
