import { FrameworkDelegate, FrameworkMountingData } from '../../index';
import { isString } from '../../utils/helpers';
export class DomFrameworkDelegate {
    attachViewToDom(parentElement, tagOrElement, propsOrDataObj = {}, classesToAdd = []) {
        return new Promise((resolve) => {
            const usersElement = (isString(tagOrElement) ? document.createElement(tagOrElement) : tagOrElement);
            Object.assign(usersElement, propsOrDataObj);
            if (classesToAdd.length) {
                for (const clazz of classesToAdd) {
                    usersElement.classList.add(clazz);
                }
            }
            parentElement.appendChild(usersElement);
            resolve({
                element: usersElement
            });
        });
    }
    removeViewFromDom(parentElement, childElement) {
        parentElement.removeChild(childElement);
        return Promise.resolve({
            element: null
        });
    }
}
