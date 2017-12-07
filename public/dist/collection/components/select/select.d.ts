import { EventEmitter } from '@stencil/core';
import { ActionSheet } from '../action-sheet/action-sheet';
import { Alert } from '../alert/alert';
import { Label } from '../label/label';
import { Popover } from '../popover/popover';
import { SelectOption } from '../select-option/select-option';
import { ActionSheetController } from '../action-sheet-controller/action-sheet-controller';
import { AlertController } from '../alert-controller/alert-controller';
import { PopoverController } from '../popover-controller/popover-controller';
export declare class Select {
    private selectId;
    private labelId;
    texts: any;
    label: Label;
    options: SelectOption[];
    overlay: ActionSheet | Alert | Popover;
    actionSheetCtrl: ActionSheetController;
    alertCtrl: AlertController;
    popoverCtrl: PopoverController;
    private el;
    text: string;
    /**
     * @input {boolean} If true, the user cannot interact with the select. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * @input {string} The text to display on the cancel button. Default: `Cancel`.
     */
    cancelText: string;
    /**
     * @input {string} The text to display on the ok button. Default: `OK`.
     */
    okText: string;
    /**
     * @input {string} The text to display when the select is empty.
     */
    placeholder: string;
    /**
     * @input {any} Any additional options that the `alert`, `action-sheet` or `popover` interface
     * can take. See the [AlertController API docs](../../alert/AlertController/#create), the
     * [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
     * [PopoverController API docs](../../popover/PopoverController/#create) for the
     * create options for each interface.
     */
    selectOptions: any;
    /**
     * @input {string} The interface the select should use: `action-sheet`, `popover` or `alert`. Default: `alert`.
     */
    interface: string;
    /**
     * @input {string} The text to display instead of the selected option's value.
     */
    selectedText: string;
    /**
     * @input {boolean} If true, the select can accept multiple values.
     */
    multiple: boolean;
    /**
     * @input {string} the value of the select.
     */
    value: string | string[];
    protected valueChanged(): void;
    /**
     * @output {Event} Emitted when the selection is cancelled.
     */
    ionCancel: EventEmitter;
    componentDidLoad(): void;
    setOptions(): void;
    /**
     * @hidden
     * Update the select options when the value changes
     */
    optionUpdated(): void;
    /**
     * @hidden
     */
    getValues(): any[];
    /**
     * Close the select interface.
     */
    close(): Promise<any> | void;
    /**
     * @hidden
     */
    getText(): any;
    /**
     * @hidden
     */
    resetInterface(ev: Event): string;
    buildAlert(selectOptions: any): Promise<HTMLIonAlertElement>;
    buildActionSheet(selectOptions: any): Promise<HTMLIonActionSheetElement>;
    buildPopover(selectOptions: any): Promise<HTMLIonPopoverElement>;
    open(ev: UIEvent): void;
    hostData(): {
        class: {
            'select-disabled': boolean;
        };
    };
    render(): JSX.Element[];
}
