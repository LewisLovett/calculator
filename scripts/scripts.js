let currentTotalSum;
let modifier;
let currentNumber;

const handleNumberBtnClick = (event) => {
    if(currentNumber==0){
        currentNumber = Number(event.target.value);
    }else{
        currentNumber = Number(`${currentNumber}${event.target.value}`);
    }
    
    console.log(currentNumber);
    displayInputs(event.target.value);
}

const handleModifierBtnClick = (event) => {
    modifier = event.target.value;
    displayInputs(modifier);
}

const displayInputs = (input) =>{
    document.querySelector(".calcContainer__numInfo--input").value += input;
}

const clearCalculator = () =>{
    document.querySelector(".calcContainer__numInfo--input").value = "";
    document.querySelector(".calcContainer__numInfo--output").value = 0;
    currentTotalSum = 0;
    modifier = "";
    currentNumber = 0;
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

    document.querySelector(".clearButton").addEventListener("click", clearCalculator);
}

attachEvents();