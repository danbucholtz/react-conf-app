/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-spinner",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
function createThemedClasses(mode, color, classes) {
    var classObj = {};
    return classes.split(' ')
        .reduce(function (classObj, classString) {
        classObj[classString] = true;
        if (mode) {
            classObj[classString + "-" + mode] = true;
            if (color) {
                classObj[classString + "-" + color] = true;
                classObj[classString + "-" + mode + "-" + color] = true;
            }
        }
        return classObj;
    }, classObj);
}
/**
 * Get the classes from a class list and return them as an object
 */

var SPINNERS = {
    lines: {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = 'rotate(' + (30 * index + (index < 6 ? 180 : -180)) + 'deg)';
            var animationDelay = -(dur - ((dur / total) * index)) + 'ms';
            return {
                y1: 17,
                y2: 29,
                style: {
                    transform: transform,
                    webkitTransform: transform,
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    },
    'lines-sm': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = 'rotate(' + (30 * index + (index < 6 ? 180 : -180)) + 'deg)';
            var animationDelay = -(dur - ((dur / total) * index)) + 'ms';
            return {
                y1: 12,
                y2: 20,
                style: {
                    transform: transform,
                    webkitTransform: transform,
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    },
    bubbles: {
        dur: 1000,
        circles: 9,
        fn: function (dur, index, total) {
            var animationDelay = -(dur - ((dur / total) * index)) + 'ms';
            return {
                r: 5,
                style: {
                    top: (9 * Math.sin(2 * Math.PI * index / total)) + 'px',
                    left: (9 * Math.cos(2 * Math.PI * index / total)) + 'px',
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    },
    circles: {
        dur: 1000,
        circles: 8,
        fn: function (dur, index, total) {
            var animationDelay = -(dur - ((dur / total) * index)) + 'ms';
            return {
                r: 5,
                style: {
                    top: (9 * Math.sin(2 * Math.PI * index / total)) + 'px',
                    left: (9 * Math.cos(2 * Math.PI * index / total)) + 'px',
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    },
    crescent: {
        dur: 750,
        circles: 1,
        fn: function () {
            return {
                r: 26,
                style: {}
            };
        }
    },
    dots: {
        dur: 750,
        circles: 3,
        fn: function (dur, index) {
            var animationDelay = -(110 * index) + 'ms';
            dur;
            return {
                r: 6,
                style: {
                    left: (9 - (9 * index)) + 'px',
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    }
};

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Spinner = /** @class */ (function () {
    function Spinner() {
        /**
         * @input {boolean} If true, pause the animation.
         */
        this.paused = false;
    }
    Spinner.prototype.getName = function () {
        var name = this.name || this.config.get('spinner');
        if (!name) {
            // fallback
            if (this.mode === 'md') {
                return 'crescent';
            }
            else if (this.mode === 'wp') {
                return 'circles';
            }
            else {
                return 'lines';
            }
        }
        if (name === 'ios') {
            // deprecation warning, renamed in v4
            console.warn("spinner \"ios\" has been renamed to \"lines\"");
            name = 'lines';
        }
        else if (name === 'ios-small') {
            // deprecation warning, renamed in v4
            console.warn("spinner \"ios-small\" has been renamed to \"lines-sm\"");
            name = 'lines-sm';
        }
        return name;
    };
    Spinner.prototype.hostData = function () {
        var themedClasses = createThemedClasses(this.mode, this.color, "spinner spinner-" + this.getName());
        var spinnerClasses = __assign({}, themedClasses, { 'spinner-paused': this.paused });
        return {
            class: spinnerClasses
        };
    };
    Spinner.prototype.render = function () {
        var name = this.getName();
        var spinner = SPINNERS[name] || SPINNERS['lines'];
        var duration = (typeof this.duration === 'number' && this.duration > 10 ? this.duration : spinner.dur);
        var svgs = [];
        var i = 0;
        var l = 0;
        if (spinner.circles) {
            for (i = 0, l = spinner.circles; i < l; i++) {
                svgs.push(buildCircle(spinner, duration, i, l));
            }
        }
        else if (spinner.lines) {
            for (i = 0, l = spinner.lines; i < l; i++) {
                svgs.push(buildLine(spinner, duration, i, l));
            }
        }
        return svgs;
    };
    return Spinner;
}());
function buildCircle(spinner, duration, index, total) {
    var data = spinner.fn(duration, index, total);
    data.style.animationDuration = duration + 'ms';
    return (h("svg", { "n": "http://www.w3.org/2000/svg", "s": data.style, "a": { "viewBox": '0 0 64 64' } },
        h("circle", { "n": "http://www.w3.org/2000/svg", "a": { "transform": "translate(32,32)", "r": data.r } })));
}
function buildLine(spinner, duration, index, total) {
    var data = spinner.fn(duration, index, total);
    data.style.animationDuration = duration + 'ms';
    return (h("svg", { "n": "http://www.w3.org/2000/svg", "s": data.style, "a": { "viewBox": '0 0 64 64' } },
        h("line", { "n": "http://www.w3.org/2000/svg", "a": { "transform": "translate(32,32)", "y1": data.y1, "y2": data.y2 } })));
}

exports['ION-SPINNER'] = Spinner;
},


/***************** ion-spinner *****************/
[
/** ion-spinner: tag **/
"ION-SPINNER",

/** ion-spinner: members **/
[
  [ "config", /** prop context **/ 3, /** type any **/ 0, /** context ***/ "config" ],
  [ "duration", /** prop **/ 1, /** type number **/ 2 ],
  [ "name", /** prop **/ 1 ],
  [ "paused", /** prop **/ 1, /** type boolean **/ 1 ]
],

/** ion-spinner: host **/
{"theme":"spinner"}

]
)