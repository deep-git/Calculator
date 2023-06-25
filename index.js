
const displayValue = document.querySelector(".calculation_display");
const displayTotalValue = document.querySelector(".value_display");
const numberButtons = document.querySelectorAll(".btn_number");
const btnClear = document.querySelector("#btn_clear");
const btnDelete = document.querySelector("#btn_delete");
const btnEquals = document.querySelector(".main_controls");
const calculateButtons = document.querySelectorAll(".btn_calculate");

let currentValue = "";
const ops = ["+", "-", "*", "/", "."];
let totalValue;

const addValues = (value) => {
    if (ops.includes(value) && currentValue === "" || ops.includes(value) && ops.includes(currentValue.slice(-1))) {
        return;
    }

    if (value === ".") {
        for(let i = currentValue.length - 1; i >= 0; i--) {
            if (ops.includes(currentValue[i]) && currentValue[i] !== ".") {
                let char1 = currentValue.substring(i, currentValue.length);

                if (char1.includes(".")) {
                    return
                }
            }
        }
    }

    currentValue = currentValue + value;
    displayValue.innerHTML = currentValue;
}

const equalValues = () => {
    totalValue = eval(currentValue);
    displayTotalValue.innerHTML = totalValue;
    currentValue = "";
    currentValue = currentValue + totalValue;
    displayValue.innerHTML = currentValue;
}

const clearValues = () => {
    totalValue = 0;
    currentValue = "";
    displayValue.innerHTML = currentValue;
    displayTotalValue.innerHTML = totalValue;
}

const deleteValues = () => {
    currentValue = currentValue.slice(0, -1);
    displayValue.innerHTML = currentValue;
}

numberButtons.forEach(function(btn) {
    btn.addEventListener("click", () => addValues(btn.innerHTML));
});

calculateButtons.forEach(function(btn) {
    btn.addEventListener("click", () => addValues(btn.innerHTML));
});

btnClear.addEventListener("click", () => clearValues());

btnDelete.addEventListener("click", () => deleteValues());

btnEquals.addEventListener("click", () => equalValues());