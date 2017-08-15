export var STATE_NEW = 1;
export var STATE_INITIALIZED = 2;
export var STATE_ATTACHED = 3;
export var STATE_DESTROYED = 4;
export var INIT_ZINDEX = 100;
export var DIRECTION_BACK = 'back';
export var DIRECTION_FORWARD = 'forward';
export var DIRECTION_SWITCH = 'switch';
export var NAV = 'nav';
export var TABS = 'tabs';
export function isViewController(object) {
    return !!(object && object.didLoad && object.willUnload);
}
export function setZIndex(_isPortal, _enteringView, _leavingView, _direction) {
    // TODO
}
export function toggleHidden(element, isVisible, shouldBeVisible) {
    if (isVisible !== shouldBeVisible) {
        element.hidden = shouldBeVisible;
    }
}
