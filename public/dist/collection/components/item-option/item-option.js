export class ItemOption {
    constructor() {
        /**
         * @input {boolean} If true, sets the button into a disabled state.
         */
        this.disabled = false;
    }
    notCaptured() {
        // if (!clickedOptionButton(ev)) {
        //   this.closeOpened();
        // }
    }
    clickedOptionButton(ev) {
        let el = ev.target.closest('ion-item-option');
        return !!el;
    }
    render() {
        const TagType = this.href ? 'a' : 'button';
        return [
            h(TagType, { class: 'item-option-button', onClick: this.clickedOptionButton.bind(this), disabled: this.disabled }),
            h("span", { class: 'button-inner' },
                h("slot", null))
        ];
    }
}
