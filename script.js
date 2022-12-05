
// query the guess-buttons
const guessAllBtn = document.querySelector('#btn-guess-all');
const guessTenBtn = document.querySelector('#btn-guess-ten');
const guessTwentyBtn = document.querySelector('#btn-guess-twenty');
const startGameContainer = document.querySelector('#start-game-container');
const studentImage = document.querySelector('#student-image');
const answBtns = document.querySelectorAll('.answer-btns');
const allAnswBtns = document.getElementsByClassName('answer-btns');
const quitBtn = document.querySelector('#quit-btn');
const answ1Btn = document.querySelector('#answ1');
const answ2Btn = document.querySelector('#answ2');
const answ3Btn = document.querySelector('#answ3');
const answ4Btn = document.querySelector('#answ4');
const answContainer = document.querySelector('.answers-container');
const gameEnded = document.querySelector('.gameEnded');

const showAnswBtnsWhenStart = () => {
    startGameContainer.style = 'display: none';
    studentImage.style = 'display: block';
    answBtns.forEach( answBtn => {
       return answBtn.style = 'display: block';
    }); 
    quitBtn.style = 'display: flex';
}

const chooseAmountOfGuesses = () => {
    startGameContainer.style = 'display: flex';
    studentImage.style = 'display: none';
    answBtns.forEach( answBtn => {
       return answBtn.style = 'display: none';
    }); 
    quitBtn.style = 'display: none';
}

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

const disableAnswBtns = () => {
    answBtns.forEach( answBtn => {
        return answBtn.setAttribute('disabled', 'disabled');
     }); 
    answContainer.setAttribute('disabled', 'disabled');
}

const enableAnswBtns = () => {
    answBtns.forEach( answBtn => {
        return answBtn.removeAttribute('disabled');
     }); 
     answContainer.removeAttribute('disabled');
}
//cloning the students array into a new array
// in order to keep the original array intact
let allStudents = [...students];

shuffleArray(allStudents);
let i = 0;
let chosenStudents = 0;
let amountOfGuesses = 0;
let studentIndex = 0;

const answBtnArray = [answ1Btn, answ2Btn, answ3Btn, answ4Btn];


const setUpNewGuess = () => {
    shuffleArray(allStudents);                           
    //Setting the chosen image to HTML
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
        chosenStudents = allStudents.slice(0); 
        amountOfGuesses = chosenStudents.length;

        console.log('"All" is clicked');

        gameOnFunc();
    });
    guessTenBtn.addEventListener('click', () => { 
        //välj 10 slumpade studenter och starta spel
        chosenStudents = allStudents.slice(0,10); 
        amountOfGuesses = chosenStudents.length; 

        console.log('"10" is clicked');

        gameOnFunc();
            
    });
    guessTwentyBtn.addEventListener('click', () => {
        //välj 20 slumpade studenter och starta spel
        chosenStudents = allStudents.slice(0,20); //slumpa ut 10 stycken
        amountOfGuesses = chosenStudents.length;
        
        console.log('"20" is clicked');

        gameOnFunc();
    });
}

clickToChooseAmountOfStudents();

let totalGuesses = 0;
let rightGuesses = 0;
// en funktion för 1 spelomgång 
const gameOnFunc = () => {
    // Setting img and randomizing answerbuttons    
    setUpNewGuess();
    // hide startGameContainer and show studentImage + all game buttons
    showAnswBtnsWhenStart(); 

    answContainer.addEventListener('click', (e) => {
        if(e.target.tagName==="BUTTON" && e.target.innerHTML === chosenStudents[studentIndex].name) { //
            console.log("You clicked the right name")
            answBtnArray[0].innerHTML = `${chosenStudents[studentIndex].name}. <span class="right">Rätt svar!</span>`;
            disableAnswBtns(); 

            setTimeout( () => {
                rightGuesses ++;
                totalGuesses ++; 
                studentIndex++;
                // showing result if game is finished
                ifGameFinished();
                setUpNewGuess();
                showAnswBtnsWhenStart();
                }, 1500);
                enableAnswBtns();
          
        } else if(e.target.tagName==="BUTTON" && e.target.innerHTML !== chosenStudents[studentIndex].name){
            console.log("Clicked wrong name")
            e.target.innerHTML += ` <span class="wrong">Fel svar!</span>`;
            disableAnswBtns();
            
            setTimeout( () => {
                answBtnArray[0].innerHTML = `${chosenStudents[studentIndex].name} <span class="right">är rätt svar!</span>`;
            }, 1500);

            setTimeout( () => {
                totalGuesses ++;
                studentIndex++;
                ifGameFinished();
                setUpNewGuess();
                showAnswBtnsWhenStart();
                
            }, 3800);
            enableAnswBtns();
        } 
    });
}

const ifGameFinished = () => {
    if(totalGuesses >= amountOfGuesses){
        disableAnswBtns();
        //avsluta spel och visa resultat
        studentImage.setAttribute('src', 'http://placekitten.com/300/300');
        answContainer.innerHTML = `
        <p>You made <span>${rightGuesses}</span> right guesses out of <span>${totalGuesses}</span> total guesses</p>
        `; 
    
        console.log(`totalguesses of: ${totalGuesses} is reached`);
        return;
    }  
}

quitBtn.addEventListener('click', (e) => {
    // fusk men det funkar för att börja om i alla fall 😁
    location.reload();

/*     // nedan kod hjälper inte för att starta om spelet
        console.log("Y U quit game?")                        
        rightGuesses = 0;
        totalGuesses = 0;
        studentIndex = 0;
        clickToChooseAmountOfStudents();
        chooseAmountOfGuesses(); */
});

/* // Kända buggar (att meddela Johan):
Spelet slutar inte att registrera klick på answContainer
när spelet slutat + får felmeddelande i consolen att 
image inte kan läsas (eftersom den har itererat över hela 
arrayen finns inga image kvar)
 
Om man klickar flera gånger under tiden en och samma bild 
visas blir det kaos och man kan hinner välja flera svar 
med tanke på timeOuterna som jag har. 
Försökte disable och enable element men utan framgång.
*/


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