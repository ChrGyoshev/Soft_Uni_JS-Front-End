function largestNum(firstNum, secondNum, thirdNum) {
  let largestNum = null;
  if (firstNum > secondNum && firstNum > thirdNum) {
    largestNum = firstNum;
  } else if (secondNum > firstNum && secondNum > thirdNum) {
    largestNum = secondNum;
  } else {
    largestNum = thirdNum;
  }
  console.log(`The largest number is ${largestNum}.`);
}

largestNum(-5, -3, 16);
