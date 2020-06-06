import _ from 'lodash';
// // import Print from './print.js';

// function component() {
//   const element = document.createElement('div');
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   // element.onclick = Print.bind(null, 'Hello webpack!');
//   return element;
// }

// document.body.appendChild(component());

let arr = _.chunk([1,2,3,4], 2);

console.log(arr);
