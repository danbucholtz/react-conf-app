import { Transition } from './nav-interfaces';
import { Animation, AnimationOptions, Config, Nav, RouterEntry, TransitionBuilder, ViewController } from '..';
export declare const STATE_NEW = 1;
export declare const STATE_INITIALIZED = 2;
export declare const STATE_ATTACHED = 3;
export declare const STATE_DESTROYED = 4;
export declare const INIT_ZINDEX = 100;
export declare const PORTAL_Z_INDEX_OFFSET = 0;
export declare const DIRECTION_BACK = "back";
export declare const DIRECTION_FORWARD = "forward";
export declare const DIRECTION_SWITCH = "switch";
export declare const NAV = "nav";
export declare const TABS = "tabs";
export declare let NAV_ID_START: number;
export declare let VIEW_ID_START: number;
export declare function isViewController(object: any): boolean;
export declare function setZIndex(nav: Nav, enteringView: ViewController, leavingView: ViewController, direction: string): void;
export declare function updateZIndex(viewController: ViewController, newZIndex: number): void;
export declare function toggleHidden(element: HTMLElement, isVisible: Boolean, shouldBeVisible: boolean): void;
export declare function canNavGoBack(nav: Nav): boolean;
export declare function transitionFactory(animation: Animation): Transition;
export declare function transitionStartImpl(transition: Transition): void;
export declare function transitionDestroyImpl(transition: Transition): void;
export declare function getParentTransitionId(nav: Nav): number;
export declare function getNextTransitionId(): number;
export declare function destroyTransition(transitionId: number): void;
export declare function getHydratedTransition(name: string, config: Config, transitionId: number, emptyTransition: Transition, enteringView: ViewController, leavingView: ViewController, opts: AnimationOptions, defaultTransitionFactory: TransitionBuilder): Transition;
export declare function canGoBack(nav: Nav): boolean;
export declare function canSwipeBack(_nav: Nav): boolean;
export declare function getFirstView(nav: Nav): ViewController;
export declare function getActiveChildNavs(nav: Nav): Nav[];
export declare function getViews(nav: Nav): ViewController[];
export declare function getActiveImpl(nav: Nav): ViewController;
export declare function getPreviousImpl(nav: Nav, viewController: ViewController): ViewController;
export declare function getNextNavId(): number;
export declare function resolveRoute(nav: Nav, component: string): RouterEntry;