let displayValue = '0';

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = '';
    }
    displayValue += number;
    updateDisplay();
}

function appendSymbol(symbol) {
    if (symbol !== '.') {
        displayValue = displayValue === '0' ? '' : displayValue;
    }
    displayValue += symbol;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}
