/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-app",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
function getParentElement(elm) {
    if (elm.parentElement) {
        // normal element with a parent element
        return elm.parentElement;
    }
    if (elm.parentNode && elm.parentNode.host) {
        // shadow dom's document fragment
        return elm.parentNode.host;
    }
    return null;
}

function getToolbarHeight(toolbarTagName, pageChildren, mode, iosHeight, defaultHeight) {
    for (var i = 0; i < pageChildren.length; i++) {
        if (pageChildren[i].tagName === toolbarTagName) {
            var headerHeight = pageChildren[i].getAttribute(mode + "-height");
            if (headerHeight) {
                return headerHeight;
            }
            if (mode === 'ios') {
                return iosHeight;
            }
            return defaultHeight;
        }
    }
    return '';
}
/**
 * @hidden
 * Given a side, return if it should be on the right
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 * @param defaultRight whether the default side is right
 */

/** @hidden */



/** @hidden */

var PORTAL_DEFAULT = 'general';
var PORTAL_LOADING = 'loading';
var PORTAL_MODAL = 'modal';
var PORTAL_TOAST = 'toast';

var rootNavs = new Map();
var portals = new Map();
var IonApp = /** @class */ (function () {
    function IonApp() {
    }
    IonApp.prototype.registerRootNav = function (event) {
        rootNavs.set(event.detail.id, event.detail);
    };
    IonApp.prototype.registerPortal = function (event) {
        portals.set(event.detail.type, event.detail);
    };
    IonApp.prototype.componentWillLoad = function () {
        componentDidLoadImpl(this);
    };
    IonApp.prototype.getActiveNavs = function (rootNavId) {
        var portal = portals.get(PORTAL_MODAL);
        if (portal && portal.views && portal.views.length) {
            return findTopNavs(portal);
        }
        if (!rootNavs.size) {
            return [];
        }
        if (rootNavId) {
            return findTopNavs(rootNavs.get(rootNavId));
        }
        if (rootNavs.size === 1) {
            return findTopNavs(rootNavs.values().next().value);
        }
        // fallback to just using all root navs
        var activeNavs = [];
        rootNavs.forEach(function (nav) {
            activeNavs = activeNavs.concat(findTopNavs(nav));
        });
        return activeNavs;
    };
    IonApp.prototype.getNavByIdOrName = function (nameOrId) {
        var navs = Array.from(rootNavs.values());
        for (var _i = 0, navs_1 = navs; _i < navs_1.length; _i++) {
            var navContainer = navs_1[_i];
            var match = getNavByIdOrNameImpl(navContainer, nameOrId);
            if (match) {
                return match;
            }
        }
        return null;
    };
    IonApp.prototype.render = function () {
        return ([
            h(0, 0),
            h("ion-overlay-portal", { "p": { "type": PORTAL_MODAL } }),
            h("ion-overlay-portal", { "p": { "type": PORTAL_DEFAULT } }),
            h("ion-overlay-portal", { "p": { "type": PORTAL_LOADING } }),
            h("ion-overlay-portal", { "p": { "type": PORTAL_TOAST } }),
        ]);
    };
    return IonApp;
}());
function findTopNavs(nav) {
    var containers = [];
    var childNavs = nav.getActiveChildNavs();
    if (!childNavs || !childNavs.length) {
        containers.push(nav);
    }
    else {
        childNavs.forEach(function (childNav) {
            var topNavs = findTopNavs(childNav);
            containers = containers.concat(topNavs);
        });
    }
    return containers;
}
function getNavByIdOrNameImpl(nav, id) {
    if (nav.id === id || nav.name === id) {
        return nav;
    }
    for (var _i = 0, _a = nav.getAllChildNavs(); _i < _a.length; _i++) {
        var child = _a[_i];
        var tmp = getNavByIdOrNameImpl(child, id);
        if (tmp) {
            return tmp;
        }
    }
    return null;
}
function componentDidLoadImpl(app) {
    app.element.classList.add(app.config.get('mode'));
    // TODO add platform classes
    if (app.config.getBoolean('hoverCSS', true)) {
        app.element.classList.add('enable-hover');
    }
    // TODO fire platform ready
}

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
function getElementClassObject(classList) {
    var classObj = {};
    for (var i = 0; i < classList.length; i++) {
        classObj[classList.item(i)] = true;
    }
    return classObj;
}

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Content = /** @class */ (function () {
    function Content() {
        this.$scrollDetail = {};
        /**
         * @input {boolean} If true, the content will scroll behind the headers
         * and footers. This effect can easily be seen by setting the toolbar
         * to transparent.
         */
        this.fullscreen = false;
    }
    Content.prototype["componentDidunload"] = function () {
        this.$fixed = this.$scroll = this.$siblingFooter = this.$siblingHeader = this.$scrollDetail = null;
    };
    Content.prototype.enableJsScroll = function () {
        this.$scroll.jsScroll = true;
    };
    /**
     * Scroll to the top of the content component.
     *
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    Content.prototype.scrollToTop = function (duration) {
        if (duration === void 0) { duration = 300; }
        return this.$scroll.scrollToTop(duration);
    };
    /**
     * Scroll to the bottom of the content component.
     *
     * @param {number} [duration]  Duration of the scroll animation in milliseconds. Defaults to `300`.
     * @returns {Promise} Returns a promise which is resolved when the scroll has completed.
     */
    Content.prototype.scrollToBottom = function (duration) {
        if (duration === void 0) { duration = 300; }
        return this.$scroll.scrollToBottom(duration);
    };
    Content.prototype.render = function () {
        var props = {};
        var scrollStyle = {};
        var pageChildren = getParentElement(this.el).children;
        var headerHeight = getToolbarHeight('ION-HEADER', pageChildren, this.mode, '44px', '56px');
        var footerHeight = getToolbarHeight('ION-FOOTER', pageChildren, this.mode, '50px', '48px');
        if (this.fullscreen) {
            scrollStyle.paddingTop = headerHeight;
            scrollStyle.paddingBottom = footerHeight;
        }
        else {
            scrollStyle.marginTop = headerHeight;
            scrollStyle.marginBottom = footerHeight;
        }
        if (this.ionScrollStart) {
            props['ionScrollStart'] = this.ionScrollStart.bind(this);
        }
        if (this.ionScroll) {
            props['ionScroll'] = this.ionScroll.bind(this);
        }
        if (this.ionScrollEnd) {
            props['ionScrollEnd'] = this.ionScrollEnd.bind(this);
        }
        var themedClasses = createThemedClasses(this.mode, this.color, 'content');
        var hostClasses = getElementClassObject(this.el.classList);
        var scrollClasses = __assign({}, themedClasses, hostClasses, { 'statusbar-padding': this.config.getBoolean('statusbarPadding') });
        return (h("ion-scroll", { "s": scrollStyle, "p": props, "c": scrollClasses },
            h(0, 0)));
    };
    return Content;
}());

