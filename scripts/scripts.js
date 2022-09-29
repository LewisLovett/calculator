let currentTotalSum;
let modifier;
let currentNumber;

const handleNumberBtnClick = (event) => {
    currentNumber = event.target.value;
    console.log(currentNumber);
}


const attachEvents = () => {
    numberButtons = document.querySelectorAll(".numButton");
    numberButtons.forEach(numButton => {
        addEventListener("click", handleNumberBtnClick);
    });
}
attachEvents();