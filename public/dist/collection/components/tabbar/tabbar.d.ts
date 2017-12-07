export declare class Tabbar {
    mode: string;
    color: string;
    hidden: boolean;
    placement: string;
    tabs: HTMLIonTabElement[];
    selectedTab: HTMLIonTabElement;
    layout: string;
    highlight: boolean;
    translucent: boolean;
    protected onKeyboardWillHide(): void;
    protected onKeyboardWillShow(): void;
    hostData(): {
        role: string;
        class: {
            [x: string]: boolean;
            'tabbar-hidden': boolean;
        };
    };
    render(): JSX.Element[];
}
