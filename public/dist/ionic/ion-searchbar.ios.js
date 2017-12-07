/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */

Ionic.loadStyles("ion-searchbar_ios","ion-searchbar {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.searchbar-icon {\n  pointer-events: none;\n}\n\n.searchbar-input-container {\n  position: relative;\n  display: block;\n  flex-shrink: 1;\n  width: 100%;\n}\n\n.searchbar-input {\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  display: block;\n  width: 100%;\n  border: 0;\n  font-family: inherit;\n}\n\n.searchbar-clear-icon {\n  margin: 0;\n  padding: 0;\n  display: none;\n  min-height: 0;\n}\n\n.searchbar-has-value.searchbar-has-focus .searchbar-clear-icon {\n  display: block;\n}\n\n.searchbar-ios {\n  padding: 12px;\n  min-height: 44px;\n}\n\n.searchbar-ios .searchbar-search-icon {\n  background-position: center;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='rgba(0,%200,%200,%200.5)'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='rgba(0,%200,%200,%200.5)'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n  margin-left: calc(50% - 60px);\n  left: 9px;\n  top: 0;\n  position: absolute;\n  width: 14px;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: 13px;\n}\n\n.searchbar-ios .searchbar-input {\n  padding: 0 28px;\n  border-radius: 10px;\n  height: 36px;\n  font-size: 1.4rem;\n  font-weight: 400;\n  color: #000;\n  background-color: rgba(15, 22, 64, 0.1);\n}\n\n.searchbar-ios .searchbar-input::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.searchbar-ios .searchbar-input:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.searchbar-ios .searchbar-input::-webkit-input-placeholder {\n  text-indent: 0;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.searchbar-ios ion-button.searchbar-clear-icon {\n  right: 0;\n  top: 0;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='rgba(0,%200,%200,%200.5)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n  background-position: center;\n  position: absolute;\n  width: 30px;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: 18px;\n}\n\n.searchbar-ios .searchbar-ios-cancel {\n  margin-left: 0;\n  display: none;\n  flex-shrink: 0;\n  height: 30px;\n  cursor: pointer;\n}\n\n.searchbar-ios button.searchbar-ios-cancel {\n  padding: 0 0 0 8px;\n  margin: 0;\n}\n\n.searchbar-ios.searchbar-left-aligned .searchbar-search-icon {\n  margin-left: 0;\n}\n\n.searchbar-ios.searchbar-left-aligned .searchbar-input {\n  padding-left: 30px;\n}\n\n.searchbar-ios.searchbar-show-cancel.searchbar-has-focus .searchbar-ios-cancel {\n  display: block;\n}\n\n.toolbar .searchbar-ios .searchbar-ios-cancel {\n  padding: 0;\n}\n\n.toolbar .searchbar-ios.searchbar-has-focus .searchbar-ios-cancel {\n  padding-left: 8px;\n}\n\n.searchbar-ios .searchbar-md-cancel {\n  display: none;\n}\n\n.searchbar-ios-primary .searchbar-ios-cancel {\n  color: #488aff;\n}\n\n.searchbar-ios-primary .searchbar-ios-cancel:hover:not(.disable-hover) {\n  color: #427feb;\n}\n\n.toolbar-ios-primary .searchbar-ios .searchbar-search-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='rgba(255,%20255,%20255,%200.5)'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='rgba(255,%20255,%20255,%200.5)'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n}\n\n.toolbar-ios-primary .searchbar-ios .searchbar-input {\n  color: #fff;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.toolbar-ios-primary .searchbar-ios .searchbar-input::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.toolbar-ios-primary .searchbar-ios .searchbar-input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.toolbar-ios-primary .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n  text-indent: 0;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.toolbar-ios-primary .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='rgba(255,%20255,%20255,%200.5)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n}\n\n.toolbar-ios-primary .searchbar-ios .searchbar-ios-cancel {\n  color: #fff;\n}\n\n.searchbar-ios-secondary .searchbar-ios-cancel {\n  color: #32db64;\n}\n\n.searchbar-ios-secondary .searchbar-ios-cancel:hover:not(.disable-hover) {\n  color: #2ec95c;\n}\n\n.toolbar-ios-secondary .searchbar-ios .searchbar-search-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='rgba(255,%20255,%20255,%200.5)'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='rgba(255,%20255,%20255,%200.5)'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n}\n\n.toolbar-ios-secondary .searchbar-ios .searchbar-input {\n  color: #fff;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.toolbar-ios-secondary .searchbar-ios .searchbar-input::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.toolbar-ios-secondary .searchbar-ios .searchbar-input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.toolbar-ios-secondary .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n  text-indent: 0;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.toolbar-ios-secondary .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='rgba(255,%20255,%20255,%200.5)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n}\n\n.toolbar-ios-secondary .searchbar-ios .searchbar-ios-cancel {\n  color: #fff;\n}\n\n.searchbar-ios-danger .searchbar-ios-cancel {\n  color: #f53d3d;\n}\n\n.searchbar-ios-danger .searchbar-ios-cancel:hover:not(.disable-hover) {\n  color: #e13838;\n}\n\n.toolbar-ios-danger .searchbar-ios .searchbar-search-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='rgba(255,%20255,%20255,%200.5)'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='rgba(255,%20255,%20255,%200.5)'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n}\n\n.toolbar-ios-danger .searchbar-ios .searchbar-input {\n  color: #fff;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.toolbar-ios-danger .searchbar-ios .searchbar-input::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.toolbar-ios-danger .searchbar-ios .searchbar-input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.toolbar-ios-danger .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n  text-indent: 0;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.toolbar-ios-danger .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='rgba(255,%20255,%20255,%200.5)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n}\n\n.toolbar-ios-danger .searchbar-ios .searchbar-ios-cancel {\n  color: #fff;\n}\n\n.searchbar-ios-light .searchbar-ios-cancel {\n  color: #f4f4f4;\n}\n\n.searchbar-ios-light .searchbar-ios-cancel:hover:not(.disable-hover) {\n  color: #e0e0e0;\n}\n\n.toolbar-ios-light .searchbar-ios .searchbar-search-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='rgba(0,%200,%200,%200.5)'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='rgba(0,%200,%200,%200.5)'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n}\n\n.toolbar-ios-light .searchbar-ios .searchbar-input {\n  color: #000;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.toolbar-ios-light .searchbar-ios .searchbar-input::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.toolbar-ios-light .searchbar-ios .searchbar-input:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.toolbar-ios-light .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n  text-indent: 0;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.toolbar-ios-light .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='rgba(0,%200,%200,%200.5)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n}\n\n.toolbar-ios-light .searchbar-ios .searchbar-ios-cancel {\n  color: #488aff;\n}\n\n.searchbar-ios-dark .searchbar-ios-cancel {\n  color: #222;\n}\n\n.searchbar-ios-dark .searchbar-ios-cancel:hover:not(.disable-hover) {\n  color: #343434;\n}\n\n.toolbar-ios-dark .searchbar-ios .searchbar-search-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2013%2013'><path%20fill='rgba(255,%20255,%20255,%200.5)'%20d='M5,1c2.2,0,4,1.8,4,4S7.2,9,5,9S1,7.2,1,5S2.8,1,5,1%20M5,0C2.2,0,0,2.2,0,5s2.2,5,5,5s5-2.2,5-5S7.8,0,5,0%20L5,0z'/><line%20stroke='rgba(255,%20255,%20255,%200.5)'%20stroke-miterlimit='10'%20x1='12.6'%20y1='12.6'%20x2='8.2'%20y2='8.2'/></svg>\");\n}\n\n.toolbar-ios-dark .searchbar-ios .searchbar-input {\n  color: #fff;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.toolbar-ios-dark .searchbar-ios .searchbar-input::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.toolbar-ios-dark .searchbar-ios .searchbar-input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.toolbar-ios-dark .searchbar-ios .searchbar-input::-webkit-input-placeholder {\n  text-indent: 0;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.toolbar-ios-dark .searchbar-ios .searchbar-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='rgba(255,%20255,%20255,%200.5)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n}\n\n.toolbar-ios-dark .searchbar-ios .searchbar-ios-cancel {\n  color: #fff;\n}\n\n.searchbar-ios.searchbar-animated.searchbar-show-cancel .searchbar-ios-cancel {\n  display: block;\n}\n\n.searchbar-ios.searchbar-animated .searchbar-search-icon,\n.searchbar-ios.searchbar-animated .searchbar-input {\n  transition: all 300ms ease;\n}\n\n.searchbar-animated.searchbar-has-focus .searchbar-ios-cancel {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.searchbar-animated .searchbar-ios-cancel {\n  margin-right: -100%;\n  transform: translate3d(0,  0,  0);\n  opacity: 0;\n  transition: all 300ms ease;\n  pointer-events: none;\n}\nion-searchbar.hydrated{visibility:inherit}");
Ionic.loadComponents(

/**** module id (dev mode) ****/
"ion-searchbar.ios",

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