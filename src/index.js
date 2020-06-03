import { cube } from './math.js';

function component() {
  const element  = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubes is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());