var Fixed = /** @class */ (function () {
    function Fixed() {
    }
    Fixed.prototype.hostData = function () {
        var pageChildren = getParentElement(this.el).children;
        var headerHeight = getToolbarHeight('ION-HEADER', pageChildren, this.mode, '44px', '56px');
        var footerHeight = getToolbarHeight('ION-FOOTER', pageChildren, this.mode, '50px', '48px');
        return {
            class: {
                'statusbar-padding': this.config.getBoolean('statusbarPadding')
            },
            style: {
                'margin-top': headerHeight,
                'margin-bottom': footerHeight
            }
        };
    };
    Fixed.prototype.render = function () {
        return (h(0, 0));
    };
    return Fixed;
}());

var Footer = /** @class */ (function () {
    function Footer() {
    }
    Footer.prototype.render = function () {
        return h(0, 0);
    };
    return Footer;
}());

var Header = /** @class */ (function () {
    function Header() {
    }
    Header.prototype.render = function () {
        return h(0, 0);
    };
    return Header;
}());

var Navbar = /** @class */ (function () {
    function Navbar() {
        this.hideBackButton = false;
        this.hidden = false;
    }
    Navbar.prototype.backButtonClick = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        console.log('back button click');
    };
    Navbar.prototype["componentDidLoad"] = function () {
        var buttons = this.el.querySelectorAll('ion-button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('button-type', 'bar-button');
        }
    };
    Navbar.prototype.hostData = function () {
        return {
            class: {
                'statusbar-padding': this.config.getBoolean('statusbarPadding')
            }
        };
    };
    Navbar.prototype.render = function () {
        var backButtonIcon = this.backButtonIcon || this.config.get('backButtonText', 'Back');
        var backButtonText = this.backButtonText || this.config.get('backButtonIcon', 'Back');
        var backgroundCss = createThemedClasses(this.mode, this.color, 'toolbar-background');
        var contentCss = createThemedClasses(this.mode, this.color, 'toolbar-content');
        var backButtonCss = createThemedClasses(this.mode, this.color, 'back-button');
        var backButtonIconCss = createThemedClasses(this.mode, this.color, 'back-button-icon');
        var backButtonTextCss = createThemedClasses(this.mode, this.color, 'back-button-text');
        return [
            h("div", { "c": backgroundCss }),
            h("button", { "c": backButtonCss, "o": { "click": this.backButtonClick.bind(this) }, "a": { "hidden": this.hideBackButton } }, t("if (backButtonIcon) "),
                h("ion-icon", { "c": backButtonIconCss, "p": { "name": backButtonIcon } }),
                h("span", { "c": backButtonTextCss }, backButtonText)),
            h(0, { "a": { "name": 'start' } }),
            h(0, { "a": { "name": 'mode-start' } }),
            h(0, { "a": { "name": 'mode-end' } }),
            h(0, { "a": { "name": 'end' } }),
            h("div", { "c": contentCss },
                h(0, 0))
        ];
    };
    return Navbar;
}());

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
function componentWillLoadImpl(overlayPortal) {
    overlayPortal.registerPortal.emit(overlayPortal);
}

