// Pick a random number between 0 and 9 (0 and 9 included)
const feedbackEl = document.querySelector('.feedback');
let randomNumber = Math.floor(Math.random() * 10);
feedbackEl.innerHTML = 'Quale numero sto pensando?';

// Create user buttons
const buttonsEl = document.querySelector('.buttons');

for (let i = 0; i < 10; i++) {
    buttonsEl.innerHTML += `<button class="user-button">${i}</button>`;
}