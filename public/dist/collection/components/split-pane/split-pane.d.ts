import { EventEmitter } from '@stencil/core';
export declare class SplitPane {
    private rmL;
    private el;
    private visible;
    /**
     * @input {boolean} If `false`, the split-pane is disabled, ie. the side pane will
     * never be displayed. Default `true`.
     */
    enabled: boolean;
    /**
     * @input {string | boolean} When the split-pane should be shown.
     * Can be a CSS media query expression, or a shortcut expression.
     * Can also be a boolean expression.
     */
    when: string | boolean;
    /**
     * @output {Event} Expression to be called when the split-pane visibility has changed
     */
    ionSplitPaneDidChange: EventEmitter;
    /**
     * @output {Event} Emitted when the split pane is visible.
     */
    ionChange: EventEmitter;
    componentDidLoad(): void;
    componentDidUnload(): void;
    private _styleChildren();
    protected whenChanged(): void;
    private _setVisible(visible);
    /**
     * @hidden
     */
    isVisible(): boolean;
    isPane(element: HTMLElement): boolean;
    hostData(): {
        class: {
            'split-pane-visible': boolean;
        };
    };
    render(): JSX.Element;
}
export interface SplitPaneAlert {
    detail: {
        splitPane: SplitPane;
    };
}
