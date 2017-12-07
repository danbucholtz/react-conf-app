import { getParentElement } from '../../utils/helpers';
export class TabHighlight {
    constructor() {
        this.animated = false;
        this.transform = '';
    }
    selectedTabChanged() {
        this.updateTransform();
    }
    onResize() {
        this.updateTransform();
    }
    componentDidLoad() {
        this.updateTransform();
    }
    updateTransform() {
        Context.dom.read(() => {
            const btn = this.getSelectedButton();
            this.transform = (btn)
                ? `translate3d(${btn.offsetLeft}px,0,0) scaleX(${btn.offsetWidth})`
                : '';
            if (!this.animated) {
                setTimeout(() => this.animated = true, 80);
            }
        });
    }
    getSelectedButton() {
        const parent = getParentElement(this.el);
        if (!parent) {
            return null;
        }
        return Array.from(parent.querySelectorAll('ion-tab-button'))
            .find(btn => btn.selected);
    }
    hostData() {
        return {
            style: {
                'transform': this.transform
            },
            class: {
                'animated': this.animated,
            }
        };
    }
}
