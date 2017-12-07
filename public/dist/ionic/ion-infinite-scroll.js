/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-infinite-scroll","ion-infinite-scroll {\n  display: none;\n  width: 100%;\n}\n\n.infinite-scroll-enabled {\n  display: block;\n}\n\nion-infinite-scroll-content {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 84px;\n}\n\n.infinite-loading {\n  margin: 0 0 32px;\n  display: none;\n  width: 100%;\n}\n\n.infinite-loading-text {\n  margin: 4px 32px 0;\n  color: #666;\n}\n\n.infinite-loading-spinner .spinner-ios line,\n.infinite-loading-spinner .spinner-ios-small line,\n.infinite-loading-spinner .spinner-crescent circle {\n  stroke: #666;\n}\n\n.infinite-loading-spinner .spinner-bubbles circle,\n.infinite-loading-spinner .spinner-circles circle,\n.infinite-loading-spinner .spinner-dots circle {\n  fill: #666;\n}\n\n.infinite-scroll-loading ion-infinite-scroll-content > .infinite-loading {\n  display: block;\n}\nion-infinite-scroll.hydrated{visibility:inherit}","ion-infinite-scroll-content","\nion-infinite-scroll-content.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-infinite-scroll",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class InfiniteScroll {
    constructor() {
        this.thrPx = 0;
        this.thrPc = 0.15;
        this.didFire = false;
        this.isBusy = false;
        this.init = false;
        this.isLoading = false;
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
        this.threshold = '15%';
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
        this.enabled = true;
        /**
         * @input {string} The position of the infinite scroll element.
         * The value can be either `top` or `bottom`.
         * Default is `bottom`.
         */
        this.position = "bottom" /* Bottom */;
    }
    thresholdChanged(val) {
        if (val.lastIndexOf('%') > -1) {
            this.thrPx = 0;
            this.thrPc = (parseFloat(val) / 100);
        }
        else {
            this.thrPx = parseFloat(val);
            this.thrPc = 0;
        }
    }
    enabledChanged(val) {
        this.enableScrollEvents(val);
    }
    componentWillLoad() {
        const scrollEl = this.el.closest('ion-scroll');
        return scrollEl.componentOnReady().then((el) => {
            this.scrollEl = el;
        });
    }
    componentDidLoad() {
        if (this.init) {
            console.warn('instance was already initialized');
            return;
        }
        this.init = true;
        this.thresholdChanged(this.threshold);
        this.enableScrollEvents(this.enabled);
        if (this.position === "top" /* Top */) {
            Context.dom.write(() => this.scrollEl.scrollToBottom(0));
        }
    }
    componentDidUnload() {
        this.enableScrollEvents(false);
        this.scrollEl = null;
    }
    onScroll(ev) {
        const detail = ev.detail;
        if (!this.canStart()) {
            return 1;
        }
        const infiniteHeight = this.el.offsetHeight;
        if (!infiniteHeight) {
            // if there is no height of this element then do nothing
            return 2;
        }
        const scrollTop = detail.scrollTop;
        const scrollHeight = this.scrollEl.scrollHeight;
        const height = this.scrollEl.offsetHeight;
        const threshold = this.thrPc ? (height * this.thrPc) : this.thrPx;
        let distanceFromInfinite;
        if (this.position === "bottom" /* Bottom */) {
            distanceFromInfinite = scrollHeight - infiniteHeight - scrollTop - threshold - height;
        }
        else {
            // assert(this.position === Position.Top, '_position should be top');
            distanceFromInfinite = scrollTop - infiniteHeight - threshold;
        }
        if (distanceFromInfinite < 0) {
            if (!this.didFire) {
                this.isLoading = true;
                this.didFire = true;
                this.ionInfinite.emit(this);
                return 3;
            }
        }
        else {
            this.didFire = false;
        }
        return 4;
    }
    canStart() {
        return (this.enabled &&
            !this.isBusy &&
            this.scrollEl &&
            !this.isLoading);
    }
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
    complete() {
        if (!this.isLoading) {
            return;
        }
        this.isLoading = false;
        if (this.position === "top" /* Top */) {
            /** New content is being added at the top, but the scrollTop position stays the same,
             * which causes a scroll jump visually. This algorithm makes sure to prevent this.
             * (Frame 1)
             *    - complete() is called, but the UI hasn't had time to update yet.
             *    - Save the current content dimensions.
             *    - Wait for the next frame using _dom.read, so the UI will be updated.
             * (Frame 2)
             *    - Read the new content dimensions.
             *    - Calculate the height difference and the new scroll position.
             *    - Delay the scroll position change until other possible dom reads are done using _dom.write to be performant.
             * (Still frame 2, if I'm correct)
             *    - Change the scroll position (= visually maintain the scroll position).
             *    - Change the state to re-enable the InfiniteScroll.
             *    - This should be after changing the scroll position, or it could
             *    cause the InfiniteScroll to be triggered again immediately.
             * (Frame 3)
             *    Done.
             */
            this.isBusy = true;
            // ******** DOM READ ****************
            // Save the current content dimensions before the UI updates
            const prev = this.scrollEl.scrollHeight - this.scrollEl.scrollTop;
            // ******** DOM READ ****************
            Context.dom.read(() => {
                // UI has updated, save the new content dimensions
                const scrollHeight = this.scrollEl.scrollHeight;
                // New content was added on top, so the scroll position should be changed immediately to prevent it from jumping around
                const newScrollTop = scrollHeight - prev;
                // ******** DOM WRITE ****************
                Context.dom.write(() => {
                    this.scrollEl.scrollTop = newScrollTop;
                    this.isBusy = false;
                });
            });
        }
    }
    /**
    * Pass a promise inside `waitFor()` within the `infinite` output event handler in order to
    * change state of infiniteScroll to "complete"
    */
    waitFor(action) {
        const enable = this.complete.bind(this);
        action.then(enable, enable);
    }
    /**
     * @hidden
     */
    enableScrollEvents(shouldListen) {
        Context.enableListener(this, 'ionScroll', shouldListen, this.scrollEl);
    }
    hostData() {
        return {
            class: {
                'infinite-scroll-loading': this.isLoading,
                'infinite-scroll-enabled': this.enabled
            }
        };
    }
    render() {
        return h("slot", null);
    }
}

