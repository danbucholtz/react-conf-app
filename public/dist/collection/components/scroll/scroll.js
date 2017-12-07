import { EventEmitter } from '@stencil/core';
import { Config, GestureDetail } from '../../index';
import { GestureController, GestureDelegate } from '../gesture-controller/gesture-controller';
export class Scroll {
    constructor() {
        this.positions = [];
        this.queued = false;
        this.isScrolling = false;
        this.detail = {};
        this.enabled = true;
        this.jsScroll = false;
    }
    jsScrollChanged(js) {
        if (js) {
            throw 'jsScroll: TODO!';
        }
    }
    componentDidLoad() {
        if (Context.isServer) {
            return;
        }
        const gestureCtrl = Context.gesture = Context.gesture || new GestureController;
        this.gesture = gestureCtrl.createGesture('scroll', 100, false);
    }
    componentDidUnload() {
        this.gesture && this.gesture.destroy();
        this.gesture = this.detail = this.detail.event = null;
    }
    scrollToTop(duration) {
        return this.scrollToPoint(0, 0, duration);
    }
    scrollToBottom(duration) {
        const y = (this.el)
            ? this.el.scrollHeight - this.el.clientHeight
            : 0;
        return this.scrollToPoint(0, y, duration);
    }
    scrollToPoint(x, y, duration, done) {
        // scroll animation loop w/ easing
        // credit https://gist.github.com/dezinezync/5487119
        let promise;
        if (done === undefined) {
            // only create a promise if a done callback wasn't provided
            // done can be a null, which avoids any functions
            promise = new Promise(resolve => {
                done = resolve;
            });
        }
        const self = this;
        const el = self.el;
        if (!el) {
            // invalid element
            done();
            return promise;
        }
        if (duration < 32) {
            self.setTop(y);
            self.setLeft(x);
            done();
            return promise;
        }
        const fromY = el.scrollTop;
        const fromX = el.scrollLeft;
        const maxAttempts = (duration / 16) + 100;
        let startTime;
        let attempts = 0;
        let stopScroll = false;
        // scroll loop
        function step(timeStamp) {
            attempts++;
            if (!self.el || stopScroll || attempts > maxAttempts) {
                self.isScrolling = false;
                el.style.transform = el.style.webkitTransform = '';
                done();
                return;
            }
            let time = Math.min(1, ((timeStamp - startTime) / duration));
            // where .5 would be 50% of time on a linear scale easedT gives a
            // fraction based on the easing method
            let easedT = (--time) * time * time + 1;
            if (fromY !== y) {
                self.setTop((easedT * (y - fromY)) + fromY);
            }
            if (fromX !== x) {
                self.setLeft(Math.floor((easedT * (x - fromX)) + fromX));
            }
            if (easedT < 1) {
                // do not use DomController here
                // must use nativeRaf in order to fire in the next frame
                Context.dom.raf(step);
            }
            else {
                stopScroll = true;
                self.isScrolling = false;
                el.style.transform = el.style.webkitTransform = '';
                done();
            }
        }
        // start scroll loop
        self.isScrolling = true;
        // chill out for a frame first
        Context.dom.write(() => {
            Context.dom.write(timeStamp => {
                startTime = timeStamp;
                step(timeStamp);
            });
        });
        return promise;
    }
    // Native Scroll *************************
    onNativeScroll() {
        if (!this.queued) {
            this.queued = true;
            Context.dom.read((timeStamp) => {
                this.queued = false;
                this.onScroll(timeStamp);
            });
        }
    }
    onScroll(timeStamp) {
        const detail = this.detail;
        const positions = this.positions;
        detail.timeStamp = timeStamp;
        // get the current scrollTop
        // ******** DOM READ ****************
        detail.scrollTop = this.getTop();
        // get the current scrollLeft
        // ******** DOM READ ****************
        detail.scrollLeft = this.getLeft();
        if (!this.isScrolling) {
            // currently not scrolling, so this is a scroll start
            this.isScrolling = true;
            // remember the start positions
            detail.startY = detail.scrollTop;
            detail.startX = detail.scrollLeft;
            // new scroll, so do some resets
            detail.velocityY = detail.velocityX = detail.deltaY = detail.deltaX = positions.length = 0;
            // emit only on the first scroll event
            if (this.onionScrollStart) {
                this.onionScrollStart(detail);
            }
            else {
                this.ionScrollStart.emit(detail);
            }
        }
        // actively scrolling
        positions.push(detail.scrollTop, detail.scrollLeft, detail.timeStamp);
        if (positions.length > 3) {
            // we've gotten at least 2 scroll events so far
            detail.deltaY = (detail.scrollTop - detail.startY);
            detail.deltaX = (detail.scrollLeft - detail.startX);
            var endPos = (positions.length - 1);
            var startPos = endPos;
            var timeRange = (detail.timeStamp - 100);
            // move pointer to position measured 100ms ago
            for (var i = endPos; i > 0 && positions[i] > timeRange; i -= 3) {
                startPos = i;
            }
            if (startPos !== endPos) {
                // compute relative movement between these two points
                var deltaY = (positions[startPos - 2] - positions[endPos - 2]);
                var deltaX = (positions[startPos - 1] - positions[endPos - 1]);
                var factor = 1 / (positions[startPos] - positions[endPos]);
                // based on XXms compute the movement to apply for each render step
                detail.velocityY = deltaY * factor;
                detail.velocityX = deltaX * factor;
            }
        }
        clearTimeout(this.tmr);
        this.tmr = setTimeout(() => {
            // haven't scrolled in a while, so it's a scrollend
            this.isScrolling = false;
            Context.dom.read((timeStamp) => {
                if (!this.isScrolling) {
                    this.onEnd(timeStamp);
                }
            });
        }, 80);
        // emit on each scroll event
        if (this.onionScroll) {
            this.onionScroll(detail);
        }
        else {
            this.ionScroll.emit(detail);
        }
    }
    onEnd(timeStamp) {
        const detail = this.detail;
        detail.timeStamp = timeStamp;
        // emit that the scroll has ended
        if (this.onionScrollEnd) {
            this.onionScrollEnd(detail);
        }
        else {
            this.ionScrollEnd.emit(detail);
        }
    }
    /** DOM READ */
    getTop() {
        if (this.jsScroll) {
            return this._t;
        }
        return this._t = this.el.scrollTop;
    }
    /** DOM READ */
    getLeft() {
        if (this.jsScroll) {
            return 0;
        }
        return this._l = this.el.scrollLeft;
    }
    /** DOM WRITE */
    setTop(top) {
        this._t = top;
        if (this.jsScroll) {
            this.el.style.transform = this.el.style.webkitTransform = `translate3d(${this._l * -1}px,${top * -1}px,0px)`;
        }
        else {
            this.el.scrollTop = top;
        }
    }
    /** DOM WRITE */
    setLeft(left) {
        this._l = left;
        if (this.jsScroll) {
            this.el.style.transform = this.el.style.webkitTransform = `translate3d(${left * -1}px,${this._t * -1}px,0px)`;
        }
        else {
            this.el.scrollLeft = left;
        }
    }
    render() {
        return (
        // scroll-inner is used to keep custom user padding
        h("div", { class: 'scroll-inner' },
            h("slot", null)));
    }
}
