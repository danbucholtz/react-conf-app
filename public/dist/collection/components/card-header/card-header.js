import { createThemedClasses } from '../../utils/theme';
export class CardHeader {
    constructor() {
        /**
         * @input {boolean} If true, adds transparency to the card header.
         * Only affects `ios` mode. Defaults to `false`.
         */
        this.translucent = false;
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'card-header-translucent') : {};
        const hostClasses = Object.assign({}, themedClasses);
        return {
            class: hostClasses
        };
    }
    render() {
        return h("slot", null);
    }
}
