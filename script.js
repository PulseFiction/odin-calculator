const display = document.querySelector('.calculator__display');
const keys = document.querySelector('.calculator__keys');
const calculator = document.querySelector('.calculator');

keys.addEventListener('click', (e) => {
    if (!e.target.closest('button')) return;

    const key = e.target;
    const type = key.dataset.type;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType
    

     if (type === 'number') {
        if (displayedNum === '0') {
            display.textContent = keyContent;
        } else {
            display.textContent = displayedNum + keyContent;
        }
    } 
    
    if (type === 'decimal') {
        display.textContent = displayedNum + '.';
    }
    

    if (type === 'operator') {
        const operators = document.querySelectorAll('[data-type="operator"]')
        operators.forEach(el => {el.classList.remove('isDepressed')})
        key.classList.add('isDepressed')
        display.textContent = '';
        calculator.dataset.previousKeyType = action;
        calculator.dataset.firstNumber = displayedNum;
        // console.log(calculator.dataset.firstNumber)
       
    } else {
        const buttons = document.querySelectorAll('[data-type]');
        buttons.forEach(el => el.classList.remove('isDepressed'))
        
        
    }

    

    if (type != 'operator') {
        if (displayedNum === '0' || previousKeyType === 'operator') {
            display.textContent = keyContent;
        } else {
            display.textContent = displayedNum + keyContent;
        }
    }

    if (type === 'equals') {
        const firstNumber = calculator.dataset.firstNumber;
        const secondNumber = displayedNum;
        const operator = calculator.dataset.previousKeyType;
        // console.log(secondNumber)
        display.textContent = calculate(firstNumber, secondNumber, operator)
    }
    

    if (type === 'clear') {
        display.textContent = ''
    }

    
    

    
})









function calculate(firstNumber, secondNumber, operator) {

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    let result = '';
    if (operator === 'plus') {
        result = firstNumber + secondNumber;
    } else if (operator === 'minus') {
        result = firstNumber - secondNumber;
    } else if (operator === 'times') {
        result = firstNumber * secondNumber;
    } else if (operator === 'divide') {
        result = firstNumber / secondNumber;
    } else {
        result = '0';
    }
    return result;
    
    
};