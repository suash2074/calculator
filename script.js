let toggle = document.getElementById("toggle");
let inputArea = document.querySelector(".calculator .input_area");

toggle.addEventListener("change", function () {
    let buttons = document.querySelectorAll(
        ".calculator .numbers .row .buttons"
    );
    let screen = document.querySelectorAll(
        ".calculator .input_area .screen"
    );
    if (toggle.checked) {
        inputArea.classList.add("checked");
        screen.forEach(function (input) {
            input.style.color = "white";
            input.style.transition = "1s ease-in-out";
        });
        buttons.forEach(function (button) {
            button.style.color = "white";
            button.style.transition = "1s ease-in-out";
        });
    } else {
        inputArea.classList.remove("checked");

        screen.forEach(function (input) {
            input.style.color = "";
        });
        buttons.forEach(function (button) {
            button.style.color = "";
        });
    }
});

const all_buttons = document.querySelectorAll(".btn");
const display = document.getElementById("screen1");
const display2 = document.getElementById("screen2");

let currentNumber = "";
let operandValue = "";
all_buttons.forEach((bt) => {
    bt.addEventListener("click", (event) => {
        clickedNumber = event.target.innerHTML;
        if (clickedNumber == 1 || clickedNumber == 2 || clickedNumber == 3 || clickedNumber == 4 || clickedNumber == 5 || clickedNumber == 6 || clickedNumber == 7 || clickedNumber == 8 || clickedNumber == 9 || clickedNumber == 0) {
            const clickedOperand = bt.getAttribute("data-operand");

            // Check if clickedOperand is not null or undefined
            if (clickedOperand !== null) {
                operandValue = clickedOperand; // Set the operand value
                currentNumber += operandValue; // Append the operand value
            }

            currentNumber += clickedNumber; // Concatenate the clicked number
            const display = document.getElementById("screen1");
            display.value = currentNumber;

            const total = document.getElementById("total");
            total.addEventListener('click', (event) => {
                // answer = eval(currentNumber);
                // console.log(answer)
                // display2.value = answer;
                // currentNumber = 0;
                // display.value = reset;
                try {
                    const answer = eval(currentNumber);
                    if (isNaN(answer)) {
                        throw new Error("Invalid expression");
                    }
                    console.log(answer);
                    display2.value = answer;
                } catch (error) {
                    console.error(error.message);
                    display2.value = "Error";
                }
            });
        }
    });
});
const clear = document.querySelector(".clear");
clear.addEventListener('click', (event) => {

    currentNumber = "";
    display.value = currentNumber;
    display2.value = currentNumber;
});

