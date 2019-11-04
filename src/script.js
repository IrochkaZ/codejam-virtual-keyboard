/* eslint-disable no-unused-vars */
import './main.css';
import kbdkeys from './keys';

const states = {
  backspace: false,
  tab: false,
  capslock: false,
  enter: false,
  shiftLeft: false,
  shiftRight: false,
  ctrlLeft: false,
  ctrlRight: false,
  altLeft: false,
  altRight: false,
  win: false,
  space: false,
  arrowUp: false,
  arrowDown: false,
  arrowleft: false,
  arrowRight: false,
  current: null,
};

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
  createEl('h1', null, wrapper, 'Virtual keyboard');
  const textArea = createEl('textarea', null, wrapper, null);
  const kbdContainer = createEl('div', 'keyboard', wrapper, null);

  kbdkeys.forEach((row) => {
    const sectionRow = createEl('section', 'key-row', kbdContainer, null);
    row.forEach((keyItem) => {
      const keyDiv = createEl('div', `key ${keyItem.className[0]}`, sectionRow, keyItem.name);
      keyDiv.setAttribute('data-event', `${keyItem.eventcode}`);

      keyDiv.addEventListener('mousedown', (event) => {
        event.preventDefault();
        if (keyItem.type === 0 && document.querySelector(`div[data-event=${keyItem.eventcode}]`)) {
          if (states.current !== null) {
            states.current.classList.remove('active');
            states.current = null;
          }
          keyDiv.classList.add('active');
          states.current = keyDiv;
          textArea.innerHTML += keyItem.name;
        }
      });

      keyDiv.addEventListener('mouseup', (event) => {
        event.preventDefault();
        if (keyItem.type === 0 && document.querySelector(`div[data-event=${keyItem.eventcode}]`)) {
          if (states.current !== null) {
            states.current.classList.remove('active');
            states.current = null;
          }
        }
      });
    });
  });

  window.addEventListener('keydown', (event) => {
    event.preventDefault();
    global.console.log(event);
    const someKey = document.querySelector(`div[data-event=${event.code}]`);
    if (someKey) {
      if (states.current !== null) {
        states.current.classList.remove('active');
        states.current = null;
      }
      someKey.classList.add('active');
      states.current = someKey;
      textArea.innerHTML += event.key;
    }
  });

  window.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (states.current !== null) {
      states.current.classList.remove('active');
      states.current = null;
    }
  });
};

init();
