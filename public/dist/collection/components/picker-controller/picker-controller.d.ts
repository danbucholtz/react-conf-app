import { PickerEvent, PickerOptions } from '../../index';
export declare class PickerController {
    private ids;
    private pickerResolves;
    private pickers;
    create(opts?: PickerOptions): Promise<HTMLIonPickerElement>;
    protected didLoad(ev: PickerEvent): void;
    protected willPresent(ev: PickerEvent): void;
    protected willDismiss(ev: PickerEvent): void;
    protected escapeKeyUp(): void;
}
