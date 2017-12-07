import { EventEmitter } from '@stencil/core';
import { DatetimeData, LocaleData } from './datetime-util';
import { PickerColumn, PickerController, PickerOptions } from '../../index';
export declare class Datetime {
    [key: string]: any;
    private datetimeId;
    private labelId;
    private picker;
    locale: LocaleData;
    datetimeMin: DatetimeData;
    datetimeMax: DatetimeData;
    datetimeValue: DatetimeData;
    text: any;
    pickerCtrl: PickerController;
    /**
     * @input {boolean} If true, the user cannot interact with the datetime. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * @input {string} The minimum datetime allowed. Value must be a date string
     * following the
     * [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),
     * such as `1996-12-19`. The format does not have to be specific to an exact
     * datetime. For example, the minimum could just be the year, such as `1994`.
     * Defaults to the beginning of the year, 100 years ago from today.
     */
    min: string;
    /**
     * @input {string} The maximum datetime allowed. Value must be a date string
     * following the
     * [ISO 8601 datetime format standard](https://www.w3.org/TR/NOTE-datetime),
     * `1996-12-19`. The format does not have to be specific to an exact
     * datetime. For example, the maximum could just be the year, such as `1994`.
     * Defaults to the end of this year.
     */
    max: string;
    /**
     * @input {string} The display format of the date and time as text that shows
     * within the item. When the `pickerFormat` input is not used, then the
     * `displayFormat` is used for both display the formatted text, and determining
     * the datetime picker's columns. See the `pickerFormat` input description for
     * more info. Defaults to `MMM D, YYYY`.
     */
    displayFormat: string;
    /**
     * @input {string} The format of the date and time picker columns the user selects.
     * A datetime input can have one or many datetime parts, each getting their
     * own column which allow individual selection of that particular datetime part. For
     * example, year and month columns are two individually selectable columns which help
     * choose an exact date from the datetime picker. Each column follows the string
     * parse format. Defaults to use `displayFormat`.
     */
    pickerFormat: string;
    /**
     * @input {string} The text to display on the picker's cancel button. Default: `Cancel`.
     */
    cancelText: string;
    /**
     * @input {string} The text to display on the picker's "Done" button. Default: `Done`.
     */
    doneText: string;
    /**
     * @input {array | string} Values used to create the list of selectable years. By default
     * the year values range between the `min` and `max` datetime inputs. However, to
     * control exactly which years to display, the `yearValues` input can take either an array
     * of numbers, or string of comma separated numbers. For example, to show upcoming and
     * recent leap years, then this input's value would be `yearValues="2024,2020,2016,2012,2008"`.
     */
    yearValues: any;
    /**
     * @input {array | string} Values used to create the list of selectable months. By default
     * the month values range from `1` to `12`. However, to control exactly which months to
     * display, the `monthValues` input can take either an array of numbers, or string of
     * comma separated numbers. For example, if only summer months should be shown, then this
     * input value would be `monthValues="6,7,8"`. Note that month numbers do *not* have a
     * zero-based index, meaning January's value is `1`, and December's is `12`.
     */
    monthValues: any;
    /**
     * @input {array | string} Values used to create the list of selectable days. By default
     * every day is shown for the given month. However, to control exactly which days of
     * the month to display, the `dayValues` input can take either an array of numbers, or
     * string of comma separated numbers. Note that even if the array days have an invalid
     * number for the selected month, like `31` in February, it will correctly not show
     * days which are not valid for the selected month.
     */
    dayValues: any;
    /**
     * @input {array | string} Values used to create the list of selectable hours. By default
     * the hour values range from `0` to `23` for 24-hour, or `1` to `12` for 12-hour. However,
     * to control exactly which hours to display, the `hourValues` input can take either an
     * array of numbers, or string of comma separated numbers.
     */
    hourValues: any;
    /**
     * @input {array | string} Values used to create the list of selectable minutes. By default
     * the mintues range from `0` to `59`. However, to control exactly which minutes to display,
     * the `minuteValues` input can take either an array of numbers, or string of comma separated
     * numbers. For example, if the minute selections should only be every 15 minutes, then
     * this input value would be `minuteValues="0,15,30,45"`.
     */
    minuteValues: any;
    /**
     * @input {array} Full names for each month name. This can be used to provide
     * locale month names. Defaults to English.
     */
    monthNames: any;
    /**
     * @input {array} Short abbreviated names for each month name. This can be used to provide
     * locale month names. Defaults to English.
     */
    monthShortNames: any;
    /**
     * @input {array} Full day of the week names. This can be used to provide
     * locale names for each day in the week. Defaults to English.
     */
    dayNames: any;
    /**
     * @input {array} Short abbreviated day of the week names. This can be used to provide
     * locale names for each day in the week. Defaults to English.
     */
    dayShortNames: any;
    /**
     * @input {PickerOptions} Any additional options that the picker interface can accept.
     * See the [Picker API docs](../../picker/Picker) for the picker options.
     */
    pickerOptions: PickerOptions;
    /**
     * @input {string} The text to display when there's no date selected yet.
     * Using lowercase to match the input attribute
     */
    placeholder: string;
    /**
     * @input {string} the value of the datetime.
     */
    value: string;
    /**
     * @hidden
     * Update the datetime value when the value changes
     */
    protected valueChanged(): void;
    /**
     * @output {Event} Emitted when the datetime selection was cancelled.
     */
    ionCancel: EventEmitter;
    componentWillLoad(): void;
    /**
     * @hidden
     * Update the datetime text and datetime value
     */
    updateValue(): void;
    buildPicker(pickerOptions: PickerOptions): Promise<HTMLIonPickerElement>;
    open(): void;
    /**
     * @hidden
     */
    generateColumns(): PickerColumn[];
    /**
     * @private
     */
    validate(): void;
    /**
     * @hidden
     */
    calcMinMax(now?: Date): void;
    /**
     * @hidden
     */
    validateColumn(name: string, index: number, min: number, max: number, lowerBounds: number[], upperBounds: number[]): number;
    /**
     * @hidden
     */
    divyColumns(columns: PickerColumn[]): PickerColumn[];
    /**
     * @hidden
     */
    updateText(): void;
    /**
     * @hidden
     */
    hasValue(): boolean;
    hostData(): {
        class: {
            'datetime-disabled': boolean;
        };
    };
    render(): JSX.Element[];
}
