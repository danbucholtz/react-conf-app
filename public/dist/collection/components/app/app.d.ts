import { Config, NavContainer } from '../../index';
export declare class App {
    element: HTMLElement;
    modeCode: string;
    hoverCSS: boolean;
    useRouter: boolean;
    config: Config;
    componentWillLoad(): void;
    protected registerRootNav(event: CustomEvent): void;
    getRootNavs(): NavContainer[];
    isScrolling(): boolean;
    getActiveNavs(rootNavId?: number): NavContainer[];
    getNavByIdOrName(nameOrId: number | string): NavContainer;
    hostData(): {
        class: {
            [x: string]: boolean;
            'enable-hover': boolean;
        };
    };
    render(): JSX.Element[];
}
export declare function findTopNavs(nav: NavContainer): NavContainer[];
export declare function getNavByIdOrNameImpl(nav: NavContainer, id: number | string): NavContainer;
export declare function handleBackButtonClick(): Promise<any>;
