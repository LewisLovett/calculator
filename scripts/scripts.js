let currentTotalSum = 0;
let prevModifier;
let newModifier;
let currentNumber = 0;
let pastFirstNumber = false; //Checks if the user has entered a second number -- used in calculate() function
let prevInputModifier = false; // Checks if prev input was a modifier to prevent multiple modifiers being input
let firstNumberInputted = false; //Checks if the first number has been inputted so the user cannot enter a modifer as the first input;
let decimalSelected = false;
let decimalNumberToAdd = "0.";


//Function for when the user clicks a number button. If statement is used for multiple digits
const handleNumberBtnClick = (event) => {
    if (decimalSelected){
        decimalNumberToAdd += event.target.value;
        document.querySelector(".calcContainer__numInfo--input").value += event.target.value;
    }else{
    firstNumberInputted = true;
    if(currentNumber==0){
        currentNumber = Number(event.target.value);
    }else{
        currentNumber = Number(`${currentNumber}${event.target.value}`);
    }
    displayInputs(event.target.value);
    prevInputModifier = false;}
}

//Function for when the user click a modifier button. If statement checks if the previous input is a modifier. 
//If true then the new modifier replaces the previous modifier.
const handleModifierBtnClick = (event) => {
    if(firstNumberInputted){
        if(!prevInputModifier){
            prevModifier = newModifier;
        }else{
            let htmlInput = document.querySelector(".calcContainer__numInfo--input").value;
            document.querySelector(".calcContainer__numInfo--input").value = htmlInput.slice(0,-1);
        }
        newModifier = event.target.value;
        displayInputs(newModifier);
        calculate();
        prevInputModifier = true;
    }
}

//Function for when the user clicks equals button
const handleEqualBtnClick = () =>{
    prevModifier = newModifier;
    calculate();
    clearAllExptOutput();
}

//Function that uses the modifier variable to calculate the new total sum. When ever a modifier button is clicked the 
//calculate function is run exept for the very first time one has been clicked after a number has been inputted because
// at that point only one number has been inputted so no sum can take place
const calculate = () => {
    if(decimalSelected){
        currentNumber += Number(decimalNumberToAdd);
        decimalSelected = false;
    }
    if (pastFirstNumber == true){
    switch(prevModifier) {
        case "+":
            currentTotalSum += currentNumber;
            break;
        case "-":
            currentTotalSum -= currentNumber;
            break;
        case "X":
            currentTotalSum *= currentNumber;
            break;
        case "/":
            currentTotalSum /= currentNumber;
            break;
    }
    }else{
        currentTotalSum = currentNumber;
        pastFirstNumber = true;
    }
    displayOutput();
    currentNumber = 0;
    decimalNumberToAdd = "0."
    
}


const displayInputs = (input) =>{
    document.querySelector(".calcContainer__numInfo--input").value += input;
}

const displayOutput = () =>{
    document.querySelector(".calcContainer__numInfo--output").value = currentTotalSum;
}

//Function that resets variables and the output. Used when = is pressed
const clearAllExptOutput = () =>{
    document.querySelector(".calcContainer__numInfo--input").value = "";
    currentTotalSum = 0;
    prevModifier = "";
    newModifier = "";
    currentNumber = 0;
    pastFirstNumber = false;
    prevInputModifier = false;
    firstNumberInputted = false;
    decimalSelected = false;
    decimalNumberToAdd = "0.";
}

//Function that runs when the C button is clicked. Resets the calculator
const handleClearBtnClick = () =>{
    clearAllExptOutput();
    document.querySelector(".calcContainer__numInfo--output").value = 0;
    
}

//Handle +/- button. Takes the current number, removes it from the input html, multiples it by -1 to turn to either positive or negative
//then adds the new value to the input html.
const handlePosNegBtnClick = () =>{
    let htmlInput = document.querySelector(".calcContainer__numInfo--input").value;
    let lengthOfCurrentNum = currentNumber.toString().length;
    document.querySelector(".calcContainer__numInfo--input").value = htmlInput.slice(0,-lengthOfCurrentNum );
    currentNumber *= -1;
    document.querySelector(".calcContainer__numInfo--input").value += currentNumber;
}

//Handle percentage button.Removes current number from input html. Takes the current number and divides it by 100
// and displays the percentage in the input html.
const handlePercentButton = () => {
    let lengthOfCurrentNumber = String(currentNumber).length;
    let htmlInput = document.querySelector(".calcContainer__numInfo--input").value;
    document.querySelector(".calcContainer__numInfo--input").value = htmlInput.slice(0,-lengthOfCurrentNumber);
    currentNumber /= 100;
    document.querySelector(".calcContainer__numInfo--input").value += currentNumber;
}

const handleDecimalButton = () => {
    decimalSelected = true;
    document.querySelector(".calcContainer__numInfo--input").value += ".";
}


//Function to attach events to html
const attachEvents = () => {
    const numberButtons = document.querySelectorAll(".numButton");
    numberButtons.forEach(numButton => {
        numButton.addEventListener("click", handleNumberBtnClick);
    });

    const modifierButtons = document.querySelectorAll(".modButton");
    modifierButtons.forEach(modButton => {
        modButton.addEventListener("click", handleModifierBtnClick);
    });

    document.querySelector(".clearButton").addEventListener("click", handleClearBtnClick);
    document.querySelector(".equalButton").addEventListener("click", handleEqualBtnClick);
    document.querySelector(".percentButton").addEventListener("click", handlePercentButton);
    document.querySelector(".decimalButton").addEventListener("click", handleDecimalButton);
    document.querySelector(".posNegButton").addEventListener("click", handlePosNegBtnClick);
}

attachEvents();