import { ModalEvent, ModalOptions } from '../../index';
export declare class ModalController {
    private ids;
    private modalResolves;
    private modals;
    create(opts?: ModalOptions): Promise<HTMLIonModalElement>;
    protected modalDidLoad(ev: ModalEvent): void;
    protected modalWillPresent(ev: ModalEvent): void;
    protected modalWillDismiss(ev: ModalEvent): void;
    protected escapeKeyUp(): void;
}
