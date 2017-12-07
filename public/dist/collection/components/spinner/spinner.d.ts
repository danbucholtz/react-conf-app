import { Config } from '../../index';
export declare class Spinner {
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
     * @input {string} How long it takes it to do one loop.
     */
    duration: number;
    /**
     * @input {string} SVG spinner name.
     */
    name: string;
    /**
     * @input {boolean} If true, pause the animation.
     */
    paused: boolean;
    private getName();
    hostData(): {
        class: {
            'spinner-paused': boolean;
        };
    };
    render(): any[];
}
