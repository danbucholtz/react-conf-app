export class RouterSegments {
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
export function writeNavState(root, segments) {
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
export function readNavState(node) {
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
export function matchRoute(segments, routes) {
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
export function generateURL(stack) {
    const segments = [];
    for (let state of stack) {
        segments.push(...parseURL(state.path));
    }
    const path = segments
        .filter(s => s.length > 0)
        .join('/');
    return '/' + path;
}
export function initRoute(route) {
    if (route.segments === undefined || route.segments === null) {
        route.segments = parseURL(route.path);
    }
    return route;
}
export function parseURL(url) {
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
export function breadthFirstSearch(root) {
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
