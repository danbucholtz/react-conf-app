export class FabList {
    constructor() {
        this.activated = false;
    }
    activatedChanged(activated) {
        const fabs = this.el.querySelectorAll('ion-fab-button');
        // if showing the fabs add a timeout, else show immediately
        var timeout = activated ? 30 : 0;
        for (var i = 0; i < fabs.length; i++) {
            const fab = fabs[i];
            setTimeout(() => fab.show = activated, i * timeout);
        }
    }
    hostData() {
        return {
            class: {
                'fab-list-active': this.activated
            }
        };
    }
    render() {
        return (h("slot", null));
    }
}