var Page = /** @class */ (function () {
    function Page() {
    }
    Page.prototype.render = function () {
        return h(0, 0);
    };
    return Page;
}());

var ToolbarTitle = /** @class */ (function () {
    function ToolbarTitle() {
    }
    ToolbarTitle.prototype.render = function () {
        var themedClasses = createThemedClasses(this.mode, this.color, 'toolbar-title');
        return [
            h("div", { "c": themedClasses },
                h(0, 0))
        ];
    };
    return ToolbarTitle;
}());

var Toolbar = /** @class */ (function () {
    function Toolbar() {
    }
    Toolbar.prototype["componentDidLoad"] = function () {
        var buttons = this.el.querySelectorAll('ion-button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('button-type', 'bar-button');
        }
    };
    Toolbar.prototype.hostData = function () {
        return {
            class: {
                'statusbar-padding': this.config.getBoolean('statusbarPadding')
            }
        };
    };
    Toolbar.prototype.render = function () {
        var backgroundCss = createThemedClasses(this.mode, this.color, 'toolbar-background');
        var contentCss = createThemedClasses(this.mode, this.color, 'toolbar-content');
        return [
            h("div", { "c": backgroundCss }),
            h(0, { "a": { "name": 'start' } }),
            h(0, { "a": { "name": 'mode-start' } }),
            h(0, { "a": { "name": 'mode-end' } }),
            h(0, { "a": { "name": 'end' } }),
            h("div", { "c": contentCss },
                h(0, 0))
        ];
    };
    return Toolbar;
}());

