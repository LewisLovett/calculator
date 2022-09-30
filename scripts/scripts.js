let currentTotalSum;
let modifier;
let currentNumber;

const handleNumberBtnClick = (event) => {
    currentNumber = event.target.value;
    displayInputs(currentNumber);
}

const handleModifierBtnClick = (event) => {
    modifier = event.target.value;
    displayInputs(modifier);
}

const displayInputs = (input) =>{
    document.querySelector(".calcContainer__numInfo--input").value += input;
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
}

attachEvents();