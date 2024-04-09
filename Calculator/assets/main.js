let displayValue = '';

function appendValue(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        alert('Invalid expression!');
    }
}
