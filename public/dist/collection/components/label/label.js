import { EventEmitter } from '@stencil/core';
export class Label {
    constructor() {
        /**
         * @output {Event} If true, the label will sit alongside an input. Defaults to `false`.
         */
        this.fixed = false;
        /**
         * @output {Event} If true, the label will float above an input when the value is empty or the input is focused. Defaults to `false`.
         */
        this.floating = false;
        /**
         * @output {Event} If true, the label will be stacked above an input. Defaults to `false`.
         */
        this.stacked = false;
    }
    /**
     * @hidden
     */
    getText() {
        return this.el.textContent || '';
    }
    componentDidLoad() {
        this.emitStyle();
    }
    emitStyle() {
        clearTimeout(this.styleTmr);
        let styles = {
            'label-fixed': this.fixed,
            'label-floating': this.floating,
            'label-stacked': this.stacked
        };
        this.styleTmr = setTimeout(() => {
            this.ionStyle.emit(styles);
        });
    }
    render() {
        return h("slot", null);
    }
}
