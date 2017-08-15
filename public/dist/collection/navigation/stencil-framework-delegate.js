export function attachViewToDom(nav, enteringView) {
    return new Promise(function (resolve) {
        var usersElement = document.createElement(enteringView.component);
        var ionPage = document.createElement('ion-page');
        enteringView.element = ionPage;
        ionPage.appendChild(usersElement);
        ionPage.componentDidLoad = function () {
            resolve();
        };
        nav.element.appendChild(ionPage);
    });
}
export function removeViewFromDom(nav, leavingView) {
    nav.element.removeChild(leavingView.element);
    return Promise.resolve();
}
export function destroy(_viewController) {
    return Promise.resolve();
}
var delegate = {
    attachViewToDom: attachViewToDom,
    removeViewFromDom: removeViewFromDom,
    destroy: destroy
};
export { delegate };
