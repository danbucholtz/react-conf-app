import { EventEmitter } from '@stencil/core';
export declare class Slides {
    swiper: any;
    private el;
    /**
     * @output {Event} Emitted before the active slide has changed.
     */
    ionSlideWillChange: EventEmitter;
    /**
     * @output {Event} Emitted after the active slide has changed.
     */
    ionSlideDidChange: EventEmitter;
    /**
     * @output {Event} Emitted when the next slide has started.
     */
    ionSlideNextStart: EventEmitter;
    /**
     * @output {Event} Emitted when the previous slide has started.
     */
    ionSlidePrevStart: EventEmitter;
    /**
     * @output {Event} Emitted when the next slide has ended.
     */
    ionSlideNextEnd: EventEmitter;
    /**
     * @output {Event} Emitted when the previous slide has ended.
     */
    ionSlidePrevEnd: EventEmitter;
    /**
     * @output {Event} Emitted when the slide transition has started.
     */
    ionSlideTransitionStart: EventEmitter;
    /**
     * @output {Event} Emitted when the slide transition has ended.
     */
    ionSlideTransitionEnd: EventEmitter;
    /**
     * @output {Event} Emitted when the slider is actively being moved.
     */
    ionSlideDrag: EventEmitter;
    /**
     * @output {Event} Emitted when the slider is at its initial position.
     */
    ionSlideReachStart: EventEmitter;
    /**
     * @output {Event} Emitted when the slider is at the last slide.
     */
    ionSlideReachEnd: EventEmitter;
    /**
     * @output {Event} Emitted when the user first touches the slider.
     */
    ionSlideTouchStart: EventEmitter;
    /**
     * @output {Event} Emitted when the user releases the touch.
     */
    ionSlideTouchEnd: EventEmitter;
    /**
     * @input {string} The animation effect of the slides.
     * Possible values are: `slide`, `fade`, `cube`, `coverflow` or `flip`.
     * Default: `slide`.
     */
    effect: string;
    /**
     * @input {number} Delay between transitions (in milliseconds). If this
     * parameter is not passed, autoplay is disabled. Default does
     * not have a value and does not autoplay.
     * Default: `null`.
     */
    autoplay: number;
    /**
     * @input {Slides} Pass another Slides instance or array of Slides instances
     * that should be controlled by this Slides instance.
     * Default: `null`.
     */
    control: any;
    /**
     * @input {string}  Swipe direction: 'horizontal' or 'vertical'.
     * Default: `horizontal`.
     */
    direction: 'horizontal' | 'vertical';
    /**
     * @input {number}  Index number of initial slide. Default: `0`.
     */
    initialSlide: number;
    /**
     * @input {boolean} If true, continuously loop from the last slide to the
     * first slide.
     */
    loop: boolean;
    /**
     * @input {boolean}  If true, show the pager.
     */
    pager: boolean;
    /**
     * @input {string}  Type of pagination. Possible values are:
     * `bullets`, `fraction`, `progress`. Default: `bullets`.
     * (Note that the pager will not show unless `pager` input
     * is set to true).
     */
    paginationType: string;
    /**
     * @input {boolean} If true, allows you to use "parallaxed" elements inside of
     * slider.
     */
    parallax: boolean;
    /**
     * @input {number} Slides per view. Slides visible at the same time. Default: `1`.
     */
    slidesPerView: number | 'auto';
    /**
     * @input {number} Distance between slides in px. Default: `0`.
     */
    spaceBetween: number;
    /**
     * @input {number} Duration of transition between slides
     * (in milliseconds). Default: `300`.
     */
    speed: number;
    /**
     * @input {boolean} If true, enables zooming functionality.
     */
    zoom: boolean;
    /**
     * @input {boolean} If true, enables keyboard control
     */
    keyboardControl: boolean;
    render(): JSX.Element;
    /**
     * @hidden
     * Height of container.
     */
    private height;
    /**
     * @hidden
     * Width of container.
     */
    private width;
    /**
     * @hidden
     * Enabled this option and swiper will be operated as usual except it will
     * not move, real translate values on wrapper will not be set. Useful when
     * you may need to create custom slide transition.
     */
    private virtualTranslate;
    /**
     * @hidden
     * Set to true to round values of slides width and height to prevent blurry
     * texts on usual resolution screens (if you have such)
     */
    private roundLengths;
    /**
     * @hidden
     */
    private originalEvent;
    /**
     * Private properties only useful to this class.
     * ------------------------------------
     */
    private _init;
    private _tmr;
    /**
     * Properties that are exposed publicly but no docs.
     * ------------------------------------
     */
    /** @hidden */
    private container;
    /** @hidden */
    private slidesId;
    /** @hidden */
    private slideId;
    constructor();
    private _initSlides();
    /**
     * @hidden
     */
    componentDidLoad(): void;
    /**
     * Update the underlying slider implementation. Call this if you've added or removed
     * child slides.
     */
    update(debounce?: number): void;
    /**
     * Transition to the specified slide.
     *
     * @param {number} index  The index number of the slide.
     * @param {number} [speed]  Transition duration (in ms).
     * @param {boolean} [runCallbacks] Whether or not to emit the `ionSlideWillChange`/`ionSlideDidChange` events. Default true.
     */
    slideTo(index: number, speed?: number, runCallbacks?: boolean): void;
    /**
     * Transition to the next slide.
     *
     * @param {number} [speed]  Transition duration (in ms).
     * @param {boolean} [runCallbacks]  Whether or not to emit the `ionSlideWillChange`/`ionSlideDidChange` events. Default true.
     */
    slideNext(speed?: number, runCallbacks?: boolean): void;
    /**
     * Transition to the previous slide.
     *
     * @param {number} [speed]  Transition duration (in ms).
     * @param {boolean} [runCallbacks]  Whether or not to emit the `ionSlideWillChange`/`ionSlideDidChange` events. Default true.
     */
    slidePrev(speed?: number, runCallbacks?: boolean): void;
    /**
     * Get the index of the active slide.
     *
     * @returns {number} The index number of the current slide.
     */
    getActiveIndex(): number;
    /**
     * Get the index of the previous slide.
     *
     * @returns {number} The index number of the previous slide.
     */
    getPreviousIndex(): number;
    /**
     * Get the total number of slides.
     *
     * @returns {number} The total number of slides.
     */
    length(): number;
    /**
     * Get whether or not the current slide is the last slide.
     *
     * @returns {boolean} If the slide is the last slide or not.
     */
    isEnd(): boolean;
    /**
     * Get whether or not the current slide is the first slide.
     *
     * @returns {boolean} If the slide is the first slide or not.
     */
    isBeginning(): boolean;
    /**
     * Start auto play.
     */
    startAutoplay(): void;
    /**
     * Stop auto play.
     */
    stopAutoplay(): void;
    /**
     * Lock or unlock the ability to slide to the next slides.
     */
    lockSwipeToNext(shouldLockSwipeToNext: boolean): any;
    /**
     * Lock or unlock the ability to slide to the previous slides.
     */
    lockSwipeToPrev(shouldLockSwipeToPrev: boolean): any;
    /**
     * Lock or unlock the ability to slide to change slides.
     */
    lockSwipes(shouldLockSwipes: boolean): any;
    /**
     * Enable or disable keyboard control.
     */
    enableKeyboardControl(shouldEnableKeyboard: boolean): any;
    /**
     * @hidden
     */
    componentDidUnload(): void;
}
