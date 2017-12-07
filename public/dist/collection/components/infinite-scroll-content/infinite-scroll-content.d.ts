import { Config } from '../../index';
export declare class InfiniteScrollContent {
    config: Config;
    /**
     * @input {string} An animated SVG spinner that shows while loading.
     */
    loadingSpinner: string;
    /**
     * @input {string} Optional text to display while loading.
     */
    loadingText: string;
    componentDidLoad(): void;
    render(): JSX.Element;
}
