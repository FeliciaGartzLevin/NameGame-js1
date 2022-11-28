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
let gameOn = false;
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

let rightGuesses = 0;
let totalGuesses = 0;

// ngt sånt här?: 
const gameOnFunc = () => {
    gameOn = true;
    //Setting the first chosen image and starting game
    setUpNewGuess();
    //hide startGameContainer and show studentImage + all game buttons
    showAnswBtnsWhenStart();

    while(gameOn && totalGuesses <= chosenStudents.length){ //denna while vill jag ju loopa tills chosenStudents tar slut. ska det göras med en for-loop istället? forEach?
        answContainer.addEventListener('click', (e) => {

            if(e.target.innerHTML = chosenStudents[0].name) { //
                console.log("You clicked the right name")
                chosenStudents ++;
                rightGuesses ++;
                totalGuesses ++; //behöver ej egentligen räkna dessa utan bara ta 
                                //     chosenStudents.length för att veta hur många gissningar 
                                //     det blir, men vet ej hur jag ska få chosenStudents utanför scopet
                // skriv ut på något sätt att det är rätt svar:
                // kan kanske bara skriva i ett htmlEl under bilden 
                // så det inte blir bökigt
                // // timer. fixa med denna när spelet funkar någolunda
                    // setTimeout(() => {
                //     // gör knappen grön i 2 sek och ta bort de andra namnen
                //          answBtn[rätt].classList.add(gör css-style grön färg);
                //          answBtn[alla som är fel].style('display', 'hidden');
                // }, 2000);
                setUpNewGuess();

            } else if(e.target.innerHTML = !chosenStudents[0].name){
                console.log("Clicked wrong name")
                totalGuesses ++;
                chosenStudents ++;
                // visa på ngt sätt att det var fel och skriv ut rätt svar 
                // rätt svar:
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


                setUpNewGuess();

            } else if(e.target.innerHTML = `Quit Game 😾`){
                console.log("Y U quit game?")
                rightGuesses = 0;
                totalGuesses = 0;
                gameOn = false;
                clickToChooseAmountOfStudents();
            }
        }); 
    }
}

//choose between ALL, 10 or 20 guesses
const clickToChooseAmountOfStudents = () => {

    guessAllBtn.addEventListener('click', () => {
        //välj ALLA studenter ✅ och starta spel
        chosenStudents = allStudents; 
        
        //  //Setting the first chosen image and starting game
        //  setUpNewGuess();

        //hide startGameContainer and show studentImage + all game buttons ✅
        // showAnswBtnsWhenStart();
        console.log('"All" is clicked');

        // gameOn = true;
        gameOnFunc();

        // får ev fortsätta hela spelet 
        // här inne i respektive scope? 
        // Kan ta funktioner från utsidan 
        // och sätta in för att kunna använda 
        // chosenStudents nya värde.
        
    });
    guessTenBtn.addEventListener('click', () => {
        //slumpa 10 studenter och starta spel
            // slumpa med Fisher-Yates ✅
        chosenStudents = allStudents.slice(0,10); //slumpa ut 10 stycken and slice()? out the 10 first? eller borde finnas en annan metod .filter[0-9]? + .map(student.name) för att få ut namnen 

        //Setting the first chosen image and answBtns
        // setUpNewGuess();

        //hide startGameContainer and show studentImage + all game buttons
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
        showAnswBtnsWhenStart();
        console.log('"20" is clicked');

        // gameOn = true;
        gameOnFunc();
    });
}

clickToChooseAmountOfStudents();
gameOnFunc();

// console.log(chosenStudents);

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



  
 
// nästa steg nu är att länka clicked 
// answBtn till rätt påföljd i if-satsen

// hur kan en if-sats känna av ett click?
// hur registrera rätt svar? 👇

/* 
såhär såklart! 💡 (nedan kod):
lägg ett click-eventlistener på answers-container.
kolla var e.target är och få in ovan if-sats.
Kan ju då inte använda tagname==="BUTTON" eftersom
jag vill få ut specifik button, så kanske man kan 
ha e.target.id eller dyl?
använd stopPropagation(); här också? kolla detta i shauns popup 
som johan hjälpte mig med
*/
// SE TODOS + SHAUNS POPUP 
// answContainer.addEventListener('click', (e) => {
// 	// console.log("You clicked on either the whole div, or on a button", e.target);

// 	// check if user clicked on a LI element
// 	if (e.target.tagName === "BUTTON") {
// 		// console.log("YAY you clicked on a todo (LI)", e.target);
// 		// console.log("The clicked todo's title is:", e.target.innerText);

// 		// get the `data-todo-id` attribute from the LI element
// 		const clickedTodoId = e.target.dataset.todoId;     // `data-todo-id`
// 		// console.log("You clicked on the listitem for todo with id:", clickedTodoId);

// 		// search todos for the todo with the id todoId
// 		const clickedTodo = todos.find( (todo) => {
// 			return todo.id == clickedTodoId;
// 		} );
// 		console.log("found clicked todo", clickedTodo);
// 	}
// }); 



// Hur kan jag få spelet att köra 
// om och om igen igenom valt antal elever?
// något med while(gameOn && totalGuesses <= chosenStudents.length)
// kanske? (se while-loopen ovan)

//how to write total score: `you've got ${rightGuesses}/${totalGuesses} right!`
// make an htmlEl to print this in