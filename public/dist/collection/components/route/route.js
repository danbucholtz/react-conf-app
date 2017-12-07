import { RouterEntry, parseURL } from '../router-controller/router-utils';
export class Route {
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
