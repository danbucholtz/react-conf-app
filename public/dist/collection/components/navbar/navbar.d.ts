import { Config } from '../../index';
export declare class Navbar {
    private el;
    mode: string;
    color: string;
    config: Config;
    hideBackButton: boolean;
    backButtonText: string;
    backButtonIcon: string;
    hidden: boolean;
    backButtonClick(ev: UIEvent): void;
    componentDidLoad(): void;
    hostData(): {
        class: {
            'statusbar-padding': boolean;
        };
    };
    render(): JSX.Element[];
}
