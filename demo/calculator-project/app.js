// https://dribbble.com/shots/3125651-Daily-UI-004-Calculator
// trying to build this

function generateNewState() {
  var newState = {
    numA: null,
    numB: null,
    operation: null
  };
  return newState;
}

function addNumber() {
}

function addOperand() {
}

function calculate() {
}

function calculateAction(state, newAction, newValue) {
  switch (newAction) {
    case 'number':
      return addNumber(state, newValue);
    case 'operation':
      return addOperand(state, newValue);
    case 'calculate':
      return calculate(state, newValue);
    default: // if something goes wrong, resets state
      return generateNewState();
  }
}

function handleClick(event) {
  var target = event.target;
  var action = target.getAttribute('data-action');
  var value = target.getAttribute('data-value');
  calculatorState = calculateAction(calculatorState, action, value);
}

var calculator = document.getElementById('calc');
var calculatorState = generateNewState();

calculator.addEventListener('click', handleClick);
