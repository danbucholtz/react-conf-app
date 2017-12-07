export declare class FabList {
    private el;
    activated: boolean;
    protected activatedChanged(activated: boolean): void;
    hostData(): {
        class: {
            'fab-list-active': boolean;
        };
    };
    render(): JSX.Element;
}
