import { EventEmitter } from '@stencil/core';
export declare class SegmentButton {
    styleTmr: any;
    private el;
    /**
     * @output {SegmentButtonEvent} Emitted when the segment button is clicked.
     */
    ionClick: EventEmitter;
    activated: boolean;
    /**
     * @input {string} The color to use from your Sass `$colors` map.
     * Default options are: `"primary"`, `"secondary"`, `"danger"`, `"light"`, and `"dark"`.
     * For more information, see [Theming your App](/docs/theming/theming-your-app).
     */
    color: string;
    /**
     * @input {string} The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     * For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
     */
    mode: 'ios' | 'md';
    /**
     * @input {boolean} If true, the segment button is selected. Defaults to `false`.
     */
    checked: boolean;
    disabled: boolean;
    /**
     * @input {string} the value of the segment button.
     */
    value: string;
    segmentButtonClick(ev: UIEvent): void;
    /**
     * Emit the click event to the parent segment
     */
    private emitClick();
    /**
     * @hidden
     * Get the classes for the segment button state
     */
    getElementClassList(): any[];
    render(): JSX.Element[];
}
export interface SegmentButtonEvent extends Event {
    detail: {
        segmentButton: SegmentButton;
    };
}
