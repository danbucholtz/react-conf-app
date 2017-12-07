import { EventEmitter } from '@stencil/core';
import { Config, GestureDetail } from '../../index';
export declare class Scroll {
    private gesture;
    private positions;
    private _l;
    private _t;
    private tmr;
    private queued;
    isScrolling: boolean;
    detail: ScrollDetail;
    private el;
    config: Config;
    enabled: boolean;
    jsScroll: boolean;
    jsScrollChanged(js: boolean): void;
    onionScrollStart: ScrollCallback;
    onionScroll: ScrollCallback;
    onionScrollEnd: ScrollCallback;
    /**
     * @output {ScrollEvent} Emitted when the scroll has started.
     */
    ionScrollStart: EventEmitter;
    /**
     * @output {ScrollEvent} Emitted while scrolling.
     */
    ionScroll: EventEmitter;
    /**
     * @output {ScrollEvent} Emitted when the scroll has ended.
     */
    ionScrollEnd: EventEmitter;
    componentDidLoad(): void;
    componentDidUnload(): void;
    scrollToTop(duration: number): Promise<void>;
    scrollToBottom(duration: number): Promise<void>;
    scrollToPoint(x: number, y: number, duration: number, done?: Function): Promise<any>;
    protected onNativeScroll(): void;
    private onScroll(timeStamp);
    private onEnd(timeStamp);
    /** DOM READ */
    private getTop();
    /** DOM READ */
    private getLeft();
    /** DOM WRITE */
    private setTop(top);
    /** DOM WRITE */
    private setLeft(left);
    render(): JSX.Element;
}
export interface ScrollDetail extends GestureDetail {
    scrollTop?: number;
    scrollLeft?: number;
    scrollHeight?: number;
    scrollWidth?: number;
    contentHeight?: number;
    contentWidth?: number;
    contentTop?: number;
    contentBottom?: number;
}
export interface ScrollCallback {
    (detail?: ScrollDetail): boolean | void;
}
