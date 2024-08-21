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

let nums = [];
let operation;

function populateDisplay(value) {
  const display = document.querySelector(".display");
  let operations = ["addition", "subtraction", "multiplacation", "division"];

  if (typeof value === "number") {
    // adds num to nums array
    nums.push(value);
    // adds num to screen
    console.log(display.textContent.split("").length);
    if (operation != undefined && display.textContent.split("").length >= 1) {
      display.textContent = value;
    } else display.textContent += value;
  } else if (value === "clear") {
    // clears display and resets nums array
    display.textContent = "";
    nums.length = 0;
  } else if (value === "delete") {
    // makes display value into an array, removes last value,
    // and combines array into string
    let tempDisplay = display.textContent;
    tempDisplay = tempDisplay.split("");
    tempDisplay.pop();
    display.textContent = tempDisplay.join("");
  } else if (value === "plus-minus") {
    display.textContent = display.textContent * -1;
  } else if (value === "decimal") {
    display.textContent += ".";
  } else if (operations.includes(value)) {
    operation = value;
    if (nums.length >= 2) {
      nums[0] = operate(+nums[0], operation, +nums[1]);
      nums.length = 1;
      display.textContent = nums[0];
    }
    console.log(value, nums);
  } else if (value === "equals") {
    nums[0] = operate(+nums[0], operation, +nums[1]);
    nums.length = 1;
    display.textContent = nums[0];
  }
}
