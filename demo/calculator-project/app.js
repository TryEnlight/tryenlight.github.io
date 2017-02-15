// https://dribbble.com/shots/3125651-Daily-UI-004-Calculator
// trying to build this

// Dogme:
// * Immutable calculator state
// * Always display results using calculator state
// * Try to be FP, as much as you can
// * Not more than 2 levels of nested logic in a function

// function to generate state
function generateState(operation, numA, numB, result) {
  var newState = {
    numA: numA || 0,
    numB: numB || 0,
    operation: operation,
    result: result
  };
  return newState;
}

// To add new number to calculator state
function setNumber(state, newValue) {
  if (state.operation == null) {
    return generateState(state.operation, state.numA += newValue, state.numB, state.result);
  } else { // if operator is present, set as numB
    return generateState(state.operation, state.numA, state.numB += newValue, state.result);
  }
}

// To set an operator
function setOperator(state, newValue) {
  if (newValue == 'c') { // if operator is clear, reset state
    return generateState();
  }
  return generateState(newValue, state.numA, state.numB, state.result);
}

// Generate result
function calculate(state, newValue) {
  var numA = parseInt(state.numA);
  var numB = parseInt(state.numB);
  var operation = state.operation;
  var result;
  if (numA == NaN || numB == NaN) {
    return generateState(null, null, null, 'Invalid');
  }
  switch (operation) {
    case '+':
      result = numA + numB;
      break;
    case '-':
      result = numA - numB;
      break;
    case '*':
      result = numA * numB;
      break;
    case '/':
      result = numA / numB;
      break;
    default:
      result = null;
  }
  return generateState(null, result, null, result);
}

function evaluate(state, newAction, newValue) {
  switch (newAction) {
    case 'number':
      return setNumber(state, newValue);
    case 'operation':
      return setOperator(state, newValue);
    case 'calculate':
      return calculate(state, newValue);
    default: // if something goes wrong, resets state
      return generateState();
  }
}

function beautify(num) {
  var n = num
  if (n == undefined || n == NaN) {
    return 0;
  }
  return parseInt(num);
}

function printResult(state) {
  elemA.innerHTML = parseInt(state.numA);

  // To avoid showing numB as zero
  var numB = parseInt(state.numB);
  if (!numB) {
    numB = null;
  }
  elemB.innerHTML = numB;
  elemOperator.innerHTML = state.operation || null;
  elemResult.innerHTML = beautify(state.result);
}

function handleClick(event) {
  var target = event.target;
  var action = target.getAttribute('data-action');
  var value = target.getAttribute('data-value');
  calculatorState = evaluate(calculatorState, action, value);
  printResult(calculatorState);
}

var calculator = document.getElementById('calc');
var elemA = document.getElementById('num-a');
var elemB = document.getElementById('num-b');
var elemOperator = document.getElementById('operator');
var elemResult = document.getElementById('result');
var calculatorState = generateState();

calculator.addEventListener('click', handleClick);
