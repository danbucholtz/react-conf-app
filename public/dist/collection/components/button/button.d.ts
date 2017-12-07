export declare class Button {
    private el;
    itemButton: boolean;
    /**
     * Contains a URL or a URL fragment that the hyperlink points to.
     * If this property is set, an anchor tag will be rendered.
     */
    href: string;
    /**
     * The type of button.
     * Possible values are: `"button"`, `"bar-button"`.
     */
    buttonType: string;
    /**
     * The button size.
     * Possible values are: `"small"`, `"large"`.
     */
    size: 'small' | 'large';
    /**
     * If true, sets the button into a disabled state.
     */
    disabled: boolean;
    /**
     * Set to `"clear"` for a transparent button, to `"outline"` for a transparent
     * button with a border, or to `"solid"`. The default style is `"solid"` except inside of
     * `ion-navbar`, where the default is `"clear"`.
     */
    fill: 'clear' | 'outline' | 'solid' | 'default';
    /**
     * If true, activates a button with rounded corners.
     * Type: shape
     */
    round: boolean;
    /**
     * Set to `"block"` for a full-width button or to `"full"` for a full-width button
     * without left and right borders.
     */
    expand: 'full' | 'block';
    /**
     * If true, activates a button with a heavier font weight.
     * Type: decorator
     */
    strong: boolean;
    /**
     * The color to use from your Sass `$colors` map.
     * Default options are: `"primary"`, `"secondary"`, `"danger"`, `"light"`, and `"dark"`.
     * For more information, see [Theming your App](/docs/theming/theming-your-app).
     */
    color: string;
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     * For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
     */
    mode: 'ios' | 'md';
    protected render(): JSX.Element;
}
