// FIXA
// när jag klickar på start-buttons (addeventlistener)
// så vill jag dölja elementet start-game-btn-container 
// och visa image + answers+quit-buttons setAttribute('display=none/block')

// query the guess-buttons
const guessAllBtn = document.querySelector('#btn-guess-all');
const guessTenBtn = document.querySelector('#btn-guess-ten');
const guessTwentyBtn = document.querySelector('#btn-guess-twenty');
const startGameContainer = document.querySelector('#start-game-container');
const studentImage = document.querySelector('#student-image');


//choose between ALL, 10 or 20 guesses
guessAllBtn.addEventListener('click', (e) => {
    //välj ALLA studenter och starta spel
    //dölj startGameContainer och visa studentImage
    startGameContainer.setAttribute('display', 'none');
    studentImage.setAttribute('display', 'block');
});
guessTenBtn.addEventListener('click', (e) => {
    //slumpa 10 studenter och starta spel
        // slumpa med Fisher-Yates
    startGameContainer.setAttribute('display', 'none');
    studentImage.setAttribute('display', 'block');
});
guessTwentyBtn.addEventListener('click', (e) => {
    //slumpa 20 bilder och starta spel
        // slumpa med Fisher-Yates
    startGameContainer.setAttribute('display', 'none');
    studentImage.setAttribute('display', 'block');
});

let guesses;
let totalScore;







//how to write total score: `you've got ${totalScore}/${guesses}`
// make an htmlEl to print this is