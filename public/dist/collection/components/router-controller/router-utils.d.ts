export interface NavElement extends HTMLElement {
    setRouteId(id: any, data?: any): Promise<void>;
    getRoutes(): RouterEntries;
    getState(): NavState;
    componentOnReady(): Promise<HTMLElement>;
    componentOnReady(done: (cmp?: HTMLElement) => void): void;
}
export interface RouterEntry {
    path: string;
    id: any;
    segments?: string[];
    props?: any;
}
export declare type RouterEntries = RouterEntry[];
export interface NavState {
    path: string;
    focusNode: HTMLElement;
}
export declare class RouterSegments {
    private segments;
    constructor(segments: string[]);
    next(): string;
}
export declare function writeNavState(root: HTMLElement, segments: RouterSegments): Promise<void>;
export declare function readNavState(node: HTMLElement): {
    stack: any[];
    pivot: NavElement;
};
export declare function matchRoute(segments: RouterSegments, routes: RouterEntries): RouterEntry;
export declare function generateURL(stack: NavState[]): string;
export declare function initRoute(route: RouterEntry): RouterEntry;
export declare function parseURL(url: string): string[];
export declare function breadthFirstSearch(root: HTMLElement): NavElement;
