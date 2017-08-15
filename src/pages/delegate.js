

export function attachViewToDom(navController, viewController) {
  console.log('my custom attachViewToDom method');
  return Promise.resolve();
}

export function removeViewFromDom(navController, viewController) {
  console.log('custom removeViewFromDom called');
  return Promise.resolve();
}

export function destroy(viewController) {
  console.log('custom destroy called');
  return Promise.resolve();
}

const Delegate = {
  attachViewToDom: attachViewToDom,
  removeViewFromDom: removeViewFromDom,
  destroy: destroy
};

export { Delegate }