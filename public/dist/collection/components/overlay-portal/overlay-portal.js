var IonOverlayPortal = /** @class */ (function () {
    function IonOverlayPortal() {
    }
    IonOverlayPortal.prototype.getActiveChildNavs = function () {
        throw new Error("Method not implemented.");
    };
    IonOverlayPortal.prototype.getAllChildNavs = function () {
        throw new Error("Method not implemented.");
    };
    IonOverlayPortal.prototype.getType = function () {
        return 'portal';
    };
    IonOverlayPortal.prototype.getSecondaryIdentifier = function () {
        return null;
    };
    IonOverlayPortal.prototype.componentWillLoad = function () {
        componentWillLoadImpl(this);
    };
    IonOverlayPortal.prototype.render = function () {
        return h(0, 0);
    };
    return IonOverlayPortal;
}());
export { IonOverlayPortal };
export function componentWillLoadImpl(overlayPortal) {
    overlayPortal.registerPortal.emit(overlayPortal);
}
