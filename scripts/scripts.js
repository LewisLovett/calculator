let currentTotalSum = 0;
let modifier;
let currentNumber = 0;
let pastFirstNumber = false;

const handleNumberBtnClick = (event) => {
    if(currentNumber==0){
        currentNumber = Number(event.target.value);
    }else{
        currentNumber = Number(`${currentNumber}${event.target.value}`);
    }
    displayInputs(event.target.value);
}

const handleModifierBtnClick = (event) => {
    modifier = event.target.value;
    console.log(modifier);
    displayInputs(modifier);
    calculate();
}

const handleEqualBtnClick = () =>{
    calculate();
    document.querySelector(".calcContainer__numInfo--input").value = "";
    currentTotalSum = 0;
    modifier = "";
    currentNumber = 0;
}

const calculate = () => {
    if (pastFirstNumber == true){
    switch(modifier) {
        case "+":
            currentTotalSum += currentNumber;
            break;
        case "-":
            currentTotalSum -= currentNumber;
            
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
const handleClearBtnClick = () =>{
    document.querySelector(".calcContainer__numInfo--input").value = "";
    document.querySelector(".calcContainer__numInfo--output").value = 0;
    currentTotalSum = 0;
    modifier = "";
    currentNumber = 0;
    pastFirstNumber = false;
}



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