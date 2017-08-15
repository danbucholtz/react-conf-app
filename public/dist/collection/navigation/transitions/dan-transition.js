var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Transition } from './transition';
import { Animation } from '../../animations/animation';
var DanTransition = (function (_super) {
    __extends(DanTransition, _super);
    function DanTransition(enteringView, leavingView, opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, enteringView, leavingView, opts) || this;
        _this.enteringView = enteringView;
        _this.leavingView = leavingView;
        return _this;
    }
    DanTransition.prototype.init = function () {
        _super.prototype.init.call(this);
        var enteringAnimation = new Animation(this.enteringView.element);
        enteringAnimation.fromTo('display', '', '');
        this.add(enteringAnimation);
        if (this.leavingView) {
            var leavingAnimation = new Animation(this.leavingView.element);
            leavingAnimation.fromTo('display', '', 'none');
            this.add(leavingAnimation);
        }
    };
    return DanTransition;
}(Transition));
export { DanTransition };
