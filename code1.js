function createAddition() {
  return function(a, b) {
    return a + b;
  };
}

function createSubtraction() {
  return function(a, b) {
    return a - b;
  };
}

function createMultiplication() {
  return function(a, b) {
    return a * b;
  };
}

function createDivision() {
  return function(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Cannot divide by zero";
    }
  };
}

function createFactoryFn(operation) {
  switch (operation) {
    case 'add':
      return createAddition;
    case 'sub':
      return createSubtraction;
    case 'mul':
      return createMultiplication;
    case 'div':
      return createDivision;
    default:
      return null;
  }
}

// Get the user's chosen operation from the console
const chosenOperation = prompt("Enter operation (add/sub/mul/div): ");
const operationFn = createFactoryFn(chosenOperation);

if (!operationFn) {
  console.log("Invalid operation.");
} else {
  // Display the code of the chosen operation
  console.log("Operation code:", operationFn.toString());

  // Allow the user to provide values and execute the operation
  const userValue1 = parseFloat(prompt("Enter first value: "));
  const userValue2 = parseFloat(prompt("Enter second value: "));
  
  // Execute the operation and display the result
  const result = operationFn()(userValue1, userValue2);
  console.log("Result:", result);
}

//facurn fn means fn should be displayed and then he can pass values 