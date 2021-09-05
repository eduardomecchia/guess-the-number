// Reversed mode
const higherButton = document.querySelector('#higher');
const lowerButton = document.querySelector('#lower');
const correctButton = document.querySelector('#correct');
const computerNumberEl = document.querySelector('.computer-number');

let activeGame = false;

function computerGuess() {
    return Math.floor(Math.random() * 10);
}

const updateComputerField = () => {
    computerNumberEl.innerHTML = 'Il computer ha scelto il numero: ' + computerGuess();
};

// Start the game
const beginButton = document.querySelector('#begin');

beginButton.addEventListener('click', function () {
    if (!activeGame) {
        activeGame = true;
        updateComputerField();
    }
});

// When you press 'Higher', the computer guesses a higher number
higherButton.addEventListener('click', function () {
    if (activeGame) {
        let oldComputerNumber = computerNumberEl.innerHTML.slice(-1);
        let newComputerNumber = 0;
        newComputerNumber = computerGuess();
        
        while (newComputerNumber <= oldComputerNumber) {
            if (newComputerNumber == 9) return;
            newComputerNumber = computerGuess();
        }
    
        computerNumberEl.innerHTML = 'Il computer ha scelto il numero: ' + newComputerNumber;
    }
});

// When you press 'Lower', the computer guesses a lower number
lowerButton.addEventListener('click', function () {
    if (activeGame) {
        let oldComputerNumber = computerNumberEl.innerHTML.slice(-1);
        let newComputerNumber = 0;
        newComputerNumber = computerGuess();
    
        while (newComputerNumber >= oldComputerNumber) {
            if (newComputerNumber == 0) return;
            newComputerNumber = computerGuess();
        }
    
        computerNumberEl.innerHTML = 'Il computer ha scelto il numero: ' + newComputerNumber;
    }
});

// When you press 'Correct', the computer wins
correctButton.addEventListener('click', function () {
    if (activeGame) {
        computerNumberEl.innerHTML = 'Ci ho azzeccato!';
        activeGame = false;
    }
});
