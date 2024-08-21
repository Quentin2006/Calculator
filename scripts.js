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

function operate(num1, operation, num2) {
  switch (true) {
    case operation == "addition":
      return add(num1, num2);
    case operation == "subtraction":
      return subtract(num1, num2);
    case operation == "multiplacation":
      return multiply(num1, num2);
    case operation == "division":
      return divide(num1, num2);
  }
}

let operationSelected = false;
let operation;
let num1 = "";
let num2 = "";
function populateDisplay(value) {
  const display = document.querySelector(".display");
  let operations = ["addition", "subtraction", "multiplacation", "division"];
  let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "decimal"];

  if (nums.includes(value)) {
    if (num1 === "" || !operationSelected) {
      if (value === "decimal") num1 += ".";
      else num1 += value;
      display.textContent = num1;
    } else {
      if (value === "decimal") num2 += ".";
      else num2 += value;
      display.textContent = num2;
    }
  } else if (operations.includes(value)) {
    operationSelected = true;
    if (num1 != "" && num2 != "") {
      let product = operate(+num1, operation, +num2);

      num1 = product;
      num2 = "";

      display.textContent = num1;
    }
    operation = value;
  } else if (value === "equals" && num1 != "" && num2 != "") {
    let product = operate(+num1, operation, +num2);

    num1 = product;
    num2 = "";

    if (num1 >= 100000000 || num1 <= 9.999999999)
      display.textContent = num1.toExponential(6);
    else display.textContent = num1;
  } else if (value === "clear") {
    operationSelected = false;
    operation = undefined;
    num1 = "";
    num2 = "";
    display.textContent = "";
  } else if (value === "delete") {
    if (num2 === "") {
      num1 = num1.split("");
      num1.pop();
      num1 = num1.join("");
      display.textContent = num1;
    } else {
      num2 = num2.split("");
      num2.pop();
      num2 = num2.join("");
      display.textContent = num2;
    }
  } else if (value === "plus-minus") {
    if (num2 === "") {
      num1 = num1 * -1;
      display.textContent = num1;
    } else {
      num2 = num2 * -1;
      display.textContent = num2;
    }
  }
}
