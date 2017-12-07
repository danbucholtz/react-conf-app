import { LoadingEvent, LoadingOptions } from '../../index';
export declare class LoadingController {
    private ids;
    private loadingResolves;
    private loadings;
    /**
     * Create a loading overlay and pass options to it
     */
    create(opts?: LoadingOptions): Promise<HTMLIonLoadingElement>;
    protected didLoad(ev: LoadingEvent): void;
    protected willPresent(ev: LoadingEvent): void;
    protected willDismiss(ev: LoadingEvent): void;
    protected escapeKeyUp(): void;
}
