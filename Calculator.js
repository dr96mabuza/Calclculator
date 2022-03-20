function add(num1, num2) {
    let answer = Number(num1) + Number(num2);
    if (answer % 1 > 0) {
        return answer.toFixed(3);
    } else {
        return answer;
    }
}

function subtract(num1, num2) {
    let answer = num1 - num2;
    if (answer % 1 > 0) {
        return answer.toFixed(3);
    } else {
        return answer;
    }
}

function multiply(num1, num2) {
    let answer = num1 * num2;
    if (answer % 1 > 0) {
        return answer.toFixed(3);
    } else {
        return answer;
    }
}

function divide(num1, num2) {
    let answer = num1 / num2;
    if (answer % 1 > 0) {
        return answer.toFixed(3);
    } else {
        return answer;
    }
}

function operate(num1, num2, op) {
    if (op === "+"){
        value.textContent = add(num1, num2);
    } else if (op === "-"){
        value.textContent = subtract(num1, num2);
    } else if (op === "*"){
        value.textContent = multiply(num1, num2);
    } else if (op === "/"){
        value.textContent = divide(num1, num2);
    }
}

//EventListner for each button
//displays values
const buttons = document.querySelectorAll('.displayValue');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.answer').textContent += button.textContent;
    });
});

//saves display value in local storage
const value = document.querySelector('.answer');
function saveData() {
    localStorage.setItem('.answer',value.textContent);
};

//recall display value
const selected = document.querySelector('.selected');
function restoreData() {
    selected.textContent = localStorage.getItem('.answer',value.innerHTML);
    value.textContent = '';
}

const del = document.querySelector('.clear');
del.addEventListener('click', () => {
    value.textContent = "";
});

function clearScreen() {
    value.textContent = '';
    selected.textContent = '';
    operator.textContent = '';
}

const clear = document.querySelector('.clearAll');
clear.addEventListener('click', () => {
    clearScreen();
});

function equal() {
    operate(selected.textContent, value.textContent, operator.textContent);
    selected.textContent = '';
    operator.textContent = '';

}

const Equal = document.querySelector('.equal');
Equal.addEventListener('click', () => {
    equal();
});

//operators
//operates if number slots are not empty
const operator = document.querySelector('.operator');

function ADDITION() {
    if(operator.textContent === '') {
        selected.textContent = value.textContent;
        value.textContent = '';
        operator.textContent = '+';
    } else {
        equal();
        selected.textContent = value.textContent;
        value.textContent = '';
        operator.textContent = '+';
    }
}

const Addition = document.querySelector('#Addition');
Addition.addEventListener('click', () => {
    ADDITION();
});

function SUB() {
    if (operator.textContent === '') {
        selected.textContent = value.textContent;
        value.textContent = '';
        operator.textContent = '-';
    } else {
        equal();
        selected.textContent = value.textContent;
        value.textContent = '';
        operator.textContent = '-';
    }
}

const Sub = document.querySelector('#Sub');
Sub.addEventListener('click', () => {
    SUB();
});

function DIVIDE() {
    if (operator.textContent === ''){
        selected.textContent = value.textContent;
        value.textContent = '';
        operator.textContent = '/';
    } else {
        equal();
        selected.textContent = value.textContent;
        value.textContent = '';
        operator.textContent = '/';
    }
}

const Divide = document.querySelector('#Divide');
Divide.addEventListener('click', () => {
    DIVIDE();
});

function MULT() {
    if(operator.textContent === '') {
        selected.textContent = value.textContent;
        value.textContent = '';
        operator.textContent = '*';
    } else {
        equal();
        selected.textContent = value.textContent;
        value.textContent = '';
        operator.textContent = '*';
    }
}

const Mult = document.querySelector('#Mult');
Mult.addEventListener('click', () => {
    MULT();
});