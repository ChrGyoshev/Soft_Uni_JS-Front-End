function subtract() {
  const firstNum = Number(document.getElementById("firstNumber").value);
  const secondNum = Number(document.getElementById("secondNumber").value);

  const subtract = firstNum - secondNum;

  const result = (document.getElementById("result").innerText = subtract);
}
