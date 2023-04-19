const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');




const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    Symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
    const length = lengthEl.value;

    console.log(length);
});

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}
    
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getRandomSymbol() {
    const symbols = '!@#%&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}