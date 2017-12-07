import { Config, Nav, NavContainer } from '../../index';
import { isReady } from '../../utils/helpers';
const rootNavs = new Map();
export class App {
    constructor() {
        this.hoverCSS = false;
        this.useRouter = false;
    }
    componentWillLoad() {
        this.modeCode = this.config.get('mode');
        this.useRouter = this.config.getBoolean('useRouter', false);
        this.hoverCSS = this.config.getBoolean('hoverCSS', true);
    }
    registerRootNav(event) {
        rootNavs.set(event.detail.navId, event.detail);
    }
    getRootNavs() {
        const navs = [];
        rootNavs.forEach((rootNav) => {
            navs.push(rootNav);
        });
        return navs;
    }
    isScrolling() {
        // TODO - sync with Manu
        return false;
    }
    getActiveNavs(rootNavId) {
        /*const portal = portals.get(PORTAL_MODAL);
        if (portal && portal.views && portal.views.length) {
          return findTopNavs(portal);
        }
        */
        // TODO - figure out if a modal is open, don't use portal
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
        let activeNavs = [];
        rootNavs.forEach(nav => {
            activeNavs = activeNavs.concat(findTopNavs(nav));
        });
        return activeNavs;
    }
    getNavByIdOrName(nameOrId) {
        const navs = Array.from(rootNavs.values());
        for (const navContainer of navs) {
            const match = getNavByIdOrNameImpl(navContainer, nameOrId);
            if (match) {
                return match;
            }
        }
        return null;
    }
    hostData() {
        return {
            class: {
                [this.modeCode]: true,
                'enable-hover': this.hoverCSS
            }
        };
    }
    render() {
        const dom = [h("slot", null)];
        if (this.useRouter) {
            dom.push(h("ion-router-controller", null));
        }
        return dom;
    }
}
export function findTopNavs(nav) {
    let containers = [];
    const childNavs = nav.getActiveChildNavs();
    if (!childNavs || !childNavs.length) {
        containers.push(nav);
    }
    else {
        childNavs.forEach(childNav => {
            const topNavs = findTopNavs(childNav);
            containers = containers.concat(topNavs);
        });
    }
    return containers;
}
export function getNavByIdOrNameImpl(nav, id) {
    if (nav.id === id || nav.name === id) {
        return nav;
    }
    for (const child of nav.getAllChildNavs()) {
        const tmp = getNavByIdOrNameImpl(child, id);
        if (tmp) {
            return tmp;
        }
    }
    return null;
}
export function handleBackButtonClick() {
    // if there is a menu controller dom element, hydrate it, otherwise move on
    // TODO ensure ion-menu-controller is the name
    const menuControllerElement = document.querySelector('ion-menu-controller'); // TODO - use menu controller types
    const promise = menuControllerElement ? isReady(menuControllerElement) : Promise.resolve();
    return promise.then(() => {
        // TODO check if the menu is open, close it if so
        console.log('todo');
    });
}
