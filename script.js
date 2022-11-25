// FIXA ✅
// när jag klickar på start-buttons (addeventlistener)
// så vill jag dölja elementet start-game-btn-container 
// och visa image + answers+quit-buttons setAttribute('display=none/block')

// query the guess-buttons
const guessAllBtn = document.querySelector('#btn-guess-all');
const guessTenBtn = document.querySelector('#btn-guess-ten');
const guessTwentyBtn = document.querySelector('#btn-guess-twenty');
const startGameContainer = document.querySelector('#start-game-container');
const studentImage = document.querySelector('#student-image');
const answBtns = document.querySelectorAll('.answer-btns');
const quitBtn = document.querySelector('#quit-btn')


const showBtnsWhenStart = () => {
    //gör en funktion här som jag kan kalla på för varje startklick (all, 10,20 val)
    startGameContainer.style = 'display: none';
    studentImage.style = 'display: block';
    answBtns.style = 'display: block';
    answBtns.forEach( answBtn => {
       return answBtn.style = 'display: block';
    }); //funkar ej ännu
    quitBtn.style = 'display: flex';
}

//choose between ALL, 10 or 20 guesses
guessAllBtn.addEventListener('click', (e) => {
    //välj ALLA studenter och starta spel
    //hide startGameContainer and show studentImage + all game buttons
   showBtnsWhenStart();
    console.log('"All" is clicked');
});
guessTenBtn.addEventListener('click', (e) => {
    //slumpa 10 studenter och starta spel
        // slumpa med Fisher-Yates
    //hide startGameContainer and show studentImage + all game buttons
   showBtnsWhenStart();
   console.log('"10" is clicked');
});
guessTwentyBtn.addEventListener('click', (e) => {
    //slumpa 20 bilder och starta spel
        // slumpa med Fisher-Yates
    //hide startGameContainer and show studentImage + all game buttons
   showBtnsWhenStart();
    console.log('"20" is clicked');
});

let guesses;
let totalScore;

//FIXA
// Slumpa fram namn på slumpade positioner samt bild 
// (typ slumpa tal 1-4 för position för det rätta namnet?)
// kan säkert använda Math.random när det bara är 1-4 på
//  positionen men fisher-yates på alla namn
// hur koppla rätt bild och 1 rätt namn på slumpad plats 
// samtidigt som 3 slumpade platser har slumpade namn?







//how to write total score: `you've got ${totalScore}/${guesses}`
// make an htmlEl to print this is