import { getElementClassObject } from '../../utils/theme';
export class Button {
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
