// Reversed mode
const higherButton = document.querySelector('#higher');
const lowerButton = document.querySelector('#lower');
const correctButton = document.querySelector('#correct');
const computerNumberEl = document.querySelector('.computer-number');

function computerGuess() {
    return Math.floor(Math.random() * 10);
}

const updateComputerField = () => {
    computerNumberEl.innerHTML = 'Il computer ha scelto il numero: ' + computerGuess();
};

// Start the game
const beginButton = document.querySelector('#begin');

beginButton.addEventListener('click', function () {
    updateComputerField();
});

