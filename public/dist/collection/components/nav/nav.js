import { getNextNavId, getViews, pop, push, setRoot } from '../../navigation/nav-controller-functions';
import { delegate as defaultStencilDelegate } from '../../navigation/stencil-framework-delegate';
var Nav = (function () {
    function Nav() {
        init(this);
    }
    Nav.prototype["componentDidLoad"] = function () {
        this.setRoot(this.root);
    };
    Nav.prototype.getViews = function () {
        return getViews(this);
    };
    Nav.prototype.getParent = function () {
        return null; // TODO
    };
    Nav.prototype.push = function (component, data, opts) {
        if (opts === void 0) { opts = {}; }
        return push(this, this.delegate || defaultStencilDelegate, component, data, opts);
    };
    Nav.prototype.pop = function (opts) {
        if (opts === void 0) { opts = {}; }
        return pop(this, this.delegate || defaultStencilDelegate, opts);
    };
    Nav.prototype.setRoot = function (component, data, opts) {
        if (opts === void 0) { opts = {}; }
        return setRoot(this, this.delegate || defaultStencilDelegate, component, data, opts);
    };
    Nav.prototype.render = function () {
        return h(0, 0);
    };
    return Nav;
}());
export { Nav };
export function init(nav) {
    nav.id = getNextNavId();
    nav.views = [];
}
