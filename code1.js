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
        return createAddition();
      case 'sub':
        return createSubtraction();
      case 'mul':
        return createMultiplication();
      case 'div':
        return createDivision();
      default:
        return function() {
          return "Error: Invalid operation";
        };
    }
  }
  
  // Get the operation from the user
  const operation = prompt("Enter operation (add/sub/mul/div):");
  
  // Get user values
  let userValue1, userValue2;
  
  if (operation !== 'factorial') {
    userValue1 = parseFloat(prompt("Enter first value:"));
    userValue2 = parseFloat(prompt("Enter second value:"));
  }
  
  // Execute the operation function
  const operationFn = createFactoryFn(operation);
  
  // Calculate the result and display it
  let result;
  if (operation === 'factorial') {
    const userNumber = parseInt(prompt("Enter a number for factorial:"));
    result = operationFn(userNumber);
  } else {
    result = operationFn(userValue1, userValue2);
  }
  
  console.log(result);
  
  