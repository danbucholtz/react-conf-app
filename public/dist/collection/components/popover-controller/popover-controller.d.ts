import { PopoverEvent, PopoverOptions } from '../../index';
export declare class PopoverController {
    private ids;
    private popoverResolves;
    private popovers;
    /**
     * Create a popover component instance
     * @param opts Options when creating a new popover instance
     */
    create(opts?: PopoverOptions): Promise<HTMLIonPopoverElement>;
    protected didLoad(ev: PopoverEvent): void;
    protected willPresent(ev: PopoverEvent): void;
    protected willDismiss(ev: PopoverEvent): void;
    protected escapeKeyUp(): void;
}
