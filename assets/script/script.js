'use strict'

const display = document.querySelector('.display');
let numbers = document.querySelectorAll('.btn');
const btnOperand = document.querySelector('.btn-calc');
const clearAll = document.querySelector('.btn-clear-all');


const updateDisplay = ( text ) => {
    display.textContent += text;
}

const addNumber = ( event ) => updateDisplay(event.target.textContent);
numbers.forEach (number => number.addEventListener('click',  addNumber));

