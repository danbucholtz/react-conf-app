export declare class ReorderIndexes {
    from: number;
    to: number;
    constructor(from: number, to: number);
    applyTo(array: any): void;
}
export declare class ReorderGroup {
    private selectedItemEl;
    private selectedItemHeight;
    private lastToIndex;
    private cachedHeights;
    private containerEl;
    private scrollEl;
    private scrollElTop;
    private scrollElBottom;
    private scrollElInitial;
    private containerTop;
    private containerBottom;
    _enabled: boolean;
    _iconVisible: boolean;
    _actived: boolean;
    private el;
    enabled: boolean;
    /**
     * @input {string} Which side of the view the ion-reorder should be placed. Default `"end"`.
     */
    protected enabledChanged(enabled: boolean): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    private canStart(ev);
    private onDragStart(ev);
    private onDragMove(ev);
    private onDragEnd();
    private itemIndexForTop(deltaY);
    /********* DOM WRITE ********* */
    private _reorderMove(fromIndex, toIndex);
    private autoscroll(posY);
    hostData(): {
        class: {
            'reorder-enabled': boolean;
            'reorder-list-active': boolean;
            'reorder-visible': boolean;
        };
    };
    render(): JSX.Element;
}
