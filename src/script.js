/* eslint-disable no-unused-vars */
import './main.css';
import keybordKeys from './keys';
import states from './states';


const createEl = (tag, className, parent, innerText = null) => {
  const el = document.createElement(tag);
  if (className) {
    el.setAttribute('class', className);
  }
  if (innerText) {
    el.innerText = innerText;
  }

  parent.append(el);
  return el;
};

const shiftState = () => {
  const elems = document.querySelectorAll('div[data-type="0"]');
  Object.values(elems).forEach((elem) => {
    elem.classList.toggle('upperCase');
  });

  if (states.language === 'en') {
    if ((states.ShiftLeft || states.ShiftRight)) {
      keybordKeys.forEach((row) => {
        row.forEach(({ type, secondValue, eventcode }) => {
          if (type === 1 && secondValue) {
            const secondaryValue = secondValue[0];
            document.querySelector(`div[data-event="${eventcode}"]`).innerText = secondaryValue;
          }
        });
      });
    } else {
      keybordKeys.forEach((row) => {
        row.forEach(({ type, primaryValue, eventcode }) => {
          if (type === 1 && primaryValue) {
            const secondaryValue = primaryValue[0];
            document.querySelector(`div[data-event="${eventcode}"]`).innerText = secondaryValue;
          }
        });
      });
    }
  }

  if (states.language === 'ru') {
    if ((states.ShiftLeft || states.ShiftRight)) {
      keybordKeys.forEach((row) => {
        row.forEach(({ type, secondValue, eventcode }) => {
          if (type === 1 && secondValue) {
            const secruval = secondValue[1];
            document.querySelector(`div[data-event="${eventcode}"]`).innerText = secruval;
          }
        });
      });
    } else {
      keybordKeys.forEach((row) => {
        row.forEach(({ type, primaryValue, eventcode }) => {
          if (type === 1 && primaryValue) {
            const secruval = primaryValue[1];
            document.querySelector(`div[data-event="${eventcode}"]`).innerText = secruval;
          }
        });
      });
    }
  }
};

const changeLanguage = () => {
  states.langUpdate = false;
  if (states.language === 'en' && !states.langUpdate) {
    keybordKeys.forEach((row) => {
      row.forEach((item) => {
        if (item.type <= 1) {
          const prruval = item.primaryValue[1];
          global.console.log(item.eventcode, prruval);
          document.querySelector(`div[data-event="${item.eventcode}"]`).innerText = prruval;
        }
      });
    });
    states.language = 'ru';
    states.langUpdate = true;
  }

  if (states.language === 'ru' && !states.langUpdate) {
    keybordKeys.forEach((row) => {
      row.forEach(({ type, primaryValue, eventcode }) => {
        if (type <= 1) {
          const prenval = primaryValue[0];
          document.querySelector(`div[data-event="${eventcode}"]`).innerText = prenval;
        }
      });
    });
    states.language = 'en';
    states.langUpdate = true;
  }
};

const init = () => {
  const body = document.querySelector('body');
  const root = createEl('div', 'root', body);
  const wrapper = createEl('div', 'wrapper', root);
  createEl('h1', null, wrapper, 'Virtual keyboard');
  const textArea = createEl('textarea', null, wrapper);
  const kbdContainer = createEl('div', 'keyboard', wrapper);

  keybordKeys.forEach((row) => {
    const sectionRow = createEl('section', 'key-row', kbdContainer);
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
        if (!states[keyID]) {
          states[keyID] = true;
          someKey.classList.add('edit');
        } else {
          states[keyID] = false;
          someKey.classList.remove('edit');
        }
      } else {
        if (states.current) {
          states.current.classList.remove('active');
          states.current = null;
        }
        someKey.classList.add('active');
        states.current = someKey;
      }

      if (states.current) {
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
          if (states.position) {
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
          if (states.position) {
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
          if (states.position) {
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

    if (states.current) {
      states.current.classList.remove('active');
      states.current = null;
    }
  };

  const onUnloadListener = () => ((states.language === 'en') ? localStorage.setItem('language', 'ru') : localStorage.setItem('language', 'en'));

  document.addEventListener('mousedown', onDownListener);
  document.addEventListener('mouseup', onUpListener);
  document.addEventListener('keydown', onDownListener);
  document.addEventListener('keyup', onUpListener);
  window.addEventListener('unload', onUnloadListener);
};

init();
