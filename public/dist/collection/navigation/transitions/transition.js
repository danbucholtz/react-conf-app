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
import { Animation } from '../../animations/animation';
var Transition = (function (_super) {
    __extends(Transition, _super);
    function Transition(enteringView, leavingView, opts) {
        var _this = _super.call(this) || this;
        _this.enteringView = enteringView;
        _this.leavingView = leavingView;
        _this.opts = opts;
        return _this;
    }
    Transition.prototype.init = function () {
    };
    Transition.prototype.registerStart = function (transitionStart) {
        this.transitionStart = transitionStart;
    };
    Transition.prototype.start = function () {
        this.transitionStart && this.transitionStart();
        this.transitionStart = null;
        // bubble up start
        this.parent && this.parent.start();
    };
    Transition.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.parent = this.transitionStart = null;
    };
    return Transition;
}(Animation));
export { Transition };
