import { Animation, DomController, StencilElement } from '../index';
export function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
}
export function isDef(v) { return v !== undefined && v !== null; }
export function isUndef(v) { return v === undefined || v === null; }
export function isArray(v) { return Array.isArray(v); }
export function isObject(v) { return v !== null && typeof v === 'object'; }
export function isBoolean(v) { return typeof v === 'boolean'; }
export function isString(v) { return typeof v === 'string'; }
export function isNumber(v) { return typeof v === 'number'; }
export function isFunction(v) { return typeof v === 'function'; }
export function isStringOrNumber(v) { return isString(v) || isNumber(v); }
export function isBlank(val) { return val === undefined || val === null; }
/** @hidden */
export function isCheckedProperty(a, b) {
    if (a === undefined || a === null || a === '') {
        return (b === undefined || b === null || b === '');
    }
    else if (a === true || a === 'true') {
        return (b === true || b === 'true');
    }
    else if (a === false || a === 'false') {
        return (b === false || b === 'false');
    }
    else if (a === 0 || a === '0') {
        return (b === 0 || b === '0');
    }
    // not using strict comparison on purpose
    return (a == b); // tslint:disable-line
}
export function assert(bool, msg) {
    if (!bool) {
        console.error(msg);
    }
}
export function toDashCase(str) {
    return str.replace(/([A-Z])/g, (g) => '-' + g[0].toLowerCase());
}
export function noop() { }
export function pointerCoordX(ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            return changedTouches[0].clientX;
        }
        if (ev.pageX !== undefined) {
            return ev.pageX;
        }
    }
    return 0;
}
export function updateDetail(ev, detail) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    let x = 0;
    let y = 0;
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            x = touch.clientX;
            y = touch.clientY;
        }
        else if (ev.pageX !== undefined) {
            x = ev.pageX;
            y = ev.pageY;
        }
    }
    detail.currentX = x;
    detail.currentY = y;
}
export function pointerCoordY(ev) {
    // get Y coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            return changedTouches[0].clientY;
        }
        if (ev.pageY !== undefined) {
            return ev.pageY;
        }
    }
    return 0;
}
export function getElementReference(elm, ref) {
    if (ref === 'child') {
        return elm.firstElementChild;
    }
    if (ref === 'parent') {
        return getParentElement(elm) || elm;
    }
    if (ref === 'body') {
        return elm.ownerDocument.body;
    }
    if (ref === 'document') {
        return elm.ownerDocument;
    }
    if (ref === 'window') {
        return elm.ownerDocument.defaultView;
    }
    return elm;
}
export function getParentElement(elm) {
    if (elm.parentElement) {
        // normal element with a parent element
        return elm.parentElement;
    }
    if (elm.parentNode && elm.parentNode.host) {
        // shadow dom's document fragment
        return elm.parentNode.host;
    }
    return null;
}
export function getPageElement(el) {
    const tabs = el.closest('ion-tabs');
    if (tabs) {
        return tabs;
    }
    const page = el.closest('ion-page,.ion-page,page-inner');
    if (page) {
        return page;
    }
    return getParentElement(el);
}
export function applyStyles(elm, styles) {
    const styleProps = Object.keys(styles);
    if (elm) {
        for (var i = 0; i < styleProps.length; i++) {
            elm.style[styleProps[i]] = styles[styleProps[i]];
        }
    }
}
export function checkEdgeSide(posX, isRightSide, maxEdgeStart) {
    if (isRightSide) {
        return posX >= window.innerWidth - maxEdgeStart;
    }
    else {
        return posX <= maxEdgeStart;
    }
}
/**
 * @hidden
 * Given a side, return if it should be on the right
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 * @param defaultRight whether the default side is right
 */
export function isRightSide(side, defaultRight = false) {
    const isRTL = document.dir === 'rtl';
    switch (side) {
        case 'right': return true;
        case 'left': return false;
        case 'end': return !isRTL;
        case 'start': return isRTL;
        default: return defaultRight ? !isRTL : isRTL;
    }
}
/** @hidden */
export function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
    // The logic required to know when the sliding item should close (openAmount=0)
    // depends on three booleans (isCloseDirection, isMovingFast, isOnCloseZone)
    // and it ended up being too complicated to be written manually without errors
    // so the truth table is attached below: (0=false, 1=true)
    // isCloseDirection | isMovingFast | isOnCloseZone || shouldClose
    //         0        |       0      |       0       ||    0
    //         0        |       0      |       1       ||    1
    //         0        |       1      |       0       ||    0
    //         0        |       1      |       1       ||    0
    //         1        |       0      |       0       ||    0
    //         1        |       0      |       1       ||    1
    //         1        |       1      |       0       ||    1
    //         1        |       1      |       1       ||    1
    // The resulting expression was generated by resolving the K-map (Karnaugh map):
    return (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
}
export function isReady(element) {
    return element.componentOnReady();
}
export function getOrAppendElement(tagName) {
    const element = document.querySelector(tagName);
    if (element) {
        return element;
    }
    const tmp = document.createElement(tagName);
    document.body.appendChild(tmp);
    return tmp;
}
/** @hidden */
export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
export function getWindow() {
    return window;
}
export function getDocument() {
    return document;
}
export function getActiveElement() {
    return getDocument()['activeElement'];
}
export function focusOutActiveElement() {
    const activeElement = getActiveElement();
    activeElement && activeElement.blur && activeElement.blur();
}
export function isTextInput(el) {
    return !!el &&
        (el.tagName === 'TEXTAREA'
            || el.contentEditable === 'true'
            || (el.tagName === 'INPUT' && !(NON_TEXT_INPUT_REGEX.test(el.type))));
}
export const NON_TEXT_INPUT_REGEX = /^(radio|checkbox|range|file|submit|reset|color|image|button)$/i;
export function hasFocusedTextInput() {
    const activeElement = getActiveElement();
    if (isTextInput(activeElement)) {
        return activeElement.parentElement.querySelector(':focus') === activeElement;
    }
    return false;
}
/**
 * @private
 */
export function reorderArray(array, indexes) {
    const element = array[indexes.from];
    array.splice(indexes.from, 1);
    array.splice(indexes.to, 0, element);
    return array;
}
export function playAnimationAsync(animation) {
    return new Promise((resolve) => {
        animation.onFinish((ani) => {
            resolve(ani);
        });
        animation.play();
    });
}
export function domControllerAsync(domControllerFunction, callback) {
    return new Promise((resolve) => {
        domControllerFunction(() => {
            callback();
            resolve();
        });
    });
}
