import { AlertEvent, AlertOptions } from '../../index';
export declare class AlertController {
    private ids;
    private alertResolves;
    private alerts;
    /**
     * Open an alert with a title, subTitle, and an array of buttons
     * @param {AlertOptions} opts Action sheet options
     */
    create(opts?: AlertOptions): Promise<HTMLIonAlertElement>;
    protected didLoad(ev: AlertEvent): void;
    protected willPresent(event: AlertEvent): void;
    protected willDismiss(event: AlertEvent): void;
    protected escapeKeyUp(): void;
}
