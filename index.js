var currentValue = '';
var operator = '';
var storedValue = '';
function appendValue(value) {
    currentValue += value;
    document.getElementById('display').value = currentValue;
}
function setOperation(op) {
    if (currentValue === '')
        return;
    operator = op;
    storedValue = currentValue;
    currentValue = '';
    document.getElementById('display').value = '';
}
function calculate() {
    if (currentValue === '' || storedValue === '')
        return;
    var result = eval("".concat(storedValue, " ").concat(operator, " ").concat(currentValue));
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