class InfiniteScrollContent {
    componentDidLoad() {
        if (!this.loadingSpinner) {
            this.loadingSpinner = this.config.get('infiniteLoadingSpinner', this.config.get('spinner', 'lines'));
        }
    }
    render() {
        return (h("div", { class: 'infinite-loading' },
            this.loadingSpinner &&
                h("div", { class: 'infinite-loading-spinner' },
                    h("ion-spinner", { name: this.loadingSpinner })),
            this.loadingText &&
                h("div", { class: 'infinite-loading-text', innerHTML: this.loadingText })));
    }
}

exports['ion-infinite-scroll'] = InfiniteScroll;
exports['ion-infinite-scroll-content'] = InfiniteScrollContent;
},


/***************** ion-infinite-scroll *****************/
[
/** ion-infinite-scroll: tag **/
"ion-infinite-scroll",

/** ion-infinite-scroll: members **/
[
  [ "complete", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "isLoading", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "position", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "threshold", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-infinite-scroll: host **/
{},

/** ion-infinite-scroll: events **/
[
  [
    /*****  ion-infinite-scroll ionInfinite ***** /
    /* event name ***/ "ionInfinite"
  ]
],

/** ion-infinite-scroll: propWillChanges **/
0 /* no prop will change methods */,

/** ion-infinite-scroll: propDidChanges **/
[
  [
    /*****  ion-infinite-scroll prop did change [0] ***** /
    /* prop name **/ "threshold",
    /* call fn *****/ "thresholdChanged"
  ],
  [
    /*****  ion-infinite-scroll prop did change [1] ***** /
    /* prop name **/ "enabled",
    /* call fn *****/ "enabledChanged"
  ]
]

],

/***************** ion-infinite-scroll-content *****************/
[
/** ion-infinite-scroll-content: tag **/
"ion-infinite-scroll-content",

/** ion-infinite-scroll-content: members **/
[
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "loadingSpinner", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "loadingText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-infinite-scroll-content: host **/
{}

]
);