// Pick a random number between 0 and 9 (0 and 9 included)
const feedbackEl = document.querySelector('.feedback');
const userNumberEl = document.querySelector('.user-number');
const overlayEl = document.querySelector('.overlay');
let randomNumber;
let userNumber;

function resetFeedback() {
    randomNumber = Math.floor(Math.random() * 10);
    feedbackEl.innerHTML = 'Quale numero sto pensando?';
}

resetFeedback();

// Create user buttons
const buttonsEl = document.querySelector('.buttons');

for (let i = 0; i < 10; i++) {
    buttonsEl.innerHTML += `<button class="user-button">${i}</button>`;
}

// Add functionality to buttons on click
function chooseNumber(element) {
    userNumber = element.innerHTML;
    userNumberEl.innerHTML = 'Numero scelto:';
    userNumberEl.innerHTML += ' ' + userNumber;

    return element.innerHTML;
}

const allButtons = document.querySelectorAll('.user-button');

// Change feedback field based on what the user clicked
allButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (chooseNumber(button) == randomNumber) {
            feedbackEl.innerHTML = 'Esatto!';

            // Disable game until it restarts
            overlayEl.style.display = 'block';

            setTimeout(function() {
                overlayEl.style.display = 'none';
                userNumberEl.innerHTML = 'Numero scelto:';
                resetFeedback();
            }, 3000);
        } else if (chooseNumber(button) < randomNumber) {
            feedbackEl.innerHTML = 'Più alto!';
        } else if (chooseNumber(button) > randomNumber) {
            feedbackEl.innerHTML = 'Più basso!';
        }
    });
});

