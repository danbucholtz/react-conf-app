import { createThemedClasses } from '../../utils/theme';
import { Config } from '../../index';
import { SPINNERS, SpinnerConfig } from './spinner-configs';
export class Spinner {
    constructor() {
        /**
         * @input {boolean} If true, pause the animation.
         */
        this.paused = false;
    }
    getName() {
        let name = this.name || this.config.get('spinner');
        if (!name) {
            // fallback
            if (this.mode === 'md') {
                return 'crescent';
            }
            else {
                return 'lines';
            }
        }
        if (name === 'ios') {
            // deprecation warning, renamed in v4
            console.warn(`spinner "ios" has been renamed to "lines"`);
            name = 'lines';
        }
        else if (name === 'ios-small') {
            // deprecation warning, renamed in v4
            console.warn(`spinner "ios-small" has been renamed to "lines-sm"`);
            name = 'lines-sm';
        }
        return name;
    }
    hostData() {
        const themedClasses = createThemedClasses(this.mode, this.color, `spinner spinner-${this.getName()}`);
        const spinnerClasses = Object.assign({}, themedClasses, { 'spinner-paused': this.paused });
        return {
            class: spinnerClasses
        };
    }
    render() {
        const name = this.getName();
        const spinner = SPINNERS[name] || SPINNERS['lines'];
        const duration = (typeof this.duration === 'number' && this.duration > 10 ? this.duration : spinner.dur);
        const svgs = [];
        let i = 0;
        let l = 0;
        if (spinner.circles) {
            for (i = 0, l = spinner.circles; i < l; i++) {
                svgs.push(buildCircle(spinner, duration, i, l));
            }
        }
        else if (spinner.lines) {
            for (i = 0, l = spinner.lines; i < l; i++) {
                svgs.push(buildLine(spinner, duration, i, l));
            }
        }
        return svgs;
    }
}
function buildCircle(spinner, duration, index, total) {
    const data = spinner.fn(duration, index, total);
    data.style.animationDuration = duration + 'ms';
    return (h("svg", { viewBox: '0 0 64 64', style: data.style },
        h("circle", { transform: 'translate(32,32)', r: data.r })));
}
function buildLine(spinner, duration, index, total) {
    const data = spinner.fn(duration, index, total);
    data.style.animationDuration = duration + 'ms';
    return (h("svg", { viewBox: '0 0 64 64', style: data.style },
        h("line", { transform: 'translate(32,32)', y1: data.y1, y2: data.y2 })));
}
