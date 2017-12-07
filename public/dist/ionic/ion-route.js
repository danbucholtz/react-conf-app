/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-route",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
class RouterSegments {
    constructor(segments) {
        this.segments = segments;
    }
    next() {
        if (this.segments.length > 0) {
            return this.segments.shift();
        }
        return '';
    }
}
function writeNavState(root, segments) {
    const node = breadthFirstSearch(root);
    if (!node) {
        return Promise.resolve();
    }
    return node.componentOnReady()
        .then(() => node.getRoutes())
        .then(routes => mustMatchRoute(segments, routes))
        .then(route => node.setRouteId(route.id))
        .then(() => {
        const state = node.getState();
        if (!state) {
            throw new Error('setRouteId failed?');
        }
        writeNavState(state.focusNode, segments);
    });
}
function readNavState(node) {
    const stack = [];
    let pivot;
    let state;
    while (true) {
        pivot = breadthFirstSearch(node);
        if (pivot) {
            state = pivot.getState();
            if (state) {
                node = state.focusNode;
                stack.push(state);
            }
            else {
                break;
            }
        }
        else {
            break;
        }
    }
    return {
        stack: stack,
        pivot: pivot
    };
}
function mustMatchRoute(segments, routes) {
    const r = matchRoute(segments, routes);
    if (!r) {
        throw 'no route found';
    }
    return r;
}
function matchRoute(segments, routes) {
    if (!routes) {
        return null;
    }
    let index = 0;
    routes = routes.map(initRoute);
    let selectedRoute = null;
    let ambiguous = false;
    let segment;
    let l;
    while (true) {
        routes = routes.filter(r => r.segments.length > index);
        if (routes.length === 0) {
            break;
        }
        segment = segments.next();
        routes = routes.filter(r => r.segments[index] === segment);
        l = routes.length;
        if (l === 0) {
            selectedRoute = null;
            ambiguous = false;
        }
        else {
            selectedRoute = routes[0];
            ambiguous = l > 1;
        }
        index++;
    }
    if (ambiguous) {
        throw new Error('ambiguious match');
    }
    return selectedRoute;
}
function generateURL(stack) {
    const segments = [];
    for (let state of stack) {
        segments.push(...parseURL(state.path));
    }
    const path = segments
        .filter(s => s.length > 0)
        .join('/');
    return '/' + path;
}
function initRoute(route) {
    if (route.segments === undefined || route.segments === null) {
        route.segments = parseURL(route.path);
    }
    return route;
}
function parseURL(url) {
    if (url === null || url === undefined) {
        return [''];
    }
    const segments = url.split('/')
        .map(s => s.trim())
        .filter(s => s.length > 0);
    if (segments.length === 0) {
        return [''];
    }
    else {
        return segments;
    }
}
const navs = ['ION-NAV', 'ION-TABS'];
function breadthFirstSearch(root) {
    if (!root) {
        console.error('search root is null');
        return null;
    }
    // we do a Breadth-first search
    // Breadth-first search (BFS) is an algorithm for traversing or searching tree
    // or graph data structures.It starts at the tree root(or some arbitrary node of a graph,
    // sometimes referred to as a 'search key'[1]) and explores the neighbor nodes
    // first, before moving to the next level neighbours.
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        // visit node
        if (navs.indexOf(node.tagName) >= 0) {
            return node;
        }
        // queue children
        const children = node.children;
        for (let i = 0; i < children.length; i++) {
            queue.push(children[i]);
        }
    }
    return null;
}

class Route {
    constructor() {
        this.props = {};
    }
    getRoute() {
        return {
            path: this.path,
            segments: parseURL(this.path),
            id: this.component,
            props: this.props
        };
    }
}

class RouterController {
    constructor() {
        this.busy = false;
        this.enabled = false;
        this.basePrefix = '#';
    }
    componentDidLoad() {
        const enabled = this.enabled = this.config.getBoolean('useRouter', false);
        if (enabled) {
            const base = document.querySelector('head > base');
            if (base) {
                const baseURL = base.getAttribute('href');
                if (baseURL.length > 0) {
                    this.basePrefix = baseURL;
                }
            }
            Context.dom.raf(() => {
                console.debug('[OUT] page load -> write nav state');
                this.writeNavStateRoot();
            });
        }
    }
    onURLHashChanged() {
        if (!this.isBlocked()) {
            console.debug('[OUT] hash changed -> write nav state');
            this.writeNavStateRoot();
        }
    }
    onNavChanged(ev) {
        if (this.isBlocked()) {
            return;
        }
        debugger;
        console.debug('[IN] nav changed -> update URL');
        const { stack, pivot } = this.readNavState();
        if (pivot) {
            // readNavState() found a pivot that is not initialized
            console.debug('[IN] pivot uninitialized -> write partial nav state');
            this.writeNavState(pivot, []);
        }
        const isPop = ev.detail.isPop === true;
        this.setURL(generateURL(stack), isPop);
    }
    setURL(url, isPop) {
        url = this.basePrefix + url;
        const history = window.history;
        if (isPop) {
            history.back();
            history.replaceState(null, null, url);
        }
        else {
            history.pushState(null, null, url);
        }
    }
    isBlocked() {
        return this.busy || !this.enabled;
    }
    writeNavStateRoot() {
        const node = document.querySelector('ion-app');
        return this.writeNavState(node, this.readURL());
    }
    writeNavState(node, url) {
        const segments = new RouterSegments(url);
        this.busy = true; //  prevents reentrance
        return writeNavState(node, segments)
            .catch(err => console.error(err))
            .then(() => this.busy = false);
    }
    readNavState() {
        let root = document.querySelector('ion-app');
        return readNavState(root);
    }
    isHash() {
        return this.basePrefix.length > 0 && this.basePrefix[0] === '#';
    }
    readURL() {
        const url = this.isHash()
            ? window.location.hash.substr(1)
            : window.location.pathname;
        return parseURL(url);
    }
}

exports['ion-route'] = Route;
exports['ion-router-controller'] = RouterController;
},


/***************** ion-route *****************/
[
/** ion-route: tag **/
"ion-route",

/** ion-route: members **/
[
  [ "component", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "getRoute", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "path", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "props", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-route: host **/
{}

],

/***************** ion-router-controller *****************/
[
/** ion-router-controller: tag **/
"ion-router-controller",

/** ion-router-controller: members **/
[
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ]
],

/** ion-router-controller: host **/
{}

]
);