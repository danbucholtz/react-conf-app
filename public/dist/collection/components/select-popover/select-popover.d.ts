import { EventEmitter } from '@stencil/core';
export interface SelectPopoverOption {
    text: string;
    value: string;
    disabled: boolean;
    checked: boolean;
    handler?: Function;
}
export declare class SelectPopover {
    mode: string;
    color: string;
    /**
     * @output {Event} Emitted when the select popover is dismissed.
     */
    ionDismiss: EventEmitter;
    options: SelectPopoverOption[];
    /**
     * @input {string} the value of the select popover.
     */
    value: string;
    onChange(ev: CustomEvent): void;
    dismiss(value: any): void;
    protected valueChanged(value: string): void;
    render(): JSX.Element;
}
