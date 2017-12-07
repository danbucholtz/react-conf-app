import { EventEmitter } from '@stencil/core';
export declare class Segment {
    buttons: any;
    private el;
    /**
     * @output {Event} Emitted when the value property has changed.
     */
    ionChange: EventEmitter;
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
    disabled: boolean;
    /**
     * @input {string} the value of the segment.
     */
    value: string;
    protected valueChanged(val: string): void;
    componentDidLoad(): void;
    segmentClick(ev: CustomEvent): void;
    selectButton(val: string): boolean;
    hostData(): {
        class: {
            'segment-disabled': boolean;
        };
    };
    render(): JSX.Element;
}
export interface SegmentEvent extends Event {
    detail: {
        segment: Segment;
    };
}
