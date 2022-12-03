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
const answContainer = document.querySelector('.answers-container');

const showAnswBtnsWhenStart = () => {
    //gör en funktion här som jag kan kalla på för varje startklick (all, 10,20 val)
    startGameContainer.style = 'display: none';
    studentImage.style = 'display: block';
    answBtns.style = 'display: block';
    answBtns.forEach( answBtn => {
       return answBtn.style = 'display: block';
    }); 
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
let i = 0;
let chosenStudents = 0;
let amountOfGuesses = 0;
let studentIndex = 0;
// let gameOn = false;
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

// Måste loopa över denna enligt vald mängd gissningar
// på ngågot sätt, men vill ju inte få hela loopen på samma 
// gång utan klicka och välja emellan
const setUpNewGuess = () => {
    // shuffleArray(chosenStudents); //sluta shuffla denna och shift() 
                                  // bort [0] hela tiden tills img är slut
    shuffleArray(allStudents);                           
    //Setting the first chosen image and starting game
    studentImage.setAttribute('src', chosenStudents[studentIndex].image);

    shuffleArray(answBtnArray);
    //randomizing right answer button
    answBtnArray[0].innerHTML = `${chosenStudents[studentIndex].name}`;
    
    let allRandomStudents = allStudents.filter( student => {
        return student.name !== chosenStudents[studentIndex].name
    });
    answBtnArray[1].innerHTML = `${allRandomStudents[1].name}`;
    answBtnArray[2].innerHTML = `${allRandomStudents[2].name}`;
    answBtnArray[3].innerHTML = `${allRandomStudents[3].name}`;
          
}



//choose between ALL, 10 or 20 guesses
const clickToChooseAmountOfStudents = () => {

    guessAllBtn.addEventListener('click', () => {
        //välj ALLA studenter och starta spel
        chosenStudents = allStudents; 
        amountOfGuesses = chosenStudents.length;

        // showAnswBtnsWhenStart();
        console.log('"All" is clicked');

        // gameOn = true;
        gameOnFunc();

        // får ev fortsätta hela spelet 
        // här inne i respektive scope? 
        // Kan ta funktioner från utsidan 
        // och sätta in för att kunna använda 
        // chosenStudents nya värde.
        // annars en callback funktion:
        // se weather app app.js renderCurrentWeather(data);
        // där jag sätter in chosenStudent som parameter
        // typ setUpNewGuess(chosenStudents); kanske?
        
    });
    guessTenBtn.addEventListener('click', () => { // kan man skriva guessTenBtn.addEventListener('click', () => {}); och returnera värdet från en if-sats ist?
        //slumpa 10 studenter och starta spel
            // slumpa med Fisher-Yates ✅
        chosenStudents = allStudents.slice(0,11); //slumpa ut 10 stycken and slice()? out the 10 first? eller borde finnas en annan metod .filter[0-9]? + .map(student.name) för att få ut namnen 
        amountOfGuesses = chosenStudents.length-1; //eller 10

        // //hide startGameContainer and show studentImage + all game buttons
        // showAnswBtnsWhenStart();
        console.log('"10" is clicked');

        gameOnFunc();
            
    });
    guessTwentyBtn.addEventListener('click', () => {
    //slumpa 20 bilder och starta spel
        // slumpa med Fisher-Yates
        chosenStudents = allStudents.slice(0,21); //slumpa ut 10 stycken
        amountOfGuesses = chosenStudents.length-1;
        //Setting the first chosen image and starting game
        // setUpNewGuess();
        //hide startGameContainer and show studentImage + all game buttons
        // showAnswBtnsWhenStart();
        console.log('"20" is clicked');

        gameOnFunc();
    });
}

clickToChooseAmountOfStudents();

let totalGuesses = 0;
let rightGuesses = 0;
// en funktion för 1 spelomgång 
const gameOnFunc = () => {
   

     // // Setting the first chosen image and starting game
    setUpNewGuess();
    // // hide startGameContainer and show studentImage + all game buttons
    showAnswBtnsWhenStart(); 

   /*  // kan man göra en if-sats
     else if(e.target.innerHTML === chosenStudents[studentIndex].name &&){
        samma som i gissa rätt men att totalguesses inte blir ++?
        nej. egetligen måste jag få ett 11e klick för att komma in i 
        if(totalGuesses >= amountOfGuesses){} och då gör jag ju en extra gissning
        jag skulle behövt if(totalGuesses >= amountOfGuesses)
        utanför och efter. hmm kanske som en funktion??

    } */

    answContainer.addEventListener('click', (e) => {
        if(e.target.innerHTML === chosenStudents[studentIndex].name) { //
            console.log("You clicked the right name")
            rightGuesses ++;
            totalGuesses ++; 
            // skriv ut på något sätt att det är rätt svar:
            // kan kanske bara skriva i ett htmlEl under bilden 
            // så det inte blir bökigt
            // chosenStudents.shift()
            studentIndex++;
            gameFinished();
            setUpNewGuess();
            // // hide startGameContainer and show studentImage + all game buttons
            showAnswBtnsWhenStart();
        } else if(e.target.innerHTML !== chosenStudents[studentIndex].name){
            console.log("Clicked wrong name")
            // chosenStudents.shift()
            totalGuesses ++;
            // visa på ngt sätt att det var fel och skriv ut rätt svar 
            // rätt svar:
            // chosenStudents.shift();
            studentIndex++;
            gameFinished();
            setUpNewGuess();
            // hide startGameContainer and show studentImage + all game buttons
            showAnswBtnsWhenStart();
        } else if(e.target.innerHTML === 'Quit Game 😾'){
            // targeta denna m dataset-* attribut?
            console.log("Y U quit game?")                        
            rightGuesses = 0;
            totalGuesses = 0;
            // gameOn = false;
            // quitGame = true;
            clickToChooseAmountOfStudents();
        }
    });
}

const gameFinished = () => {
    if(totalGuesses >= amountOfGuesses){
        //avsluta spel och visa resultat
        studentImage.setAttribute('src', 'http://placekitten.com/300/300');
        answContainer.innerHTML = `
        <p>You made ${rightGuesses} right guesses out of ${totalGuesses} total guesses</p>
        `;
    
        console.log(`totalguesses of: ${totalGuesses} is reached`)
    }  
}



// Hur kan jag få spelet att köra 
// om och om igen igenom valt antal elever?
// något med while(gameOn && totalGuesses <= chosenStudents.length)
// kanske? (se while-loopen ovan)

//how to write total score: `you've got ${rightGuesses}/${totalGuesses} right!`
// make an htmlEl to print this in

// EXTRAPILL vid rätt och fel svar, om jag hinner:

    // // timer. fixa med denna när spelet funkar någolunda
        // setTimeout(() => {
    //     // gör knappen grön i 2 sek och ta bort de andra namnen
    //          answBtn[rätt].classList.add(gör css-style grön färg);
    //          answBtn[alla som är fel].style('display', 'hidden');
    // }, 2000);
    // // Setting the first chosen image and starting game

 // setTimeout(() => {
    //     //visar valt svar som en röd knapp i 2 sek
    //     answBtn[felVal].classList.add(gör en css-style med röd färg);               
        //            // timer
        //            setTimeout(() => {
    //                 //visar rätt svar som en grön knapp i 4 sek samtidigt som de andra knapparna försvinner
    //                 answBtn[rättVal].classList.add(css-style med grön färg);
    //                 answBtn[felVal].style('display', 'hidden');
    //                     answBtn[alla som är fel].style('display', 'block')
    //            }, 2000);
    // }, 2000);
    // Setting the first chosen image and starting game