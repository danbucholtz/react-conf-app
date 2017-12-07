import { EventEmitter } from '@stencil/core';
import { ComponentDataPair, Config, FrameworkDelegate, NavController, NavOptions, NavState, PublicNav, PublicViewController, RouterEntries, ViewController } from '../../index';
export declare class Nav implements PublicNav {
    element: HTMLElement;
    navInit: EventEmitter;
    ionNavChanged: EventEmitter;
    useRouter: boolean;
    navId: number;
    init: boolean;
    routes: RouterEntries;
    parent: Nav;
    views: ViewController[];
    transitioning?: boolean;
    destroyed?: boolean;
    transitionId?: number;
    isViewInitialized?: boolean;
    isPortal: boolean;
    swipeToGoBackTransition: any;
    childNavs?: Nav[];
    navController?: NavController;
    mode: string;
    root: any;
    delegate: FrameworkDelegate;
    config: Config;
    constructor();
    componentWillLoad(): void;
    componentDidLoad(): void;
    getViews(): PublicViewController[];
    push(component: any, data?: any, opts?: NavOptions): Promise<any>;
    pop(opts?: NavOptions): Promise<any>;
    setRoot(component: any, data?: any, opts?: NavOptions): Promise<any>;
    insert(insertIndex: number, page: any, params?: any, opts?: NavOptions): Promise<any>;
    insertPages(insertIndex: number, insertPages: any[], opts?: NavOptions): Promise<any>;
    popToRoot(opts?: NavOptions): Promise<any>;
    popTo(indexOrViewCtrl: any, opts?: NavOptions): Promise<any>;
    removeIndex(startIndex: number, removeCount?: number, opts?: NavOptions): Promise<any>;
    removeView(viewController: PublicViewController, opts?: NavOptions): Promise<any>;
    setPages(componentDataPairs: ComponentDataPair[], opts?: NavOptions): Promise<any>;
    getActive(): PublicViewController;
    getPrevious(view?: PublicViewController): PublicViewController;
    canGoBack(): boolean;
    canSwipeBack(): boolean;
    getFirstView(): PublicViewController;
    resize(): void;
    navInitialized(event: CustomEvent): void;
    getState(): NavState;
    setRouteId(id: string, _?: any): Promise<void>;
    getRoutes(): RouterEntries;
    render(): JSX.Element;
}
export declare function getState(nav: Nav): NavState;
export declare function componentDidLoadImpl(nav: Nav): void;
export declare function pushImpl(nav: Nav, component: any, data: any, opts: NavOptions): Promise<any>;
export declare function popImpl(nav: Nav, opts: NavOptions): Promise<any>;
export declare function setRootImpl(nav: Nav, component: any, data: any, opts: NavOptions): Promise<any>;
export declare function insertImpl(nav: Nav, insertIndex: number, page: any, params: any, opts: NavOptions): Promise<any>;
export declare function insertPagesImpl(nav: Nav, insertIndex: number, insertPages: any[], opts: NavOptions): Promise<any>;
export declare function popToRootImpl(nav: Nav, opts: NavOptions): Promise<any>;
export declare function popToImpl(nav: Nav, indexOrViewCtrl: any, opts: NavOptions): Promise<any>;
export declare function removeImpl(nav: Nav, startIndex: number, removeCount: number, opts: NavOptions): Promise<any>;
export declare function removeViewImpl(nav: Nav, viewController: PublicViewController, opts?: NavOptions): Promise<any>;
export declare function setPagesImpl(nav: Nav, componentDataPairs: ComponentDataPair[], opts?: NavOptions): Promise<any>;
export declare function getNavController(nav: Nav): Promise<any>;
export declare function canGoBackImpl(nav: Nav): boolean;
export declare function navInitializedImpl(potentialParent: Nav, event: CustomEvent): void;