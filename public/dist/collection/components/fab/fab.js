export class Fab {
    constructor() {
        this.activated = false;
        this.toggleActive = () => {
            this.activated = !this.activated;
        };
    }
    /**
     * Close an active FAB list container
     */
    close() {
        this.activated = false;
    }
    render() {
        const fab = this.el.querySelector('ion-fab-button');
        fab.toggleActive = this.toggleActive;
        fab.activated = this.activated;
        const lists = this.el.querySelectorAll('ion-fab-list');
        for (let i = 0, length = lists.length; i < length; i += 1) {
            lists[i].activated = this.activated;
        }
        return (h("slot", null));
    }
}
