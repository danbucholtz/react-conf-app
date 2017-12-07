/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-searchbar_md","ion-searchbar {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.searchbar-icon {\n  pointer-events: none;\n}\n\n.searchbar-input-container {\n  position: relative;\n  display: block;\n  flex-shrink: 1;\n  width: 100%;\n}\n\n.searchbar-input {\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  display: block;\n  width: 100%;\n  border: 0;\n  font-family: inherit;\n}\n\n.searchbar-clear-icon {\n  margin: 0;\n  padding: 0;\n  display: none;\n  min-height: 0;\n}\n\n.searchbar-has-value.searchbar-has-focus .searchbar-clear-icon {\n  display: block;\n}\n\n.searchbar-md {\n  padding: 8px;\n  background: inherit;\n}\n\n.searchbar-md .searchbar-search-icon {\n  left: 16px;\n  top: 11px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='%235b5b5b'%20d='M337.509,305.372h-17.501l-6.571-5.486c20.791-25.232,33.922-57.054,33.922-93.257C347.358,127.632,283.896,64,205.135,64C127.452,64,64,127.632,64,206.629s63.452,142.628,142.225,142.628c35.011,0,67.831-13.167,92.991-34.008l6.561,5.487v17.551L415.18,448L448,415.086L337.509,305.372z%20M206.225,305.372c-54.702,0-98.463-43.887-98.463-98.743c0-54.858,43.761-98.742,98.463-98.742c54.7,0,98.462,43.884,98.462,98.742C304.687,261.485,260.925,305.372,206.225,305.372z'/></svg>\");\n  width: 21px;\n  height: 21px;\n}\n\n.searchbar-md .searchbar-md-cancel {\n  left: 10px;\n  top: 0;\n  margin: 0;\n  display: none;\n  width: 21px;\n  height: 100%;\n}\n\n.searchbar-md .searchbar-search-icon,\n.searchbar-md .searchbar-md-cancel {\n  position: absolute;\n  background-repeat: no-repeat;\n  background-size: 20px;\n}\n\n.searchbar-md .searchbar-search-icon.activated,\n.searchbar-md .searchbar-md-cancel.activated {\n  background-color: transparent;\n}\n\n.searchbar-md .searchbar-input {\n  padding: 6px 55px;\n  border-radius: 2px;\n  background-position: left 8px center;\n  height: auto;\n  font-size: 1.6rem;\n  font-weight: 400;\n  line-height: 3rem;\n  color: #141414;\n  background-color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.searchbar-md .searchbar-input::-moz-placeholder {\n  color: #aeaeae;\n}\n\n.searchbar-md .searchbar-input:-ms-input-placeholder {\n  color: #aeaeae;\n}\n\n.searchbar-md .searchbar-input::-webkit-input-placeholder {\n  text-indent: 0;\n  color: #aeaeae;\n}\n\n.searchbar-md ion-button.searchbar-clear-icon {\n  right: 13px;\n  top: 0;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='%235b5b5b'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");\n  padding: 0;\n  background-position: center;\n  position: absolute;\n  width: 22px;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: 22px;\n}\n\n.searchbar-md ion-button.searchbar-clear-icon.activated {\n  background-color: transparent;\n}\n\n.searchbar-md.searchbar-has-focus.searchbar-show-cancel .searchbar-search-icon {\n  display: none;\n}\n\n.searchbar-md.searchbar-has-focus.searchbar-show-cancel .searchbar-md-cancel {\n  display: inline-flex;\n}\n\n.toolbar .searchbar-md {\n  padding: 3px;\n}\n\n.toolbar .searchbar-md .searchbar-md-cancel {\n  left: 14px;\n}\n\n.searchbar-md .searchbar-ios-cancel {\n  display: none;\n}\nion-searchbar.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-searchbar.md",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

