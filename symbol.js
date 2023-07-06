function assignSymbolToLetter(symbol) {
    const symbolToLetterMap = {
      //This is Symbol to Letter
      '`': 'A',
      '~': 'B',
      '(': 'C',
      ')': 'D',
      '{': 'E',
      '}': 'F',
      '@': 'G',
      '#': 'H',
      '|': 'I',
      '?': 'J',
      '<': 'K',
      '>': 'L',
      ';': 'M',
      ':': 'N',
      '*': 'O',
      '[': 'P',
      ']': 'Q',
      '/': 'R',
      '$': 'S',
      '&': 'T',
      '.': 'U',
      '^': 'V',
      '-': 'W',
      '+': 'X',
      '=': 'Y',
      '_': 'Z',

    //This is Letter to Symbol
      'Q': ',',
      'W': '.',
      'E': '/',
      'R': "'",
      'T': '"',
      'Y': '=',
      'U': '+',
      'I': '-',
      'O': '[',
      'P': ']',
      'A': '\\',
      'S': '#',
      'D': '<',
      'F': '>',
      'G': '`',
      'H': '~',
      'J': '{',
      'K': '}',
      'L': '@',
      'Z': '%',
      'X': '*',
      'C': ';',
      'B': ':',
      'N': '|',
      'M': '?'
    };
    if (symbol in symbolToLetterMap) {
      return symbolToLetterMap[symbol];
    } else {
      return symbol;
    }
  }

  