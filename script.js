const buttons = document.querySelectorAll('button');
const output = document.querySelector('.display');

buttons.forEach(button => {
    if (button.textContent === '1') {
        button.addEventListener('click', () => {
            output.textContent = button.textContent;
        });
    };
});