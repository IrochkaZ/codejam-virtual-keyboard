/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import './main.css';
import kbdkeys from './keys';

// global.console.log(kbdkeys);

const createEl = (tag, cls, addTo, tagvalue) => {
  const el = document.createElement(tag);
  if (cls != null) {
    el.setAttribute('class', cls);
  }
  if (tagvalue != null) {
    el.innerText = tagvalue;
  }

  addTo.append(el);
  return el;
};

const init = () => {
  const body = document.querySelector('body');
  const root = createEl('div', 'root', body, null);
  const wrapper = createEl('div', 'wrapper', root, null);
  const h1 = createEl('h1', null, wrapper, 'Virtual keyboard');
  const textArea = createEl('textarea', null, wrapper, null);
  const kbdContainer = createEl('div', 'keyboard', wrapper, null);

  kbdkeys.forEach((row) => {
    const sectionRow = createEl('section', 'key-row', kbdContainer, null);
    row.forEach((keyItem) => {
      const keyDiv = createEl('div', `key ${keyItem.className[0]}`, sectionRow, keyItem.name);
      keyDiv.addEventListener('click', (event) => {
        if (keyItem.type === 0) {
          textArea.innerHTML += keyItem.name;
        }
      });
    });
  });
};

init();
