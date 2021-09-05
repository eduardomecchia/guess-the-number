const feedbackEl = document.querySelector('.feedback');
const userNumberEl = document.querySelector('.user-number');
const overlayEl = document.querySelector('.overlay');
let randomNumber;
let userNumber;

// Add functionality to title screen buttons
const classicButton = document.querySelector('#classic');
const reversedButton = document.querySelector('#reversed');
const classicGame = document.querySelector('.container.classic');
const reversedGame = document.querySelector('.container.reversed');
const titleScreen = document.querySelector('.title-screen');

function showGameMode(button, element) {
    button.addEventListener('click', function () {
        titleScreen.style.display = 'none';
        element.style.display = 'block';
    });
}

showGameMode(classicButton, classicGame);
showGameMode(reversedButton, reversedGame);

// Add functionality to 'back' buttons
const backButtons = document.querySelectorAll('.back');

backButtons.forEach(button => {
    button.addEventListener('click', function () {
        classicGame.style.display = 'none';
        reversedGame.style.display = 'none';
        titleScreen.style.display = 'block';
    });
});

// Pick a random number between 0 and 9 (0 and 9 included)
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
const hardModeEl = document.querySelector('#hard');
const normalModeEl = document.querySelector('#normal');

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

