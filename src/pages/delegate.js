import React from 'react';
import ReactDOM from 'react-dom';

export function attachViewToDom(navController, viewController) {
  // add the view
  const page = document.createElement('ion-page');
  navController.element.appendChild(page);

  const element = React.createElement(viewController.component, viewController.data || {});
  const component = ReactDOM.render(element, page);
  viewController.element = page;
  viewController.reactElement = element;
  viewController.instance = component;

  return Promise.resolve();
}

export function removeViewFromDom(navController, viewController) {
  return Promise.resolve().then(() => {
    return ReactDOM.unmountComponentAtNode(viewController.element);
  });
}

export function destroy(viewController) {
  viewController.instance = null;
  viewController.element = null;
  viewController.reactElement = null;
  return Promise.resolve();
}

const Delegate = {
  attachViewToDom: attachViewToDom,
  removeViewFromDom: removeViewFromDom,
  destroy: destroy
};

export { Delegate }