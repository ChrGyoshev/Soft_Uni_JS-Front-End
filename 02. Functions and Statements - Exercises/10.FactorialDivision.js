

function factorialDivision(num1, num2) {
  const result = factorial(num1) / factorial(num2);
  console.log(result.toFixed(2));

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
}

factorialDivision(6,2);
