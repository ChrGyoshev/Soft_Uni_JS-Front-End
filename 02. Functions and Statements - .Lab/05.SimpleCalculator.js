function calculator(numOne, numTwo, operator) {
  if (operator === "multiply") {
    console.log(numOne * numTwo);
  } else if (operator === "divide") {
    console.log(numOne / numTwo);
  } else if (operator === "add") {
    console.log(numOne + numTwo);
  } else if (operator === "subtract") {
    console.log(numOne - numTwo);
  }
}

calculator(40,
    8,
    'divide'
    );
