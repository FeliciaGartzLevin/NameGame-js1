// I värsta fall om allt skiter sig så får jag göra en 
// HTML-lista med valda bilder där det finns 4 radiobtns 
// som val på varje och en submit-knapp längst ner som 
// räknar ihop poängen sen
//typ se Ninja Quiz

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
const quitBtn = document.querySelector('#quit-btn');
const answ1Btn = document.querySelector('#answ1');
const answ2Btn = document.querySelector('#answ2');
const answ3Btn = document.querySelector('#answ3');
const answ4Btn = document.querySelector('#answ4');

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

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

//cloning the students array into a new array
let allStudents = [...students];

shuffleArray(allStudents);

let chosenStudents;
// let gameOn=false;
const answBtnArray = [answ1Btn, answ2Btn, answ3Btn, answ4Btn];

// console.log(allStudents);

// kanske en while som omsluter all nedan kod som i guess the number 
// där man gör booleans för att avsluta och starta spel? 
// Då leder quit button till "startsidan" med att välja antal gissningar igen
//någonting sånthär?:
/* const gameOn=true;
quitBtn.addEventListener('click', () => {
    gameOn=false;
}); */

//-------CLICK BUTTONS IN THE BEGINNING AND CHOOSE HOW MANY STUDENTS TO GUESS ON------

const setUpNewGuess = () => {
    //Setting the first chosen image and starting game
    studentImage.setAttribute('src', chosenStudents[0].image);

    shuffleArray(answBtnArray);
    //randomizing right answer button
    answBtnArray[0].innerHTML = `${chosenStudents[0].name}`;
    answBtnArray[1].innerHTML = `${allStudents[1].name}`;
    answBtnArray[2].innerHTML = `${allStudents[2].name}`;
    answBtnArray[3].innerHTML = `${allStudents[3].name}`;
    //kan det skrivas såhär istället?
    
// chosenStudents.map(student=> student.name); 
// skickar ut namnen i en array

}

//choose between ALL, 10 or 20 guesses
const clickToChooseAmountOfStudents = () => {

    guessAllBtn.addEventListener('click', () => {
        //välj ALLA studenter ✅ och starta spel
        chosenStudents = allStudents; 
        
        console.log(chosenStudents);
         //Setting the first chosen image and starting game
         setUpNewGuess();

        //hide startGameContainer and show studentImage + all game buttons ✅
        showBtnsWhenStart();
        console.log('"All" is clicked');

        // gameOn = true;
        // får ev fortsätta hela spelet 
        // här inne i respektive scope? 
        // Kan ta funktioner från utsidan 
        // och sätta in.
        
    });
    guessTenBtn.addEventListener('click', () => {
        //slumpa 10 studenter och starta spel
            // slumpa med Fisher-Yates ✅
        chosenStudents = allStudents.slice(0,10); //slumpa ut 10 stycken and slice()? out the 10 first? eller borde finnas en annan metod .filter[0-9]? + .map(student.name) för att få ut namnen 

        // console.log(chosenStudents);
        //Setting the first chosen image and starting game
        setUpNewGuess();
        //hide startGameContainer and show studentImage + all game buttons
        showBtnsWhenStart();
        console.log('"10" is clicked');
    });
    guessTwentyBtn.addEventListener('click', () => {
    //slumpa 20 bilder och starta spel
        // slumpa med Fisher-Yates
        chosenStudents = allStudents.slice(0,20); //slumpa ut 10 stycken

        // console.log(chosenStudents);
            
        //Setting the first chosen image and starting game
        setUpNewGuess();
        //hide startGameContainer and show studentImage + all game buttons
        showBtnsWhenStart();
        console.log('"20" is clicked');
        return chosenStudents;
    });
}

clickToChooseAmountOfStudents();

//-------END OF CLICKING BUTTONS IN THE BEGINNING AND CHOOSE HOW MANY STUDENTS TO GUESS ON------


// hur kan jag få med det valda värdet ovan ut ur scopet i 
// variabeln chosenStudents och använda det? 
// tror jag har det nu iom funktionen. För i konsolen
// så ser jag mitt valda värde när jag skriver in chosenStudents
// console.log(chosenStudents); // hinner ej klicka på knapparna 
// innan denna skrivs ut i konsolen som undefined




//FIXA ✅
// Slumpa fram namn på slumpade positioner samt bild 
// (typ slumpa tal 1-4 för position för det rätta namnet?)
//slumpa fel namn från students och inte chosenStudents



// en if-sats för if I click the right answer etc
// hur ska jag göra för att känna av rätt click?
// if( answBtnArray[0]=== chosenStudents[0].name)

let rightGuesses;
let totalGuesses;

// ngt sånt här?:
 
while(gameOn){
    if(click på answBtn === rätt svar ) {
        rightGuesses ++;
        totalGuesses ++; //behöver ej egentligen räkna dessa utan bara ta 
                        //     chosenStudents.length för att veta hur många gissningar 
                        //     det blir, men vet ej hur jag ska få chosenStudents utanför scopet
        // skriv ut på något sätt att det är rätt svar
        setUpNewGuess();

    } else if(click på answBtn === !rätt svar){
        totalGuesses ++;
        // visa på ngt sätt att det var fel och skriv ut 
        // rätt svar: 
        setUpNewGuess();
    } else if(click på quitBtn){
        gameOn=false;
    }

} 














//how to write total score: `you've got ${rightGuesses}/${totalGuesses} right!`
// make an htmlEl to print this in