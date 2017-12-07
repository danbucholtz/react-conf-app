import { EventEmitter } from '@stencil/core';
export declare class Label {
    styleTmr: any;
    private el;
    /**
     * @output {Event} Emitted when the styles change.
     */
    ionStyle: EventEmitter;
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
     * @output {Event} If true, the label will sit alongside an input. Defaults to `false`.
     */
    fixed: boolean;
    /**
     * @output {Event} If true, the label will float above an input when the value is empty or the input is focused. Defaults to `false`.
     */
    floating: boolean;
    /**
     * @output {Event} If true, the label will be stacked above an input. Defaults to `false`.
     */
    stacked: boolean;
    /**
     * @hidden
     */
    getText(): string;
    componentDidLoad(): void;
    emitStyle(): void;
    render(): JSX.Element;
}
