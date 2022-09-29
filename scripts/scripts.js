let currentTotalSum;
let modifier;
let currentNumber;

const handleNumberBtnClick = (event) => {
    currentNumber = event.target.value;
    console.log("num"+currentNumber);
}

const handleModifierBtnClick = (event) => {
    modifier = event.target.value;
    console.log("mod"+modifier);
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