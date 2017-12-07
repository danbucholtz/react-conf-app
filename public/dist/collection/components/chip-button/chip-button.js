import { CssClassMap } from '@stencil/core';
import { getElementClassObject } from '../../utils/theme';
export class ChipButton {
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
