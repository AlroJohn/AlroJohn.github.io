function assignSymbolToLetter(symbol) {
    if (symbol in symbolToLetterMap) {
        return symbolToLetterMap[symbol];
    } else {
        return symbol;
    }
}

function decryptSymbols() {
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');
    const inputLabel = document.getElementById('inputLabel');

    const userInput = inputElement.value;

    const decryptedText = userInput
        .split('')
        .map(symbol => assignSymbolToLetter(symbol))
        .join('');

    outputElement.textContent = decryptedText;

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

decryptSymbols();

