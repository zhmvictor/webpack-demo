import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}


let element = component();
document.body.appendChild(element);

function update() {
  console.log('111');
}

update();

// 热模块替换
if(module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}


// module.hot.accept(self)
if(module.hot) {
  module.hot.accept(update)
}