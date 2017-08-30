import React from 'react';
import ReactDOM from 'react-dom';

export function attachViewToDom(navController, viewController) {
  const ionPage = document.createElement('ion-page');
  navController.element.appendChild(ionPage);
  const usersElement = React.createElement(viewController.component, viewController.data || {});
  const component = ReactDOM.render(usersElement, ionPage);

  viewController.element = ionPage;
  viewController.reactElement = usersElement;
  viewController.instance = component;

  return Promise.resolve();
}

export function removeViewFromDom(navController, viewController) {
  return Promise.resolve().then(() => {
    ReactDOM.unmountComponentAtNode(viewController.element);
    navController.element.removeChild(viewController.element);
    viewController.instance = null;
    viewController.element = null;
    viewController.reactElement = null;
  });
}

const Delegate = {
  attachViewToDom: attachViewToDom,
  removeViewFromDom: removeViewFromDom,
};

export { Delegate }