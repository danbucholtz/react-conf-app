import { RouterEntry } from '../router-controller/router-utils';
export declare class Route {
    path: string;
    component: string;
    props: any;
    getRoute(): RouterEntry;
}
