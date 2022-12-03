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
    shuffleArray(chosenStudents); //sluta shuffla denna och shift() 
                                  // bort [0] hela tiden tills img är slut
    shuffleArray(allStudents);                           
    //Setting the first chosen image and starting game
    studentImage.setAttribute('src', chosenStudents[0].image);

    shuffleArray(answBtnArray);
    //randomizing right answer button
    answBtnArray[0].innerHTML = `${chosenStudents[0].name}`;
    allStudents.filter( student => {
        return student.name !== chosenStudents[0].name
    });
    answBtnArray[1].innerHTML = `${allStudents[1].name}`;
    answBtnArray[2].innerHTML = `${allStudents[2].name}`;
    answBtnArray[3].innerHTML = `${allStudents[3].name}`;

    
// chosenStudents.map(student=> student.name); 
// skickar ut namnen i en array
          
}



//choose between ALL, 10 or 20 guesses
const clickToChooseAmountOfStudents = () => {

    guessAllBtn.addEventListener('click', () => {
        //välj ALLA studenter ✅ och starta spel
        chosenStudents = allStudents; 
        
        // //  //Setting the first chosen image and starting game
        //  setUpNewGuess();

        // //hide startGameContainer and show studentImage + all game buttons ✅
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
        chosenStudents = allStudents.slice(0,10); //slumpa ut 10 stycken and slice()? out the 10 first? eller borde finnas en annan metod .filter[0-9]? + .map(student.name) för att få ut namnen 

        //Setting the first chosen image and answBtns
        // setUpNewGuess();

        // //hide startGameContainer and show studentImage + all game buttons
        // showAnswBtnsWhenStart();
        console.log('"10" is clicked');

        // gameOn = true;
        gameOnFunc();
        
    });
    guessTwentyBtn.addEventListener('click', () => {
    //slumpa 20 bilder och starta spel
        // slumpa med Fisher-Yates
        chosenStudents = allStudents.slice(0,20); //slumpa ut 10 stycken
            
        //Setting the first chosen image and starting game
        // setUpNewGuess();
        //hide startGameContainer and show studentImage + all game buttons
        // showAnswBtnsWhenStart();
        console.log('"20" is clicked');

        gameOnFunc();
    });
}

clickToChooseAmountOfStudents();

// en funktion för 1 spelomgång 
const gameOnFunc = () => {
    // while(quitGame === false){
        // gameOn = true;
        let totalGuesses = 0
        let rightGuesses = 0;
        
        // gameOn = true;
         // // Setting the first chosen image and starting game
        setUpNewGuess();
        // // hide startGameContainer and show studentImage + all game buttons
        showAnswBtnsWhenStart(); 
        // 
        // gameOn = true;
        // for(let totalGuesses = 0; totalGuesses < chosenStudents.length; totalGuesses++) { //for(let i = 0; i <= chosenStudents.length; i++){ //denna while vill jag ju loopa tills chosenStudents tar slut. ska det göras med en for-loop istället? forEach?
            // forEach se ovan        
                // // hide startGameContainer and show studentImage + all game buttons
                // showAnswBtnsWhenStart();

                answContainer.addEventListener('click', (e) => {

                    if(totalGuesses > chosenStudents.length-1){

                        // gameOn = false;
                        //avsluta spel
                        console.log(`totalguesses of: ${totalGuesses} is reached`)


                    }  else if(e.target.innerHTML === chosenStudents[0].name) { //
                        // det räcker inte med innerHTML om man vill undvika dubbletter
                        // kan antingen ge gissad student guessedOn =true och 
                        // filtrera ut resterande false, eller bara se till att inte dublettnamn
                        // kommer(och därmed ändå inte kan klickas), vilket jag är tvungen att göra ändå.
                        console.log("You clicked the right name")
                        // chosenStudents.shift()
                        rightGuesses ++;
                        totalGuesses ++; //behöver ej egentligen räkna dessa utan bara ta 
                                        //     chosenStudents.length för att veta hur många gissningar 
                                        //     det blir, men vet ej hur jag ska få chosenStudents utanför scopet
                        // skriv ut på något sätt att det är rätt svar:
                        // kan kanske bara skriva i ett htmlEl under bilden 
                        // så det inte blir bökigt
                        setUpNewGuess();
                        // // hide startGameContainer and show studentImage + all game buttons
                        showAnswBtnsWhenStart();

                    } else if(e.target.innerHTML !== chosenStudents[0].name){
                        console.log("Clicked wrong name")
                        // chosenStudents.shift()
                        totalGuesses ++;
                        // visa på ngt sätt att det var fel och skriv ut rätt svar 
                        // rätt svar:
                    
                        setUpNewGuess();
                        // hide startGameContainer and show studentImage + all game buttons
                        showAnswBtnsWhenStart();

                    } else if(e.target.innerHTML === 'Quit Game 😾'){
                        console.log("Y U quit game?")                        
                        rightGuesses = 0;
                        totalGuesses = 0;
                        // gameOn = false;
                        // quitGame = true;
                        clickToChooseAmountOfStudents();
                    }
                }); 
            // });
        // } 
    // }
}


// hur kan jag få med det valda värdet ovan ut ur scopet i 
// variabeln chosenStudents och använda det? 
// tror jag har det nu iom funktionen. För i konsolen
// så ser jag mitt valda värde när jag skriver in chosenStudents
// console.log(chosenStudents); // hinner ej klicka på knapparna 
// innan denna skrivs ut i konsolen som undefined




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