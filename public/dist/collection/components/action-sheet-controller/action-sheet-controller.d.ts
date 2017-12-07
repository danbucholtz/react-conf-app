import { ActionSheetEvent, ActionSheetOptions } from '../../index';
export declare class ActionSheetController {
    private ids;
    private actionSheetResolves;
    private actionSheets;
    /**
     * Open an action-sheet with a title, subTitle, and an array of buttons
     * @param {ActionSheetOptions} opts Action sheet options
     */
    create(opts?: ActionSheetOptions): Promise<HTMLIonActionSheetElement>;
    protected didLoad(ev: ActionSheetEvent): void;
    protected willPresent(ev: ActionSheetEvent): void;
    protected willDismiss(ev: ActionSheetEvent): void;
    protected escapeKeyUp(): void;
}