exports['ION-APP'] = IonApp;
exports['ION-CONTENT'] = Content;
exports['ION-FIXED'] = Fixed;
exports['ION-FOOTER'] = Footer;
exports['ION-HEADER'] = Header;
exports['ION-NAVBAR'] = Navbar;
exports['ION-OVERLAY-PORTAL'] = IonOverlayPortal;
exports['ION-PAGE'] = Page;
exports['ION-TITLE'] = ToolbarTitle;
exports['ION-TOOLBAR'] = Toolbar;
},


/***************** ion-app *****************/
[
/** ion-app: tag **/
"ION-APP",

/** ion-app: members **/
[
  [ "config", /** prop context **/ 3, /** type any **/ 0, /** context ***/ "config" ],
  [ "element", /** element ref **/ 7 ]
],

/** ion-app: host **/
{"theme":"app"}

],

/***************** ion-content *****************/
[
/** ion-content: tag **/
"ION-CONTENT",

/** ion-content: members **/
[
  [ "config", /** prop context **/ 3, /** type any **/ 0, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7 ],
  [ "fullscreen", /** prop **/ 1, /** type boolean **/ 1 ],
  [ "ionScroll", /** prop **/ 1 ],
  [ "ionScrollEnd", /** prop **/ 1 ],
  [ "ionScrollStart", /** prop **/ 1 ]
],

/** ion-content: host **/
{}

],

/***************** ion-fixed *****************/
[
/** ion-fixed: tag **/
"ION-FIXED",

/** ion-fixed: members **/
[
  [ "config", /** prop context **/ 3, /** type any **/ 0, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7 ]
],

/** ion-fixed: host **/
{}

],

/***************** ion-footer *****************/
[
/** ion-footer: tag **/
"ION-FOOTER",

/** ion-footer: members **/
0 /* no members */,

/** ion-footer: host **/
{"theme":"footer"}

],

/***************** ion-header *****************/
[
/** ion-header: tag **/
"ION-HEADER",

/** ion-header: members **/
0 /* no members */,

/** ion-header: host **/
{"theme":"header"}

],

/***************** ion-navbar *****************/
[
/** ion-navbar: tag **/
"ION-NAVBAR",

/** ion-navbar: members **/
[
  [ "backButtonIcon", /** prop **/ 1 ],
  [ "backButtonText", /** prop **/ 1 ],
  [ "config", /** prop context **/ 3, /** type any **/ 0, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7 ],
  [ "hidden", /** prop **/ 1, /** type boolean **/ 1 ],
  [ "hideBackButton", /** prop **/ 1, /** type boolean **/ 1 ]
],

/** ion-navbar: host **/
{"theme":"toolbar"}

],

/***************** ion-overlay-portal *****************/
[
/** ion-overlay-portal: tag **/
"ION-OVERLAY-PORTAL",

/** ion-overlay-portal: members **/
[
  [ "element", /** element ref **/ 7 ],
  [ "type", /** prop **/ 1 ]
],

/** ion-overlay-portal: host **/
{},

/** ion-overlay-portal: events **/
[
  [
    /*****  ion-overlay-portal registerPortal ***** /
    /* event name ***/ "registerPortal"
  ]
]

],

/***************** ion-page *****************/
[
/** ion-page: tag **/
"ION-PAGE",

/** ion-page: members **/
0 /* no members */,

/** ion-page: host **/
{"theme":"page"}

],

/***************** ion-title *****************/
[
/** ion-title: tag **/
"ION-TITLE",

/** ion-title: members **/
0 /* no members */,

/** ion-title: host **/
{"theme":"title"}

],

/***************** ion-toolbar *****************/
[
/** ion-toolbar: tag **/
"ION-TOOLBAR",

/** ion-toolbar: members **/
[
  [ "config", /** prop context **/ 3, /** type any **/ 0, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7 ]
],

/** ion-toolbar: host **/
{"theme":"toolbar"}

]
)