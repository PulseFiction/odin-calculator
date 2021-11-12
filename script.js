const buttons = document.querySelectorAll('button');
const output = document.querySelector('.display');

buttons.forEach(button => {
    let numbers = [];
    button.addEventListener('click', () => {
        output.textContent = button.textContent;
        numbers.push(button.textContent);
        
    })
    
    
})