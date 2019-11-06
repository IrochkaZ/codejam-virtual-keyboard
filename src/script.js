/* eslint-disable no-unused-vars */
import './main.css';
import kbdkeys from './keys';

const states = {
  backspace: false,
  tab: false,
  capslock: false,
  enter: false,
  ShiftLeft: false,
  ShiftRight: false,
  ControlLeft: false,
  ControlRight: false,
  AltLeft: false,
  AltRight: false,
  Win: false,
  space: false,
  arrowUp: false,
  arrowDown: false,
  arrowleft: false,
  arrowRight: false,
  current: null,
  position: null,
  language: 'en',
  langUpdate: false,
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

const shiftState = () => {
  const elems = document.querySelectorAll('div[data-type="0"]');
  Object.values(elems).forEach((elem) => {
    elem.classList.toggle('upperCase');
  });

  if (states.language === 'en') {
    if ((states.ShiftLeft === true || states.ShiftRight === true)) {
      kbdkeys.forEach((row) => {
        row.forEach((item) => {
          if (item.type === 1 && item.secondValue !== null) {
            const secenval = item.secondValue[0];
            document.querySelector(`div[data-event="${item.eventcode}"]`).innerText = secenval;
          }
        });
      });
    } else {
      kbdkeys.forEach((row) => {
        row.forEach((item) => {
          if (item.type === 1 && item.primaryValue !== null) {
            const secenval = item.primaryValue[0];
            document.querySelector(`div[data-event="${item.eventcode}"]`).innerText = secenval;
          }
        });
      });
    }
  }

  if (states.language === 'ru') {
    if ((states.ShiftLeft === true || states.ShiftRight === true)) {
      kbdkeys.forEach((row) => {
        row.forEach((item) => {
          if (item.type === 1 && item.secondValue !== null) {
            const secruval = item.secondValue[1];
            document.querySelector(`div[data-event="${item.eventcode}"]`).innerText = secruval;
          }
        });
      });
    } else {
      kbdkeys.forEach((row) => {
        row.forEach((item) => {
          if (item.type === 1 && item.primaryValue != null) {
            const secruval = item.primaryValue[1];
            document.querySelector(`div[data-event="${item.eventcode}"]`).innerText = secruval;
          }
        });
      });
    }
  }
};

const changeLanguage = () => {
  states.langUpdate = false;
  if (states.language === 'en' && states.langUpdate === false) {
    kbdkeys.forEach((row) => {
      row.forEach((item) => {
        if (item.type <= 1) {
          const prruval = item.primaryValue[1];
          // global.console.log(item.eventcode, prruval);
          document.querySelector(`div[data-event="${item.eventcode}"]`).innerText = prruval;
        }
      });
    });
    states.language = 'ru';
    states.langUpdate = true;
  }

  if (states.language === 'ru' && states.langUpdate === false) {
    kbdkeys.forEach((row) => {
      row.forEach((item) => {
        if (item.type <= 1) {
          const prenval = item.primaryValue[0];
          // global.console.log(item.eventcode, prenval);
          document.querySelector(`div[data-event="${item.eventcode}"]`).innerText = prenval;
        }
      });
    });
    states.language = 'en';
    states.langUpdate = true;
  }
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

  if (localStorage.getItem('language')) {
    states.language = localStorage.getItem('language');
    changeLanguage();
  }

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
      if (someKey.getAttribute('data-event') === 'ShiftLeft'
        || someKey.getAttribute('data-event') === 'ShiftRight'
        || someKey.getAttribute('data-event') === 'ControlLeft'
        || someKey.getAttribute('data-event') === 'ControlRight'
        || someKey.getAttribute('data-event') === 'AltLeft'
        || someKey.getAttribute('data-event') === 'AltRight') {
        states.current = someKey;
        const keyID = someKey.getAttribute('data-event');
        if (states[keyID] === false) {
          states[keyID] = true;
          someKey.classList.add('edit');
        } else {
          states[keyID] = false;
          someKey.classList.remove('edit');
        }
      } else {
        if (states.current !== null) {
          states.current.classList.remove('active');
          states.current = null;
        }
        someKey.classList.add('active');
        states.current = someKey;
      }

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

      if (parseInt(someKey.getAttribute('data-type'), 10) === 3) {
        if (setValue === 'Shift') {
          shiftState();
        }

        if (setValue === 'Alt') {
          if ((states.ControlLeft === true || states.ControlRight === true)
            && (states.AltLeft === true || states.AltRight === true)) {
            changeLanguage();
            states.ControlLeft = false;
            document.querySelector('div[data-event="ControlLeft"]').classList.remove('edit');
            states.ControlRight = false;
            document.querySelector('div[data-event="ControlRight"]').classList.remove('edit');
            states.AltLeft = false;
            document.querySelector('div[data-event="AltLeft"]').classList.remove('edit');
            states.AltRight = false;
            document.querySelector('div[data-event="AltRight"]').classList.remove('edit');
          }
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

  const onUnloadListener = () => {
    if (states.language === 'en') {
      localStorage.setItem('language', 'ru');
    }

    if (states.language === 'ru') {
      localStorage.setItem('language', 'en');
    }
  };

  document.addEventListener('mousedown', onDownListener);
  document.addEventListener('mouseup', onUpListener);
  document.addEventListener('keydown', onDownListener);
  document.addEventListener('keyup', onUpListener);
  window.addEventListener('unload', onUnloadListener);
};

init();
