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
  position: null,
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
      keyDiv.setAttribute('data-type', `${keyItem.type}`);
    });
  });

  const onDownListener = (event) => {
    event.preventDefault();
    let someKey;
    let setValue;
    if (event.code) {
      someKey = document.querySelector(`div[data-event=${event.code}]`);
      setValue = event.key;
    }

    if (event.target.hasAttribute('data-event')) {
      someKey = event.target;
      setValue = someKey.innerText;
    }

    if (someKey) {
      if (states.current !== null) {
        states.current.classList.remove('active');
        states.current = null;
      }
      someKey.classList.add('active');
      states.current = someKey;
      if (parseInt(someKey.getAttribute('data-type'), 10) <= 1) {
        if (states.position == null) {
          textArea.value += setValue;
          textArea.focus();
        } else {
          textArea.value = `${textArea.value.slice(0, states.position)}${setValue}${textArea.value.slice(states.position, textArea.textLength)}`;
          states.position += 1;
          textArea.setSelectionRange(states.position, states.position);
        }
      }

      if (parseInt(someKey.getAttribute('data-type'), 10) === 2) {
        if (setValue === 'Backspace') {
          if (states.position !== null) {
            textArea.value = `${textArea.value.slice(0, states.position - 1)}${textArea.value.slice(states.position, textArea.textLength)}`;
            states.position -= 1;
            textArea.setSelectionRange(states.position, states.position);
          } else {
            textArea.value = textArea.value.slice(0, -1);
          }
        }

        if (setValue === 'Enter') {
          textArea.value += '\n';
        }

        if (setValue === 'Tab') {
          textArea.value += ' '.repeat(4);
        }

        if (setValue === 'ArrowLeft') {
          if (states.position == null) {
            states.position = textArea.textLength - 1;
          } else {
            states.position -= 1;
          }
          textArea.setSelectionRange(states.position, states.position);
        }

        if (setValue === 'ArrowRight') {
          if (states.position !== null) {
            if (states.position === textArea.textLength) {
              states.position = null;
              textArea.setSelectionRange(textArea.textLength, textArea.textLength);
            } else {
              states.position += 1;
              textArea.setSelectionRange(states.position, states.position);
            }
          }
        }

        if (setValue === 'Delete') {
          if (states.position !== null) {
            textArea.value = `${textArea.value.slice(0, states.position)}${textArea.value.slice(states.position + 1, textArea.textLength)}`;
            textArea.setSelectionRange(states.position, states.position);
          }
        }

        if (setValue === ' ' || setValue === '') { // Space
          textArea.value += ' '.repeat(1);
        }
      }
    }
  };

  const onUpListener = (event) => {
    event.preventDefault();
    if (states.current !== null) {
      states.current.classList.remove('active');
      states.current = null;
    }
  };

  document.addEventListener('mousedown', onDownListener);
  document.addEventListener('mouseup', onUpListener);
  document.addEventListener('keydown', onDownListener);
  document.addEventListener('keyup', onUpListener);
};

init();
