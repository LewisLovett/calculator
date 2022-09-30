let prevTotalSum = 0;
let currentTotalSum = 0;
let prevModifier;
let modifier;
let currentNumber = 0;
let pastFirstNumber = false;
let prevInputMultiplier = false;


//Function for when the user clicks a number button. If statement is used for multiple digits
const handleNumberBtnClick = (event) => {
    if(currentNumber==0){
        currentNumber = Number(event.target.value);
    }else{
        currentNumber = Number(`${currentNumber}${event.target.value}`);
    }
    displayInputs(event.target.value);
    prevInputMultiplier = false;
}

//Function for when the user click a modifier button. If statement checks if the previous input is a multiplier. 
//If true then the new modifier replaces the previous modifier.
const handleModifierBtnClick = (event) => {
    prevModifier = modifier;
    modifier = event.target.value;
    if(!prevInputMultiplier){
        displayInputs(modifier);
    }else{
        let htmlInput = document.querySelector(".calcContainer__numInfo--input").value;
        document.querySelector(".calcContainer__numInfo--input").value = htmlInput.slice(0,-1);
        displayInputs(modifier);
    }
    
    calculate();
    prevInputMultiplier = true;
}

//Function for when the user clicks equals button
const handleEqualBtnClick = () =>{
    prevModifier = modifier;
    calculate();
    clearAllExptOutput();
}

//Function that uses the modifier variable to calculate the new total sum. Checks if it the first input so it won't calculate
//if there is only a single input.
const calculate = () => {
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
        default:
            console.log("error");
    }
    }else{
        currentTotalSum = currentNumber;
        pastFirstNumber = true;
    }
    displayOutput();
    currentNumber = 0;
    
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
    modifier = "";
    currentNumber = 0;
    pastFirstNumber = false;
}

//Function that runs when the C button is clicked. Resets the calculator
const handleClearBtnClick = () =>{
    clearAllExptOutput();
    document.querySelector(".calcContainer__numInfo--output").value = 0;
    
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
}

attachEvents();