async function getComponent() {
  const element = docuemnt.createElement('div');
  const { default: _ } = await import(/* webpackChunkName: 'lodash' */ 'lodash');
  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
