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
        value.innerHTML = add(num1, num2);
    } else if (op === "-"){
        value.innerHTML = subtract(num1, num2);
    } else if (op === "*"){
        value.innerHTML = multiply(num1, num2);
    } else if (op === "/"){
        value.innerHTML = divide(num1, num2);
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
    localStorage.setItem('.answer',value.innerHTML);
};

//recall display value
const selected = document.querySelector('.selected');
function restoreData() {
    selected.innerHTML = localStorage.getItem('.answer',value.innerHTML);
    value.innerHTML = '';
}

const del = document.querySelector('.clear');
del.addEventListener('click', () => {
    value.innerHTML = "";
});

function clearScreen() {
    value.innerHTML = '';
    selected.innerHTML = '';
    operator.innerHTML = '';
}

const clear = document.querySelector('.clearAll');
clear.addEventListener('click', () => {
    clearScreen();
});

function equal() {
    operate(selected.innerHTML, value.innerHTML, operator.innerHTML);
    selected.innerHTML = '';
    operator.innerHTML = '';

}

const Equal = document.querySelector('.equal');
Equal.addEventListener('click', () => {
    equal();
});

//operators
//operates if number slots are not empty
const operator = document.querySelector('.operator');

function ADDITION() {
    if(operator.innerHTML === '') {
        selected.innerHTML = value.innerHTML;
        value.innerHTML = '';
        operator.innerHTML = '+';
    } else {
        equal();
        selected.innerHTML = value.innerHTML;
        value.innerHTML = '';
        operator.innerHTML = '+';
    }
}

const Addition = document.querySelector('#Addition');
Addition.addEventListener('click', () => {
    ADDITION();
});

function SUB() {
    if (operator.innerHTML === '') {
        selected.innerHTML = value.innerHTML;
        value.innerHTML = '';
        operator.innerHTML = '-';
    } else {
        equal();
        selected.innerHTML = value.innerHTML;
        value.innerHTML = '';
        operator.innerHTML = '-';
    }
}

const Sub = document.querySelector('#Sub');
Sub.addEventListener('click', () => {
    SUB();
});

function DIVIDE() {
    if (operator.innerHTML === ''){
        selected.innerHTML = value.innerHTML;
        value.innerHTML = '';
        operator.innerHTML = '/';
    } else {
        equal();
        selected.innerHTML = value.innerHTML;
        value.innerHTML = '';
        operator.innerHTML = '/';
    }
}

const Divide = document.querySelector('#Divide');
Divide.addEventListener('click', () => {
    DIVIDE();
});

function MULT() {
    if(operator.innerHTML === '') {
        selected.innerHTML = value.innerHTML;
        value.innerHTML = '';
        operator.innerHTML = '*';
    } else {
        equal();
        selected.innerHTML = value.innerHTML;
        value.innerHTML = '';
        operator.innerHTML = '*';
    }
}

const Mult = document.querySelector('#Mult');
Mult.addEventListener('click', () => {
    MULT();
});