import { EventEmitter } from '@stencil/core';
import { Animation, Config, GestureDetail, SplitPaneAlert, StencilElement } from '../../index';
import { Side, assert, checkEdgeSide, isRightSide } from '../../utils/helpers';
export class Menu {
    constructor() {
        this.isPane = false;
        this._isOpen = false;
        this.lastOnEnd = 0;
        this.isAnimating = false;
        this.isRightSide = false;
        this.width = null;
        /**
         * @input {string} The display type of the menu. Default varies based on the mode,
         * see the `menuType` in the [config](../../config/Config). Available options:
         * `"overlay"`, `"reveal"`, `"push"`.
         */
        this.type = 'overlay';
        /**
         * @input {string} Which side of the view the menu should be placed. Default `"start"`.
         */
        this.side = 'start';
        /**
         * @input {boolean} If true, swiping the menu is enabled. Default `true`.
         */
        this.swipeEnabled = true;
        /**
         * @input {boolean} If true, the menu will persist on child pages.
         */
        this.persistent = false;
        /**
         * @hidden
         */
        this.maxEdgeStart = 50;
    }
    typeChanged(type) {
        if (this.contentEl) {
            this.contentEl.classList.remove('menu-content-' + this.type);
            this.contentEl.classList.add('menu-content-' + type);
            this.contentEl.removeAttribute('style');
        }
        if (this.menuInnerEl) {
            // Remove effects of previous animations
            this.menuInnerEl.removeAttribute('style');
        }
        this.animation = null;
    }
    enabledChanged() {
        this.updateState();
    }
    sideChanged() {
        this.isRightSide = isRightSide(this.side);
    }
    swipeEnabledChanged() {
        this.updateState();
    }
    componentWillLoad() {
        return this.lazyMenuCtrl.componentOnReady().then(menu => {
            this.menuCtrl = menu;
        });
    }
    componentDidLoad() {
        assert(!!this.menuCtrl, 'menucontroller was not initialized');
        const el = this.el;
        const contentQuery = (this.content)
            ? '#' + this.content
            : '[main]';
        const parent = el.parentElement;
        const content = this.contentEl = parent.querySelector(contentQuery);
        if (!content || !content.tagName) {
            // requires content element
            return console.error('Menu: must have a "content" element to listen for drag events on.');
        }
        this.menuInnerEl = el.querySelector('.menu-inner');
        this.backdropEl = el.querySelector('.menu-backdrop');
        // add menu's content classes
        content.classList.add('menu-content');
        this.typeChanged(this.type);
        this.sideChanged();
        let isEnabled = this.enabled;
        if (isEnabled === true || typeof isEnabled === 'undefined') {
            const menus = this.menuCtrl.getMenus();
            isEnabled = !menus.some(m => {
                return m.side === this.side && m.enabled;
            });
        }
        // register this menu with the app's menu controller
        this.menuCtrl._register(this);
        // mask it as enabled / disabled
        this.enabled = isEnabled;
    }
    componentDidUnload() {
        this.menuCtrl._unregister(this);
        this.animation && this.animation.destroy();
        this.menuCtrl = this.animation = null;
        this.contentEl = this.backdropEl = this.menuInnerEl = null;
    }
    splitPaneChanged(ev) {
        this.isPane = ev.detail.splitPane.isPane(this.el);
        this.updateState();
    }
    onBackdropClick(ev) {
        const el = ev.target;
        if (!el.closest('.menu-inner') && this.lastOnEnd < (ev.timeStamp - 100)) {
            ev.preventDefault();
            ev.stopPropagation();
            this.close();
        }
    }
    getElement() {
        return this.el;
    }
    isOpen() {
        return this._isOpen;
    }
    setOpen(shouldOpen, animated = true) {
        // If the menu is disabled or it is currenly being animated, let's do nothing
        if (!this.isActive() || this.isAnimating || (shouldOpen === this._isOpen)) {
            return Promise.resolve(this._isOpen);
        }
        this.beforeAnimation();
        return this.loadAnimation()
            .then(() => this.startAnimation(shouldOpen, animated))
            .then(() => this.afterAnimation(shouldOpen));
    }
    open() {
        return this.setOpen(true);
    }
    close() {
        return this.setOpen(false);
    }
    toggle() {
        return this.setOpen(!this._isOpen);
    }
    loadAnimation() {
        // Menu swipe animation takes the menu's inner width as parameter,
        // If `offsetWidth` changes, we need to create a new animation.
        const width = this.menuInnerEl.offsetWidth;
        if (width === this.width && this.animation !== null) {
            return Promise.resolve();
        }
        // Destroy existing animation
        this.animation && this.animation.destroy();
        this.animation = null;
        this.width = width;
        // Create new animation
        return this.menuCtrl.createAnimation(this.type, this).then(ani => {
            this.animation = ani;
        });
    }
    startAnimation(shouldOpen, animated) {
        let done;
        const promise = new Promise(resolve => done = resolve);
        const ani = this.animation
            .onFinish(done, { oneTimeCallback: true, clearExistingCallacks: true })
            .reverse(!shouldOpen);
        if (animated) {
            ani.play();
        }
        else {
            ani.syncPlay();
        }
        return promise;
    }
    isActive() {
        return this.enabled && !this.isPane;
    }
    canSwipe() {
        return this.swipeEnabled &&
            !this.isAnimating &&
            this.isActive();
    }
    canStart(detail) {
        if (!this.canSwipe()) {
            return false;
        }
        if (this._isOpen) {
            return true;
        }
        else if (this.menuCtrl.getOpen()) {
            return false;
        }
        return checkEdgeSide(detail.currentX, this.isRightSide, this.maxEdgeStart);
    }
    onWillStart() {
        this.beforeAnimation();
        return this.loadAnimation();
    }
    onDragStart() {
        assert(!!this.animation, '_type is undefined');
        if (!this.isAnimating) {
            assert(false, 'isAnimating has to be true');
            return;
        }
        // the cloned animation should not use an easing curve during seek
        this.animation
            .reverse(this._isOpen)
            .progressStart();
    }
    onDragMove(detail) {
        assert(!!this.animation, '_type is undefined');
        if (!this.isAnimating) {
            assert(false, 'isAnimating has to be true');
            return;
        }
        const delta = computeDelta(detail.deltaX, this._isOpen, this.isRightSide);
        const stepValue = delta / this.width;
        this.animation.progressStep(stepValue);
    }
    onDragEnd(detail) {
        assert(!!this.animation, '_type is undefined');
        if (!this.isAnimating) {
            assert(false, 'isAnimating has to be true');
            return;
        }
        const isOpen = this._isOpen;
        const isRightSide = this.isRightSide;
        const delta = computeDelta(detail.deltaX, isOpen, isRightSide);
        const width = this.width;
        const stepValue = delta / width;
        const velocity = detail.velocityX;
        const z = width / 2.0;
        const shouldCompleteRight = (velocity >= 0)
            && (velocity > 0.2 || detail.deltaX > z);
        const shouldCompleteLeft = (velocity <= 0)
            && (velocity < -0.2 || detail.deltaX < -z);
        const shouldComplete = (isOpen)
            ? isRightSide ? shouldCompleteRight : shouldCompleteLeft
            : isRightSide ? shouldCompleteLeft : shouldCompleteRight;
        let shouldOpen = (!isOpen && shouldComplete);
        if (isOpen && !shouldComplete) {
            shouldOpen = true;
        }
        const missing = shouldComplete ? 1 - stepValue : stepValue;
        const missingDistance = missing * width;
        let realDur = 0;
        if (missingDistance > 5) {
            const dur = missingDistance / Math.abs(velocity);
            realDur = Math.min(dur, 300);
        }
        this.lastOnEnd = detail.timeStamp;
        this.animation
            .onFinish(() => this.afterAnimation(shouldOpen), { clearExistingCallacks: true })
            .progressEnd(shouldComplete, stepValue, realDur);
    }
    beforeAnimation() {
        assert(!this.isAnimating, '_before() should not be called while animating');
        // this places the menu into the correct location before it animates in
        // this css class doesn't actually kick off any animations
        this.el.classList.add(SHOW_MENU);
        this.backdropEl.classList.add(SHOW_BACKDROP);
        this.isAnimating = true;
    }
    afterAnimation(isOpen) {
        assert(this.isAnimating, '_before() should be called while animating');
        // TODO: this._app.setEnabled(false, 100);
        // keep opening/closing the menu disabled for a touch more yet
        // only add listeners/css if it's enabled and isOpen
        // and only remove listeners/css if it's not open
        // emit opened/closed events
        this._isOpen = isOpen;
        this.isAnimating = false;
        // add/remove backdrop click listeners
        Context.enableListener(this, 'body:click', isOpen);
        if (isOpen) {
            // disable swipe to go back gesture
            this.gestureBlocker = GESTURE_BLOCKER;
            // add css class
            this.contentEl.classList.add(MENU_CONTENT_OPEN);
            // emit open event
            this.ionOpen.emit({ menu: this });
        }
        else {
            // enable swipe to go back gesture
            this.gestureBlocker = null;
            // remove css classes
            this.el.classList.remove(SHOW_MENU);
            this.contentEl.classList.remove(MENU_CONTENT_OPEN);
            this.backdropEl.classList.remove(SHOW_BACKDROP);
            // emit close event
            this.ionClose.emit({ menu: this });
        }
        return isOpen;
    }
    updateState() {
        const isActive = this.isActive();
        // Close menu inmediately
        if (!isActive && this._isOpen) {
            // close if this menu is open, and should not be enabled
            this.forceClosing();
        }
        if (this.enabled && this.menuCtrl) {
            this.menuCtrl._setActiveMenu(this);
        }
        assert(!this.isAnimating, 'can not be animating');
    }
    forceClosing() {
        assert(this._isOpen, 'menu cannot be closed');
        this.isAnimating = true;
        this.startAnimation(false, false);
        this.afterAnimation(false);
    }
    hostData() {
        const typeClass = 'menu-type-' + this.type;
        return {
            role: 'complementary',
            class: {
                'menu-enabled': this.enabled,
                'menu-side-right': this.isRightSide,
                'menu-side-left': !this.isRightSide,
                [typeClass]: true,
            }
        };
    }
    render() {
        return ([
            h("div", { class: 'menu-inner page-inner' },
                h("slot", null)),
            h("ion-backdrop", { class: 'menu-backdrop' }),
            h("ion-gesture", Object.assign({}, {
                'canStart': this.canStart.bind(this),
                'onWillStart': this.onWillStart.bind(this),
                'onStart': this.onDragStart.bind(this),
                'onMove': this.onDragMove.bind(this),
                'onEnd': this.onDragEnd.bind(this),
                'maxEdgeStart': this.maxEdgeStart,
                'edge': this.side,
                'enabled': this.isActive() && this.swipeEnabled,
                'gestureName': 'menu-swipe',
                'gesturePriority': 10,
                'type': 'pan',
                'direction': 'x',
                'threshold': 10,
                'attachTo': 'body',
                'disableScroll': true,
                'block': this.gestureBlocker
            }))
        ]);
    }
}
function computeDelta(deltaX, isOpen, isRightSide) {
    return Math.max(0, (isOpen !== isRightSide) ? -deltaX : deltaX);
}
const SHOW_MENU = 'show-menu';
const SHOW_BACKDROP = 'show-backdrop';
const MENU_CONTENT_OPEN = 'menu-content-open';
const GESTURE_BLOCKER = 'goback-swipe';
