
function assignSymbolToLetter(symbol) {
    const symbolToLetterMap = {
        // Symbol to Letter mapping
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

        '`': 'a',
        '~': 'b',
        '(': 'c',
        ')': 'd',
        '{': 'e',
        '}': 'f',
        '@': 'g',
        '#': 'h',
        '|': 'i',
        '?': 'j',
        '<': 'k',
        '>': 'l',
        ';': 'm',
        ':': 'n',
        '*': 'o',
        '[': 'p',
        ']': 'q',
        '/': 'r',
        '$': 's',
        '&': 't',
        '.': 'u',
        '^': 'v',
        '-': 'w',
        '+': 'x',
        '=': 'y',
        '_': 'z',

        'Q': '`',
        'W': '~',
        'E': '(',
        'R': ')',
        'T': '{',
        'Y': '}',
        'U': '@',
        'I': '#',
        'O': '|',
        'P': '?',
        'A': '<',
        'S': '>',
        'D': ';',
        'F': ':',
        'G': '*',
        'H': '[',
        'J': ']',
        'K': '/',
        'L': '$',
        'Z': '&',
        'X': '.',
        'C': '^',
        'V': '-',
        'B': '+',
        'N': '=',
        'M': '_',

        'q': '`',
        'w': '~',
        'e': '(',
        'r': ')',
        't': '{',
        'y': '}',
        'u': '@',
        'i': '#',
        'o': '|',
        'p': '?',
        'a': '<',
        's': '>',
        'd': ';',
        'f': ':',
        'g': '*',
        'h': '[',
        'j': ']',
        'k': '/',
        'l': '$',
        'z': '&',
        'x': '.',
        'c': '^',
        'v': '-',
        'b': '+',
        'n': '=',
        'm': '_',
    };

    if (symbol in symbolToLetterMap) {
        return symbolToLetterMap[symbol];
    } else {
        return symbol;
    }
}