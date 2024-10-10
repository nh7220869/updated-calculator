let currentValue = '';
let operator = '';
let storedValue = '';

function appendValue(value) {
    currentValue += value;
    document.getElementById('display').value = currentValue;
}

function setOperation(op) {
    if (currentValue === '') return;
    operator = op;
    storedValue = currentValue;
    currentValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    if (currentValue === '' || storedValue === '') return;
    const result = eval(`${storedValue} ${operator} ${currentValue}`);
    document.getElementById('display').value = result;
    currentValue = result;
    storedValue = '';
    operator = '';
}

function clearDisplay() {
    currentValue = '';
    storedValue = '';
    operator = '';
    document.getElementById('display').value = '';
}