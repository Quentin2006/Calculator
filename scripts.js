function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculate() {
  let num1 = prompt("Enter your number");
  let operation = prompt("Enter your operation");
  let num2 = prompt("Enter your number");

  switch (true) {
    case operation == "+":
      return add(num1, num2);
    case operation == "-":
      return subtract(num1, num2);
    case operation == "*":
      return multiply(num1, num2);
    case operation == "/":
      return returndivide(num1, num2);
  }
}
