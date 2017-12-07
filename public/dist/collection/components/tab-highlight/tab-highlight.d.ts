export declare class TabHighlight {
    private el;
    animated: boolean;
    transform: string;
    selectedTab: HTMLIonTabElement;
    selectedTabChanged(): void;
    onResize(): void;
    componentDidLoad(): void;
    protected updateTransform(): void;
    private getSelectedButton();
    hostData(): {
        style: {
            'transform': string;
        };
        class: {
            'animated': boolean;
        };
    };
}
