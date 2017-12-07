import { EventEmitter } from '@stencil/core';
export declare class SelectOption {
    private el;
    /**
     * @output {SelectOptionEvent} Emitted when the select option is selected.
     */
    ionSelect: EventEmitter;
    /**
     * @input {boolean} If true, the user cannot interact with the select option.
     */
    disabled: boolean;
    /**
     * @input {boolean} If true, the element is selected.
     */
    selected: boolean;
    /**
     * @input {string} The text value of the option.
     */
    value: string;
    getText(): string;
    render(): JSX.Element;
}
