export declare class FabButton {
    private el;
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
     * @input {string} Contains a URL or a URL fragment that the hyperlink points to.
     * If this property is set, an anchor tag will be rendered.
     */
    href: string;
    /**
     * @input {boolean} If true, adds transparency to the fab.
     * Only affects `ios` mode. Defaults to `false`.
     */
    translucent: boolean;
    activated: boolean;
    toggleActive: Function;
    show: boolean;
    private inContainer;
    private inList;
    /**
     * @input {boolean} If true, sets the button into a disabled state.
     */
    disabled: boolean;
    componentDidLoad(): void;
    clickedFab(): void;
    /**
     * @hidden
     * Get the classes for fab buttons in lists
     */
    getFabListClassList(): string[];
    /**
     * @hidden
     * Get the close active class for fab buttons
     */
    getFabActiveClassList(): string[];
    /**
     * @hidden
     * Get the show class for fab buttons
     */
    getFabShowClassList(): string[];
    render(): JSX.Element;
}
