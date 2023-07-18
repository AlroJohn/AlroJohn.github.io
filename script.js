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
  
    const userInput = inputElement.value;
  
    const decryptedText = userInput
      .split('')
      .map(symbol => assignSymbolToLetter(symbol))
      .join('');
  
    outputElement.textContent = decryptedText;
  }
  
  decryptSymbols();z
  