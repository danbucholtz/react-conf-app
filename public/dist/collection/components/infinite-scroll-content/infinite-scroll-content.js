import { Config } from '../../index';
export class InfiniteScrollContent {
    componentDidLoad() {
        if (!this.loadingSpinner) {
            this.loadingSpinner = this.config.get('infiniteLoadingSpinner', this.config.get('spinner', 'lines'));
        }
    }
    render() {
        return (h("div", { class: 'infinite-loading' },
            this.loadingSpinner &&
                h("div", { class: 'infinite-loading-spinner' },
                    h("ion-spinner", { name: this.loadingSpinner })),
            this.loadingText &&
                h("div", { class: 'infinite-loading-text', innerHTML: this.loadingText })));
    }
}
