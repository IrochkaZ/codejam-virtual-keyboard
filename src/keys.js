const kbdkeys = [
  // row1
  [
    {
      name: '~',
      primaryValue: ['`', 'ё'],
      secondValue: ['`', 'Ё'],
      className: ['one', ''],
      type: 0,
      eventcode: 'Backquote',
    },
    {
      name: '1',
      primaryValue: ['1', '1'],
      secondValue: ['!', '!'],
      className: ['one', ''],
      type: 0,
      eventcode: 'Digit1',
    },
    {
      name: '2',
      primaryValue: ['2', '2'],
      secondValue: ['@', '"'],
      className: ['one', ''],
      type: 0,
      eventcode: 'Digit2',
    },
    {
      name: '3',
      primaryValue: ['3', '3'],
      secondValue: ['#', '№'],
      className: ['one', ''],
      type: 0,
      eventcode: 'Digit3',
    }, {
      name: '4',
      primaryValue: ['4', '4'],
      secondValue: ['$', ';'],
      className: ['one', ''],
      type: 0,
      eventcode: 'Digit4',
    }, {
      name: '5',
      primaryValue: ['5', '5'],
      secondValue: ['%', '%'],
      className: ['one', ''],
      type: 0,
      eventcode: 'Digit5',
    }, {
      name: '6',
      primaryValue: ['6', '6'],
      secondValue: ['^', ':'],
      className: ['one', ''],
      type: 0,
      eventcode: 'Digit6',
    }, {
      name: '7',
      primaryValue: ['7', '7'],
      secondValue: ['&', '?'],
      className: ['one', ''],
      type: 0,
      eventcode: 'Digit7',
    }, {
      name: '8',
      primaryValue: ['8', '8'],
      secondValue: ['*', '*'],
      className: ['one', ''],
      type: 0,
      eventcode: 'Digit8',
    }, {
      name: '9',
      primaryValue: ['9', '9'],
      secondValue: ['(', '('],
      className: ['one', ''],
      type: 0,
      eventcode: 'Digit9',
    }, {
      name: '0',
      primaryValue: ['0', '0'],
      secondValue: ['(', ')'],
      className: ['one', ''],
      type: 0,
      eventcode: 'Digit0',
    }, {
      name: '-',
      primaryValue: ['-', '-'],
      secondValue: ['_', '_'],
      className: ['one', ''],
      type: 0,
      eventcode: 'Minus',
    }, {
      name: '=',
      primaryValue: ['=', '='],
      secondValue: ['+', '+'],
      className: ['one', ''],
      type: 0,
      eventcode: 'Equal',
    }, {
      name: ' ',
      primaryValue: ['Backspace', 'Backspace'],
      secondValue: ['Backspace', 'Backspace'],
      className: ['two', ''],
      type: 1,
      eventcode: 'Backspace',
    }],
  // row2
  [{
    name: 'Tab',
    primaryValue: ['Tab', 'Tab'],
    secondValue: ['Tab', 'Tab'],
    className: ['one-one-half l', ''],
    type: 1,
    eventcode: 'Tab',
  }, {
    name: 'q',
    primaryValue: ['q', 'й'],
    secondValue: ['Q', 'Й'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyQ',
  }, {
    name: 'w',
    primaryValue: ['w', 'ц'],
    secondValue: ['W', 'Ц'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyW',
  }, {
    name: 'e',
    primaryValue: ['e', 'у'],
    secondValue: ['E', 'У'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyE',
  }, {
    name: 'r',
    primaryValue: ['r', 'к'],
    secondValue: ['R', 'K'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyR',
  }, {
    name: 't',
    primaryValue: ['t', 'е'],
    secondValue: ['T', 'Е'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyT',
  }, {
    name: 'y',
    primaryValue: ['y', 'н'],
    secondValue: ['Y', 'Н'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyY',
  }, {
    name: 'u',
    primaryValue: ['u', 'г'],
    secondValue: ['U', 'Г'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyU',
  }, {
    name: 'i',
    primaryValue: ['i', 'ш'],
    secondValue: ['I', 'Ш'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyI',
  }, {
    name: 'o',
    primaryValue: ['o', 'щ'],
    secondValue: ['O', 'Щ'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyO',
  }, {
    name: 'p',
    primaryValue: ['p', 'з'],
    secondValue: ['P', 'З'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyP',
  }, {
    name: '[',
    primaryValue: ['[', 'х'],
    secondValue: ['{', 'Х'],
    className: ['one', ''],
    type: 0,
    eventcode: 'BracketLeft',
  }, {
    name: ']',
    primaryValue: [']', 'ъ'],
    secondValue: ['}', 'Ъ'],
    className: ['one', ''],
    type: 0,
    eventcode: 'BracketRight',
  }, {
    name: '/',
    primaryValue: ['|', '/'],
    secondValue: ['/', ' |'],
    className: ['one', ''],
    type: 0,
    eventcode: 'Backslash',
  }, {
    name: 'Del',
    primaryValue: ['Del', 'Del'],
    secondValue: ['Del', 'Del'],
    className: ['one', ''],
    type: 1,
    eventcode: 'Delete',
  }],
  // rows 3
  [{
    name: 'Caps',
    primaryValue: ['Caps', 'Caps'],
    secondValue: ['Caps', 'Caps'],
    className: ['one-one-half l', ''],
    type: 1,
    eventcode: 'CapsLock',
  }, {
    name: 'a',
    primaryValue: ['a', 'ф'],
    secondValue: ['A', 'Ф'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyA',
  }, {
    name: 's',
    primaryValue: ['s', 'ы'],
    secondValue: ['S', 'Ы'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyS',
  }, {
    name: 'd',
    primaryValue: ['d', 'в'],
    secondValue: ['D', 'В'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyD',
  }, {
    name: 'f',
    primaryValue: ['f', 'а'],
    secondValue: ['F', 'А'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyF',
  }, {
    name: 'g',
    primaryValue: ['g', 'п'],
    secondValue: ['G', 'П'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyG',
  }, {
    name: 'h',
    primaryValue: ['h', 'р'],
    secondValue: ['H', 'Р'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyH',
  }, {
    name: 'j',
    primaryValue: ['j', 'о'],
    secondValue: ['J', 'О'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyJ',
  }, {
    name: 'k',
    primaryValue: ['k', 'л'],
    secondValue: ['K', 'Л'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyK',
  }, {
    name: 'l',
    primaryValue: ['l', 'д'],
    secondValue: ['L', 'Д'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyL',
  }, {
    name: ';',
    primaryValue: [';', 'ж'],
    secondValue: [':', 'Ж'],
    className: ['one', ''],
    type: 0,
    eventcode: 'Semicolon',
  }, {
    name: '"',
    primaryValue: ['"', 'э'],
    secondValue: ['"', 'Э'],
    className: ['one', ''],
    type: 0,
    eventcode: 'Quote',
  }, {
    name: ' ',
    primaryValue: ['Enter', 'Enter'],
    secondValue: ['Enter', 'Enter'],
    className: ['two r', ''],
    type: 1,
    eventcode: 'Enter',
  }],
  // rows 4
  [{
    name: 'Shift',
    primaryValue: ['ShiftLeft', 'ShiftLeft'],
    secondValue: ['ShiftLeft', 'ShiftLeft'],
    className: ['two-two-half l', ''],
    type: 1,
    eventcode: 'ShiftLeft',
  }, {
    name: 'z',
    primaryValue: ['z', 'я'],
    secondValue: ['Z', 'Я'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyZ',
  },
  {
    name: 'x',
    primaryValue: ['x', 'ч'],
    secondValue: ['X', 'Ч'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyX',
  }, {
    name: 'c',
    primaryValue: ['c', 'c'],
    secondValue: ['C', 'С'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyC',
  }, {
    name: 'v',
    primaryValue: ['v', 'м'],
    secondValue: ['V', 'М'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyV',
  }, {
    name: 'b',
    primaryValue: ['b', 'и'],
    secondValue: ['B', 'И'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyB',
  }, {
    name: 'n',
    primaryValue: ['n', 'т'],
    secondValue: ['N', 'Т'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyN',
  }, {
    name: 'm',
    primaryValue: ['m', 'ь'],
    secondValue: ['M', 'Ь'],
    className: ['one', ''],
    type: 0,
    eventcode: 'KeyM',
  }, {
    name: ',',
    primaryValue: [',', 'б'],
    secondValue: ['<', 'Б'],
    className: ['one', ''],
    type: 0,
    eventcode: 'Comma',
  }, {
    name: '.',
    primaryValue: ['.', 'ю'],
    secondValue: ['>', 'Ю'],
    className: ['one', ''],
    type: 0,
    eventcode: 'Period',
  }, {
    name: '/',
    primaryValue: ['/', '.'],
    secondValue: ['?', ','],
    className: ['one', ''],
    type: 0,
    eventcode: 'Slash',
  }, {
    name: 'Up',
    primaryValue: ['Up', 'Up'],
    secondValue: ['Up', 'Up'],
    className: ['one', ''],
    type: 1,
    eventcode: 'ArrowUp',
  }, {
    name: 'Shift',
    primaryValue: ['Shift', 'Shift'],
    secondValue: ['Shift', 'Shift'],
    className: ['one', ''],
    type: 1,
    eventcode: 'ShiftRight',
  }],
  // rows 5
  [{
    name: 'Ctrl',
    primaryValue: ['Ctrl', 'Ctrl'],
    secondValue: ['Ctrl', 'Ctrl'],
    className: ['two-two-half l', ''],
    type: 1,
    eventcode: 'ControlLeft',
  }, {
    name: 'Win',
    primaryValue: ['Win', 'Win'],
    secondValue: ['Win', 'Win'],
    className: ['one', ''],
    type: 1,
    eventcode: 'MetaLeft',
  },
  {
    name: 'Alt',
    primaryValue: ['Alt', 'Alt'],
    secondValue: ['Alt', 'Alt'],
    className: ['one', ''],
    type: 1,
    eventcode: 'AltLeft',
  }, {
    name: '',
    primaryValue: ['', ''],
    secondValue: ['', ''],
    className: ['five', ''],
    type: 1,
    eventcode: 'Space',
  }, {
    name: 'Alt',
    primaryValue: ['Alt', 'Alt'],
    secondValue: ['Alt', 'Alt'],
    className: ['one', ''],
    type: 1,
    eventcode: 'AltRight',
  }, {
    name: 'Ctrl',
    primaryValue: ['Ctrl', 'Ctrl'],
    secondValue: ['Ctrl', 'Ctrl'],
    className: ['one-one-half l', ''],
    type: 1,
    eventcode: 'ControlRight',
  }, {
    name: 'Left',
    primaryValue: ['Left', 'Left'],
    secondValue: ['Left', 'Left'],
    className: ['one', ''],
    type: 1,
    eventcode: 'ArrowLeft',
  }, {
    name: 'Down',
    primaryValue: ['Down', 'Down'],
    secondValue: ['Down', 'Down'],
    className: ['one', ''],
    type: 1,
    eventcode: 'ArrowDown',
  }, {
    name: 'Right',
    primaryValue: ['Right', 'Right'],
    secondValue: ['Right', 'Right'],
    className: ['one', ''],
    type: 1,
    eventcode: 'ArrowRight',
  }],
];

export default kbdkeys;