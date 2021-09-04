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

// Change feedback field based on what the user clicked
const activateButtons = () => {
    let buttonsContainer = document.querySelectorAll('.user-button');

    buttonsContainer.forEach(button => {
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
}

activateButtons();

// Difficulty setting management
const hardModeEl = document.querySelector('.hard-mode');
const normalModeEl = document.querySelector('.normal-mode');

// From normal to hard
hardModeEl.addEventListener('click', function () {
    buttonsEl.innerHTML = '';
    userNumberEl.innerHTML = 'Numero scelto:';
    resetFeedback();

    for (let i = 0; i < 100; i++) {
        buttonsEl.innerHTML += `<button class="user-button">${i}</button>`;
    }

    hardModeEl.style.display = 'none';
    normalModeEl.style.display = 'block';

    activateButtons();
});

// From hard to normal
normalModeEl.addEventListener('click', function () {
    buttonsEl.innerHTML = '';
    userNumberEl.innerHTML = 'Numero scelto:';
    resetFeedback();

    for (let i = 0; i < 10; i++) {
        buttonsEl.innerHTML += `<button class="user-button">${i}</button>`;
    }

    normalModeEl.style.display = 'none';
    hardModeEl.style.display = 'block';

    activateButtons();
});

