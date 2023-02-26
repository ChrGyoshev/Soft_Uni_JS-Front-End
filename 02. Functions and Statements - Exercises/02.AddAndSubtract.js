function solve(first, second, third) {
    
  function sum(firstNum, secondNum) {
    return firstNum + secondNum;
  }
  function subtract(firstNum, secondNum, thirdNum) {
    console.log(sum(firstNum, secondNum) - thirdNum);
  }
  subtract(first, second, third)
}

solve(23, 6, 10);
