import { Config } from '../../index';
export declare class Toolbar {
    private el;
    config: Config;
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
     * @input {boolean} If true, adds transparency to the header.
     * Note: In order to scroll content behind the header, the `fullscreen`
     * attribute needs to be set on the content.
     * Only affects `ios` mode. Defaults to `false`.
     */
    translucent: boolean;
    componentDidLoad(): void;
    hostData(): {
        class: {
            'statusbar-padding': boolean;
        };
    };
    render(): JSX.Element[];
}
