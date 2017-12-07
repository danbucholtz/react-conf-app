import { createThemedClasses } from '../../utils/theme';
export class Tabbar {
    constructor() {
        this.hidden = false;
        this.placement = 'bottom';
        this.layout = 'icon-top';
        this.highlight = false;
        this.translucent = false;
    }
    onKeyboardWillHide() {
        setTimeout(() => this.hidden = false, 50);
    }
    onKeyboardWillShow() {
        if (this.placement === 'bottom') {
            this.hidden = true;
        }
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'tabbar-translucent') : {};
        const layoutClass = `layout-${this.layout}`;
        const placementClass = `placement-${this.placement}`;
        const hostClasses = Object.assign({}, themedClasses, { 'tabbar-hidden': this.hidden, [layoutClass]: true, [placementClass]: true });
        return {
            role: 'tablist',
            class: hostClasses
        };
    }
    render() {
        const selectedTab = this.selectedTab;
        const dom = this.tabs.map(tab => (h("ion-tab-button", { tab: tab, selected: selectedTab === tab })));
        if (this.highlight) {
            dom.push(h("ion-tab-highlight", { selectedTab: selectedTab }));
        }
        return dom;
    }
}
