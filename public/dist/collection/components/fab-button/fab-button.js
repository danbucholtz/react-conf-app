import { CssClassMap } from '@stencil/core';
import { createThemedClasses, getElementClassObject } from '../../utils/theme';
export class FabButton {
    constructor() {
        /**
         * @input {boolean} If true, adds transparency to the fab.
         * Only affects `ios` mode. Defaults to `false`.
         */
        this.translucent = false;
        this.activated = false;
        this.toggleActive = () => { };
        this.show = false;
        this.inContainer = false;
        this.inList = false;
        /**
         * @input {boolean} If true, sets the button into a disabled state.
         */
        this.disabled = false;
    }
    componentDidLoad() {
        const parentNode = this.el.parentNode.nodeName;
        this.inList = (parentNode === 'ION-FAB-LIST');
        this.inContainer = (parentNode === 'ION-FAB');
    }
    clickedFab() {
        if (this.inContainer) {
            this.toggleActive();
        }
    }
    /**
     * @hidden
     * Get the classes for fab buttons in lists
     */
    getFabListClassList() {
        if (!this.inList) {
            return [];
        }
        let listClasses = [
            `fab-button-in-list`,
            `fab-button-${this.mode}-in-list`
        ];
        if (this.translucent) {
            listClasses.push(`fab-button-translucent-${this.mode}-in-list`);
        }
        return listClasses;
    }
    /**
     * @hidden
     * Get the close active class for fab buttons
     */
    getFabActiveClassList() {
        if (!this.activated) {
            return [];
        }
        return [
            `fab-button-close-active`
        ];
    }
    /**
     * @hidden
     * Get the show class for fab buttons
     */
    getFabShowClassList() {
        if (!this.show) {
            return [];
        }
        return [
            `fab-button-show`
        ];
    }
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'fab-button');
        const translucentClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'fab-button-translucent') : {};
        const hostClasses = getElementClassObject(this.el.classList);
        const elementClasses = []
            .concat(this.getFabListClassList(), this.getFabActiveClassList(), this.getFabShowClassList())
            .reduce((prevValue, cssClass) => {
            prevValue[cssClass] = true;
            return prevValue;
        }, {});
        const TagType = this.href ? 'a' : 'button';
        const fabClasses = Object.assign({}, themedClasses, translucentClasses, hostClasses, elementClasses);
        return (h(TagType, { class: fabClasses, onClick: this.clickedFab.bind(this), disabled: this.disabled },
            h("ion-icon", { name: 'close', class: 'fab-button-close-icon' }),
            h("span", { class: 'button-inner' },
                h("slot", null)),
            h("div", { class: 'button-effect' })));
    }
}
