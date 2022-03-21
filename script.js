const keys = document.querySelectorAll('.calculator');
const display = document.querySelector('.display');
const equal = document.querySelector('.equals');

keys.forEach(key => {
    key.addEventListener('click', displayNumbers)
})


function displayNumbers(e) {

    const key = e.target
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const dataType = key.dataset.type
    

   if (display.textContent === '0') {
        display.textContent = keyValue;
    } else if (display.textContent.length < 9) {
        display.textContent = displayValue + keyValue;
    }

    
    
    if (dataType === 'equals') {
        display.textContent = operate(displayValue)
    } else if (dataType === 'operator') {
        if (displayValue.includes('+') || displayValue.includes('-') || displayValue.includes('÷') || displayValue.includes('×')) {
            display.textContent = operate(displayValue)
            
        }
    }



    if (dataType === 'cancel') {
        display.textContent = '0'
    }
    

}




function operate(value) {
    const formula = value.split(/\D/);
    let operator = value.split(/\d/);

    operator = operator.filter((item) => {
        return item.length > 0
    })
    console.log(formula)


    operator = operator[0]


    first = parseInt(formula[0]);
    second = parseInt(formula[1]);
    console.log(first)
    console.log(second)
    console.log(operator)

    switch(operator) {
        case '+':
            return first + second;
            break;
        case '-':
            return first - second;
            break;
        case '×':
            return first * second;
            break;
        case '÷':
            return first / second;
            break;
    }
}





















    /*
    
    let operator;
    let first;

    if (dataType === 'operator') {
        operator = dataAction;
        first = displayValue;
        console.log(first)
        console.log(operator)
        
        display.textContent = ''
    } 
    
    
    
    if (dataType === 'equals') {
        second = displayValue;
        console.log(second)
        display.textContent = operate(first, operator, second);
    }*/




