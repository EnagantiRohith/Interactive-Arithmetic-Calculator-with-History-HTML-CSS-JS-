const input1 = document.getElementById("numA");
const input2 = document.getElementById("numB");
const calcBtn = document.getElementById("calc-btn");
const clearBtn = document.getElementById("clear-btn");
const clearHisBtn = document.getElementById("clearHis-btn");

const history1 = document.getElementById("history1");
const history2 = document.getElementById("history2");
const history3 = document.getElementById("history3");
const history4 = document.getElementById("history4");
const history5 = document.getElementById("history5");

const result = document.getElementById("result");
const operation = document.getElementById("oper");

const errorIn1 = document.getElementById("error-numA");
const errorIn2 = document.getElementById("error-numB");
const errorOper = document.getElementById("error-oper");

let hisArr = [];

calcBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", clear);
clearHisBtn.addEventListener("click", clearHis);

function calculate() {
  const oper = operation.value;
  const val1 = input1.value.trim();
  const val2 = input2.value.trim();

  // Reset error messages
  errorIn1.textContent = "";
  errorIn2.textContent = "";
  errorOper.textContent = "";
  result.textContent = "";

  // Validation
  if (val1 === "") {
    errorIn1.textContent = "Please enter a valid input for Number A";
    input1.style.border = "1px solid red";
  }
  else{
    errorIn1.textContent = "";
    input1.style.border = "none";
  }

  if (val2 === "") {
    errorIn2.textContent = "Please enter a valid input for Number B";
    input2.style.border = "1px solid red";
  }else{
    errorIn2.textContent = "";
    input2.style.border = "none";
  }

  if (oper === "") {
    errorOper.textContent = "Please select an operation";
    operation.style.border = "1px solid red";
  }else{
    errorOper.textContent = "";
    operation.style.border = "none";
  }

  const num1 = Number(val1);
  const num2 = Number(val2);
  let finalResult = 0;
  let expression = "";

  switch (oper) {
    case "add":
      finalResult = num1 + num2;
      expression = `${num1} + ${num2} = ${finalResult}`;
      break;
    case "subtract":
      finalResult = num1 - num2;
      expression = `${num1} - ${num2} = ${finalResult}`;
      break;
    case "multiply":
      finalResult = num1 * num2;
      expression = `${num1} × ${num2} = ${finalResult}`;
      break;
    case "divide":
      if (num2 === 0) {
        errorIn2.textContent = "Division by zero is not allowed";
        return;
      }
      finalResult = num1 / num2;
      expression = `${num1} ÷ ${num2} = ${finalResult.toFixed(2)}`;
      break;
    default:
      errorOper.textContent = "Invalid operation";
      operation.style.border = "1px solid red";
      return;
  }

  result.textContent = expression;

  // Add to history
  hisArr.unshift(expression);
  if (hisArr.length > 5) hisArr.pop();

  history1.textContent = hisArr[0] || "";
  history2.textContent = hisArr[1] || "";
  history3.textContent = hisArr[2] || "";
  history4.textContent = hisArr[3] || "";
  history5.textContent = hisArr[4] || "";
}

function clear() {
  input1.value = "";
  input2.value = "";
  operation.value = "";
  result.textContent = "";
  errorIn1.textContent = "";
  errorIn2.textContent = "";
  errorOper.textContent = "";
  input1.style.border = "none";
  input2.style.border = "none";
  operation.style.border = "none";
}

function clearHis() {
  hisArr = [];
  history1.textContent = "";
  history2.textContent = "";
  history3.textContent = "";
  history4.textContent = "";
  history5.textContent = "";
}
