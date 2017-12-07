import { EventEmitter } from '@stencil/core';
export declare class TabButton {
    selected: boolean;
    tab: HTMLIonTabElement;
    ionTabbarClick: EventEmitter;
    protected onClick(ev: UIEvent): void;
    hostData(): {
        'role': string;
        'id': string;
        'aria-selected': boolean;
        class: {
            'tab-selected': boolean;
            'has-title': boolean;
            'has-icon': boolean;
            'has-title-only': boolean;
            'has-icon-only': boolean;
            'has-badge': boolean;
            'tab-disabled': boolean;
            'tab-hidden': boolean;
        };
    };
    render(): any[];
}
