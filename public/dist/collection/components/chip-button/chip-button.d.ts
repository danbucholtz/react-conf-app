export declare class ChipButton {
    private el;
    /**
     * @input {string} Contains a URL or a URL fragment that the hyperlink points to.
     * If this property is set, an anchor tag will be rendered.
     */
    href: string;
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
     * @input {boolean} If true, activates a transparent button style.
     */
    clear: boolean;
    /**
     * @input {boolean} If true, sets the button into a disabled state.
     */
    disabled: boolean;
    /**
     * @hidden
     * Get the classes based on the button type
     * e.g. alert-button, action-sheet-button
     */
    private getButtonClassList(buttonType, mode);
    /**
     * @hidden
     * Get the classes for the color
     */
    private getColorClassList(color, buttonType, style, mode);
    /**
     * @hidden
     * Get the classes for the style
     * Chip buttons can only be clear or default (solid)
     */
    private getStyleClassList(buttonType);
    render(): JSX.Element;
}
