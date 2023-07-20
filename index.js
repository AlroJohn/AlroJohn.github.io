function encryptLetters() {
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('encrypted-output');
    const inputLabel = document.getElementById('inputLabel');

    const userInput = inputElement.value;

    const encryptedText = userInput
        .split('')
        .map(letter => assignLetterToSymbol(letter))
        .join('');

    outputElement.textContent = encryptedText;

    if (userInput.length > 0) {
        inputLabel.style.transition = 'color 0.5s ease-in-out'; // Add transition property
        inputLabel.style.color = 'aqua';
        
    } else {
        inputLabel.style.transition = 'color 0.5s ease-in-out'; // Remove transition property when there is no input
        inputLabel.style.color = ''; // Reset to the default label color
    }
    if (userInput.length > 0) {
        outputLabel.style.transition = 'color 0.5s ease-in-out'; // Add transition property
        outputLabel.style.color = 'aqua';
        
    } else {
        outputLabel.style.transition = 'color 0.5s ease-in-out'; // Remove transition property when there is no input
        outputLabel.style.color = ''; // Reset to the default label color
    }
}

function assignLetterToSymbol(letter) {
    const letterToSymbolMap = {
        // Letter to Symbol mapping
        'A': '`',
        'B': '~',
        'C': '(',
        'D': ')',
        'E': '{',
        'F': '}',
        'G': '@',
        'H': '#',
        'I': '|',
        'J': '?',
        'K': '<',
        'L': '>',
        'M': ';',
        'N': ':',
        'O': '*',
        'P': '[',
        'Q': ']',
        'R': '/',
        'S': '$',
        'T': '&',
        'U': '.',
        'V': '^',
        'W': '-',
        'X': '+',
        'Y': '=',
        'Z': '_',

        'a': '`',
        'b': '~',
        'c': '(',
        'd': ')',
        'e': '{',
        'f': '}',
        'g': '@',
        'h': '#',
        'i': '|',
        'j': '?',
        'k': '<',
        'l': '>',
        'm': ';',
        'n': ':',
        'o': '*',
        'p': '[',
        'q': ']',
        'r': '/',
        's': '$',
        't': '&',
        'u': '.',
        'v': '^',
        'w': '-',
        'x': '+',
        'y': '=',
        'z': '_',

        '`': 'Q',
        '~': 'W',
        '(': 'E',
        ')': 'R',
        '{': 'T',
        '}': 'Y',
        '@': 'U',
        '#': 'I',
        '|': 'O',
        '?': 'P',
        '<': 'A',
        '>': 'S',
        ';': 'D',
        ':': 'F',
        '*': 'G',
        '[': 'H',
        ']': 'J',
        '/': 'K',
        '$': 'L',
        '&': 'Z',
        '.': 'X',
        '^': 'C',
        '-': 'V',
        '+': 'B',
        '=': 'N',
        '_': 'M',

        '`': 'q',
        '~': 'w',
        '(': 'e',
        ')': 'r',
        '{': 't',
        '}': 'y',
        '@': 'u',
        '#': 'i',
        '|': 'o',
        '?': 'p',
        '<': 'a',
        '>': 's',
        ';': 'd',
        ':': 'f',
        '*': 'g',
        '[': 'h',
        ']': 'j',
        '/': 'k',
        '$': 'l',
        '&': 'z',
        '.': 'x',
        '^': 'c',
        '-': 'v',
        '+': 'b',
        '=': 'n',
        '_': 'm',
    };

    if (letter in letterToSymbolMap) {
        return letterToSymbolMap[letter];
    } else {
        return letter;
    }
}

encryptLetters();
