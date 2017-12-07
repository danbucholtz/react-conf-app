import { EventEmitter } from '@stencil/core';
export declare class InfiniteScroll {
    private thrPx;
    private thrPc;
    private scrollEl;
    private didFire;
    private isBusy;
    private init;
    private el;
    isLoading: boolean;
    /**
     * @input {string} The threshold distance from the bottom
     * of the content to call the `infinite` output event when scrolled.
     * The threshold value can be either a percent, or
     * in pixels. For example, use the value of `10%` for the `infinite`
     * output event to get called when the user has scrolled 10%
     * from the bottom of the page. Use the value `100px` when the
     * scroll is within 100 pixels from the bottom of the page.
     * Default is `15%`.
     */
    threshold: string;
    protected thresholdChanged(val: string): void;
    /**
     * @input {boolean} If true, Whether or not the infinite scroll should be
     * enabled or not. Setting to `false` will remove scroll event listeners
     * and hide the display.
     *
     * Call `enable(false)` to disable the infinite scroll from actively
     * trying to receive new data while scrolling. This method is useful
     * when it is known that there is no more data that can be added, and
     * the infinite scroll is no longer needed.
     * @param {boolean} shouldEnable  If the infinite scroll should be
     * enabled or not. Setting to `false` will remove scroll event listeners
     * and hide the display.
     */
    enabled: boolean;
    protected enabledChanged(val: boolean): void;
    /**
     * @input {string} The position of the infinite scroll element.
     * The value can be either `top` or `bottom`.
     * Default is `bottom`.
     */
    position: string;
    /**
     * @output {Event} Emitted when the scroll reaches
     * the threshold distance. From within your infinite handler,
     * you must call the infinite scroll's `complete()` method when
     * your async operation has completed.
     */
    ionInfinite: EventEmitter;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    componentDidUnload(): void;
    protected onScroll(ev: CustomEvent): 1 | 2 | 3 | 4;
    private canStart();
    /**
     * Call `complete()` within the `infinite` output event handler when
     * your async operation has completed. For example, the `loading`
     * state is while the app is performing an asynchronous operation,
     * such as receiving more data from an AJAX request to add more items
     * to a data list. Once the data has been received and UI updated, you
     * then call this method to signify that the loading has completed.
     * This method will change the infinite scroll's state from `loading`
     * to `enabled`.
     */
    complete(): void;
    /**
    * Pass a promise inside `waitFor()` within the `infinite` output event handler in order to
    * change state of infiniteScroll to "complete"
    */
    waitFor(action: Promise<any>): void;
    /**
     * @hidden
     */
    private enableScrollEvents(shouldListen);
    hostData(): {
        class: {
            'infinite-scroll-loading': boolean;
            'infinite-scroll-enabled': boolean;
        };
    };
    render(): JSX.Element;
}
