import { EventEmitter } from '@stencil/core';
import { Config } from '../..';
export declare class KeyboardController {
    config: Config;
    /**
     * @output {Event} Emitted before the keyboard has shown.
     */
    keyboardWillShow: EventEmitter;
    /**
     * @output {Event} Emitted after the keyboard has shown.
     */
    keyboardDidShow: EventEmitter;
    /**
     * @output {Event} Emitted before the keyboard has hidden.
     */
    keyboardWillHide: EventEmitter;
    /**
     * @output {Event} Emitted after the keyboard has hidden.
     */
    keyboardDidHide: EventEmitter;
    componentDidLoad(): void;
    isOpen(): boolean;
    onClose(callback: Function, pollingInterval?: number, maxPollingChecks?: number): Promise<any>;
}
export declare function onCloseImpl(keyboardController: KeyboardController, callback: Function, pollingInterval: number, maxPollingChecks: number): Promise<any>;
export declare function componentDidLoadImpl(keyboardController: KeyboardController): void;
export declare function listenV2(win: Window, keyboardController: KeyboardController): void;
export declare function listenV1(win: Window, keyboardController: KeyboardController): void;
export declare function blurActiveInput(shouldBlur: boolean, keyboardController: KeyboardController): void;
export declare function focusOutline(doc: Document, value: boolean): void;
