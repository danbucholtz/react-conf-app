import { Config } from '../../index';
export declare class RouterController {
    private busy;
    private enabled;
    private basePrefix;
    config: Config;
    componentDidLoad(): void;
    protected onURLHashChanged(): void;
    protected onNavChanged(ev: CustomEvent): void;
    private setURL(url, isPop);
    private isBlocked();
    private writeNavStateRoot();
    private writeNavState(node, url);
    private readNavState();
    private isHash();
    private readURL();
}