class Searchbar {
    constructor() {
        this._isCancelVisible = false;
        this._shouldBlur = true;
        this._shouldAlignLeft = true;
        this.activated = false;
        this.focused = false;
        /**
         * @input {boolean} If true, enable searchbar animation. Default `false`.
         */
        this.animated = false;
        /**
         * @input {string} Set the input's autocomplete property. Values: `"on"`, `"off"`. Default `"off"`.
         */
        this.autocomplete = 'off';
        /**
         * @input {string} Set the input's autocorrect property. Values: `"on"`, `"off"`. Default `"off"`.
         */
        this.autocorrect = 'off';
        /**
         * @input {string} Set the the cancel button text. Default: `"Cancel"`.
         */
        this.cancelButtonText = 'Cancel';
        /**
         * @input {number} Set the amount of time, in milliseconds, to wait to trigger the `ionInput` event after each keystroke. Default `250`.
         */
        this.debounce = 250;
        /**
         * @input {string} Set the input's placeholder. Default `"Search"`.
         */
        this.placeholder = 'Search';
        /**
         * @input {boolean} If true, show the cancel button. Default `false`.
         */
        this.showCancelButton = false;
        /**
         * @input {boolean} If true, enable spellcheck on the input. Default `false`.
         */
        this.spellcheck = false;
        /**
         * @input {string} Set the type of the input. Values: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, `"url"`. Default `"search"`.
         */
        this.type = 'search';
    }
    componentDidLoad() {
        this.positionElements();
    }
    /**
     * @hidden
     * Clears the input field and triggers the control change.
     */
    clearInput(ev) {
        this.ionClear.emit({ event: ev });
        // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
        // wait for 4 frames
        setTimeout(() => {
            let value = this.value;
            if (value !== undefined && value !== '') {
                this.value = '';
                this.ionInput.emit({ event: ev });
            }
        }, 16 * 4);
        this._shouldBlur = false;
    }
    /**
     * @hidden
     * Clears the input field and tells the input to blur since
     * the clearInput function doesn't want the input to blur
     * then calls the custom cancel function if the user passed one in.
     */
    cancelSearchbar(ev) {
        this.ionCancel.emit({ event: ev });
        this.clearInput(ev);
        this._shouldBlur = true;
        this.activated = false;
    }
    /**
     * @hidden
     * Update the Searchbar input value when the input changes
     */
    inputChanged(ev) {
        this.value = ev.target.value;
        setTimeout(() => {
            this.ionInput.emit(ev);
        }, this.debounce);
    }
    /**
     * @hidden
     */
    inputUpdated() {
        // const inputEle = this.el.querySelector('.searchbar-input') as HTMLInputElement;
        // It is important not to re-assign the value if it is the same, because,
        // otherwise, the caret is moved to the end of the input
        // if (inputEle && inputEle.value !== this.value) {
        //   // inputEle.value = this.value;
        //   this.value = inputEle.value;
        // }
        this.positionElements();
    }
    /**
     * @hidden
     * Sets the Searchbar to not focused and checks if it should align left
     * based on whether there is a value in the searchbar or not.
     */
    inputBlurred() {
        const inputEle = this.el.querySelector('.searchbar-input');
        // _shouldBlur determines if it should blur
        // if we are clearing the input we still want to stay focused in the input
        if (this._shouldBlur === false) {
            inputEle.focus();
            this._shouldBlur = true;
            this.ionBlur.emit({ this: this });
            this.inputUpdated();
            return;
        }
        this.focused = false;
        this.positionElements();
    }
    /**
     * @hidden
     * Sets the Searchbar to focused and active on input focus.
     */
    inputFocused() {
        this.activated = true;
        this.focused = true;
        this.ionFocus.emit({ this: this });
        this.inputUpdated();
        this.positionElements();
    }
    /**
     * @hidden
     * Positions the input search icon, placeholder, and the cancel button
     * based on the input value and if it is focused. (ios only)
     */
    positionElements() {
        const prevAlignLeft = this._shouldAlignLeft;
        const _shouldAlignLeft = (!this.animated || (this.value && this.value.toString().trim() !== '') || this.focused === true);
        this._shouldAlignLeft = _shouldAlignLeft;
        if (this.mode !== 'ios') {
            return;
        }
        if (prevAlignLeft !== _shouldAlignLeft) {
            this.positionPlaceholder();
        }
        if (this.animated) {
            this.positionCancelButton();
        }
    }
    /**
     * @hidden
     * Positions the input placeholder
     */
    positionPlaceholder() {
        const isRTL = document.dir === 'rtl';
        const inputEle = this.el.querySelector('.searchbar-input');
        const iconEle = this.el.querySelector('.searchbar-search-icon');
        if (this._shouldAlignLeft) {
            inputEle.removeAttribute('style');
            iconEle.removeAttribute('style');
        }
        else {
            // Create a dummy span to get the placeholder width
            var tempSpan = document.createElement('span');
            tempSpan.innerHTML = this.placeholder;
            document.body.appendChild(tempSpan);
            // Get the width of the span then remove it
            var textWidth = tempSpan.offsetWidth;
            document.body.removeChild(tempSpan);
            // Calculate the input padding
            var inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';
            // Calculate the icon margin
            var iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';
            // Set the input padding start and icon margin start
            if (isRTL) {
                inputEle.style.paddingRight = inputLeft;
                iconEle.style.marginRight = iconLeft;
            }
            else {
                inputEle.style.paddingLeft = inputLeft;
                iconEle.style.marginLeft = iconLeft;
            }
        }
    }
    /**
     * @hidden
     * Show the iOS Cancel button on focus, hide it offscreen otherwise
     */
    positionCancelButton() {
        const isRTL = document.dir === 'rtl';
        const cancelButton = this.el.querySelector('.searchbar-ios-cancel');
        const shouldShowCancel = this.focused;
        if (shouldShowCancel !== this._isCancelVisible) {
            var cancelStyle = cancelButton.style;
            this._isCancelVisible = shouldShowCancel;
            if (shouldShowCancel) {
                if (isRTL) {
                    cancelStyle.marginLeft = '0';
                }
                else {
                    cancelStyle.marginRight = '0';
                }
            }
            else {
                var offset = cancelButton.offsetWidth;
                if (offset > 0) {
                    if (isRTL) {
                        cancelStyle.marginLeft = -offset + 'px';
                    }
                    else {
                        cancelStyle.marginRight = -offset + 'px';
                    }
                }
            }
        }
    }
    hostData() {
        return {
            class: {
                'searchbar-active': this.activated,
                'searchbar-animated': this.animated,
                'searchbar-has-value': (this.value !== undefined && this.value !== ''),
                'searchbar-show-cancel': this.showCancelButton,
                'searchbar-left-aligned': this._shouldAlignLeft,
                'searchbar-has-focus': this.focused
            }
        };
    }
    // TODO remove the ion-buttons and replace with native buttons to remove
    // the button dependency
    render() {
        return [
            h("div", { class: 'searchbar-input-container' },
                h("ion-button", { onClick: this.cancelSearchbar.bind(this), onMouseDown: this.cancelSearchbar.bind(this), fill: 'clear', color: 'dark', class: 'searchbar-md-cancel' },
                    h("ion-icon", { name: 'md-arrow-back' })),
                h("div", { class: 'searchbar-search-icon' }),
                h("input", { class: 'searchbar-input', onInput: this.inputChanged.bind(this), onBlur: this.inputBlurred.bind(this), onFocus: this.inputFocused.bind(this), placeholder: this.placeholder, type: this.type, value: this.value, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellCheck: this.spellcheck }),
                h("ion-button", { fill: 'clear', class: 'searchbar-clear-icon', onClick: this.clearInput.bind(this), onMouseDown: this.clearInput.bind(this) })),
            h("ion-button", { tabindex: this.activated ? 1 : -1, fill: 'clear', onClick: this.cancelSearchbar.bind(this), onMouseDown: this.cancelSearchbar.bind(this), class: 'searchbar-ios-cancel' }, this.cancelButtonText)
        ];
    }
}

exports['ion-searchbar'] = Searchbar;
},


/***************** ion-searchbar *****************/
[
/** ion-searchbar: tag **/
"ion-searchbar",

/** ion-searchbar: members **/
[
  [ "activated", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "animated", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "autocomplete", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "autocorrect", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "cancelButtonText", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "debounce", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "focused", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "placeholder", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "showCancelButton", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "spellcheck", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "type", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-searchbar: host **/
{"theme":"searchbar"},

/** ion-searchbar: events **/
[
  [
    /*****  ion-searchbar ionInput ***** /
    /* event name ***/ "ionInput"
  ],
  [
    /*****  ion-searchbar ionCancel ***** /
    /* event name ***/ "ionCancel"
  ],
  [
    /*****  ion-searchbar ionClear ***** /
    /* event name ***/ "ionClear"
  ],
  [
    /*****  ion-searchbar ionBlur ***** /
    /* event name ***/ "ionBlur"
  ],
  [
    /*****  ion-searchbar ionFocus ***** /
    /* event name ***/ "ionFocus"
  ]
]

]
);