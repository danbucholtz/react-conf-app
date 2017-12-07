export class Reorder {
    constructor() {
        this.hasContent = null;
    }
    componentDidLoad() {
        this.hasContent = this.el.childElementCount > 0;
    }
    render() {
        // TODO: https://github.com/ionic-team/stencil/issues/171
        if (this.hasContent === true) {
            return h("slot", null);
        }
        else if (this.hasContent === false) {
            return h("ion-icon", { class: 'reorder-icon', name: 'reorder' });
        }
        else {
            return undefined;
        }
    }
}
