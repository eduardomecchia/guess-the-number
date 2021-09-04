// Pick a random number between 0 and 9 (0 and 9 included)
const feedbackEl = document.querySelector('.feedback');
let randomNumber = Math.floor(Math.random() * 10);
feedbackEl.innerHTML = 'Quale numero sto pensando?';

// Create user buttons
const buttonsEl = document.querySelector('.buttons');

for (let i = 0; i < 10; i++) {
    buttonsEl.innerHTML += `<button class="user-button">${i}</button>`;
}

// Add functionality to buttons on click
function chooseNumber(element) {
    return element.innerHTML;
}

const allButtons = document.querySelectorAll('.user-button');

// Change feedback field based on what the user clicked
allButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (chooseNumber(button) == randomNumber) {
            feedbackEl.innerHTML = 'Esatto!';
        } else if (chooseNumber(button) < randomNumber) {
            feedbackEl.innerHTML = 'Più alto!';
        } else if (chooseNumber(button) > randomNumber) {
            feedbackEl.innerHTML = 'Più basso!';
        }
    });
});

