import { EventEmitter } from '@stencil/core';
export declare class Searchbar {
    private _isCancelVisible;
    private _shouldBlur;
    private _shouldAlignLeft;
    private el;
    activated: boolean;
    focused: boolean;
    /**
     * @output {Event} Emitted when the Searchbar input has changed, including when it's cleared.
     */
    ionInput: EventEmitter;
    /**
     * @output {Event} Emitted when the cancel button is clicked.
     */
    ionCancel: EventEmitter;
    /**
     * @output {Event} Emitted when the clear input button is clicked.
     */
    ionClear: EventEmitter;
    /**
     * @output {Event} Emitted when the input loses focus.
     */
    ionBlur: EventEmitter;
    /**
     * @output {Event} Emitted when the input has focus.
     */
    ionFocus: EventEmitter;
    /**
     * @input {string} The color to use from your Sass `$colors` map.
     * Default options are: `"primary"`, `"secondary"`, `"danger"`, `"light"`, and `"dark"`.
     * For more information, see [Theming your App](/docs/theming/theming-your-app).
     */
    color: string;
    /**
     * @input {string} The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     * For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
     */
    mode: 'ios' | 'md';
    /**
     * @input {boolean} If true, enable searchbar animation. Default `false`.
     */
    animated: boolean;
    /**
     * @input {string} Set the input's autocomplete property. Values: `"on"`, `"off"`. Default `"off"`.
     */
    autocomplete: string;
    /**
     * @input {string} Set the input's autocorrect property. Values: `"on"`, `"off"`. Default `"off"`.
     */
    autocorrect: string;
    /**
     * @input {string} Set the the cancel button text. Default: `"Cancel"`.
     */
    cancelButtonText: string;
    /**
     * @input {number} Set the amount of time, in milliseconds, to wait to trigger the `ionInput` event after each keystroke. Default `250`.
     */
    debounce: number;
    /**
     * @input {string} Set the input's placeholder. Default `"Search"`.
     */
    placeholder: string;
    /**
     * @input {boolean} If true, show the cancel button. Default `false`.
     */
    showCancelButton: boolean;
    /**
     * @input {boolean} If true, enable spellcheck on the input. Default `false`.
     */
    spellcheck: boolean;
    /**
     * @input {string} Set the type of the input. Values: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, `"url"`. Default `"search"`.
     */
    type: string;
    /**
     * @input {string} the value of the searchbar.
     */
    value: string;
    componentDidLoad(): void;
    /**
     * @hidden
     * Clears the input field and triggers the control change.
     */
    clearInput(ev: UIEvent): void;
    /**
     * @hidden
     * Clears the input field and tells the input to blur since
     * the clearInput function doesn't want the input to blur
     * then calls the custom cancel function if the user passed one in.
     */
    cancelSearchbar(ev: UIEvent): void;
    /**
     * @hidden
     * Update the Searchbar input value when the input changes
     */
    inputChanged(ev: any): void;
    /**
     * @hidden
     */
    inputUpdated(): void;
    /**
     * @hidden
     * Sets the Searchbar to not focused and checks if it should align left
     * based on whether there is a value in the searchbar or not.
     */
    inputBlurred(): void;
    /**
     * @hidden
     * Sets the Searchbar to focused and active on input focus.
     */
    inputFocused(): void;
    /**
     * @hidden
     * Positions the input search icon, placeholder, and the cancel button
     * based on the input value and if it is focused. (ios only)
     */
    positionElements(): void;
    /**
     * @hidden
     * Positions the input placeholder
     */
    positionPlaceholder(): void;
    /**
     * @hidden
     * Show the iOS Cancel button on focus, hide it offscreen otherwise
     */
    positionCancelButton(): void;
    hostData(): {
        class: {
            'searchbar-active': boolean;
            'searchbar-animated': boolean;
            'searchbar-has-value': boolean;
            'searchbar-show-cancel': boolean;
            'searchbar-left-aligned': boolean;
            'searchbar-has-focus': boolean;
        };
    };
    render(): JSX.Element[];
}
