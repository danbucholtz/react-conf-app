import { EventEmitter } from '@stencil/core';
export class TabButton {
    constructor() {
        this.selected = false;
    }
    onClick(ev) {
        this.ionTabbarClick.emit(this.tab);
        ev.stopPropagation();
    }
    hostData() {
        const selected = this.selected;
        const tab = this.tab;
        const hasTitle = !!tab.title;
        const hasIcon = !!tab.icon;
        const hasTitleOnly = (hasTitle && !hasIcon);
        const hasIconOnly = (hasIcon && !hasTitle);
        const hasBadge = !!tab.badge;
        return {
            'role': 'tab',
            'id': tab.btnId,
            'aria-selected': selected,
            class: {
                'tab-selected': selected,
                'has-title': hasTitle,
                'has-icon': hasIcon,
                'has-title-only': hasTitleOnly,
                'has-icon-only': hasIconOnly,
                'has-badge': hasBadge,
                'tab-disabled': !tab.enabled,
                'tab-hidden': tab.hidden,
            }
        };
    }
    render() {
        const items = [];
        const tab = this.tab;
        if (tab.icon) {
            items.push(h("ion-icon", { class: 'tab-button-icon', name: tab.icon }));
        }
        if (tab.title) {
            items.push(h("span", { class: 'tab-button-text' }, tab.title));
        }
        if (tab.badge) {
            items.push(h("ion-badge", { class: 'tab-badge', color: tab.badgeStyle }, tab.badge));
        }
        items.push(h("div", { class: 'button-effect' }));
        return items;
    }
}
