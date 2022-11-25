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

const shuffleStudents = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}


// kanske en while som omsluter all nedan kod som i guess the number 
// där man gör booleans för att avsluta och starta spel? 
// Då leder quit button till "startsidan" med att välja antal gissningar

shuffleStudents(students);

let chosenStudents;

// console.log(students);

//-------CLICK BUTTONS IN THE BEGINNING AND CHOOSE HOW MANY TO GUESS ON------

//choose between ALL, 10 or 20 guesses
guessAllBtn.addEventListener('click', (e) => {
    //välj ALLA studenter ✅ och starta spel
    chosenStudents = students; 

    console.log(chosenStudents);

    //hide startGameContainer and show studentImage + all game buttons ✅
   showBtnsWhenStart();
    console.log('"All" is clicked');
});
guessTenBtn.addEventListener('click', (e) => {
    //slumpa 10 studenter och starta spel
        // slumpa med Fisher-Yates ✅
        chosenStudents = students.slice(0,10); //slumpa ut 10 stycken and slice()? out the 10 first? eller borde finnas en annan metod .filter[0-9]? + .map(student.name) för att få ut namnen 

        console.log(chosenStudents);

    //hide startGameContainer and show studentImage + all game buttons
   showBtnsWhenStart();
   console.log('"10" is clicked');
});
guessTwentyBtn.addEventListener('click', (e) => {
    //slumpa 20 bilder och starta spel
        // slumpa med Fisher-Yates
        chosenStudents = students.slice(0,20); //slumpa ut 10 stycken

        console.log(chosenStudents);
    //hide startGameContainer and show studentImage + all game buttons
   showBtnsWhenStart();
    console.log('"20" is clicked');
});

//-------END OF CLICKING BUTTONS IN THE BEGINNING AND CHOOSE HOW MANY TO GUESS ON------

let rightGuesses;
let totalGuesses;

// students.map(student=> student.name); 
// skickar ut namnen i en array
// tilldela de sedan slumpad knapp mha fisher-yates?

//FIXA
// Slumpa fram namn på slumpade positioner samt bild 
// (typ slumpa tal 1-4 för position för det rätta namnet?)
// kan säkert använda Math.random när det bara är 1-4 på
//  positionen men fisher-yates på alla namn
// hur koppla rätt bild och 1 rätt namn på slumpad plats 
// samtidigt som 3 slumpade platser har slumpade namn?

// hårdkodat för nu, vill bara se så att det funkar och det gör det 🥳
studentImage.setAttribute('src', 'assets/images/students/andre_lang.jpg')

// då vill jag koda in image.value; (value? eller vad). hur vet jag vem som är vem? aaah













//how to write total score: `you've got ${rightGuesses}/${totalGuesses} right!`
// make an htmlEl to print this is