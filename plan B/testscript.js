const largeWrapper = document.querySelector('.large-wrapper');
const allBtn = document.querySelector('#allBtn');
const tenBtn = document.querySelector('#tenBtn');
const twentyBtn = document.querySelector('#twentyBtn');
const form = document.querySelector('form');

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}
// clonar arrayen till en helt ny
const allStudents = [...students];

/* kopierar pekaren på arrayen
const allStudents = students.map( student => {
    return {name: student.name, image: student.image}
}); */

const renderGuesses = (chosenStudents) => {

    largeWrapper.innerHTML = "";
    chosenStudents.forEach( student => {
        // replacing large-wrapper.innerHTML content with this 
        // content after choosing amount of guesses:

        // ❗ change 3 of the values="" to a name from a shuffle of all names 
        // eg ${randomStudent}. answer2-4 shall be ${randomstudent} as well
        // ❗ create a shuffle function for .radio-button utanför 
        // template string och insert med ${radioBtn} 
        // eller slumpa position på annat sätt
        // https://www.youtube.com/watch?v=ykszkgydoG4&ab_channel=DGreenwood
        
        largeWrapper.innerHTML +=
        `  
        <div class="student-card m-4">
            <img src="../${student.image}" alt="Student in FED22M" >
            <div id="guess-template" class="m-4 guess-template">
                <!-- alt 1 -->
                <div id="altOne" class="m-2 altOne radio-button">
                    <input type="radio" name="${student.name}" value="${student.name}">
                    <label for="${student.name}">${student.name}</label>
                </div>
                <!-- alt 2 -->
                <div id="altTwo" class="m-2 altTwo radio-button">
                    <input type="radio" name="${student.name}" value="${student.name}">
                    <label for="${student.name}">Answer 2</label>
                </div>
                <!-- alt 3 -->
                <div id="altThree" class="m-2 altThree radio-button">
                    <input type="radio" name="${student.name}" value="${student.name}">
                    <label for="${student.name}">Answer 3</label>
                </div>
                <!-- alt 4 -->
                <div id="altFour" class="m-2 altFour radio-button">
                    <input type="radio" name="${student.name}" value="${student.name}">
                    <label for="${student.name}">Answer 4</label>
                </div>
            </div>
        </div>
        `;
        
    });

}



allBtn.addEventListener('click', e => {

    shuffleArray(allStudents)
    const chosenStudents = allStudents

    renderGuesses(chosenStudents);
    console.log('All is clicked');
    console.log(chosenStudents);
});

tenBtn.addEventListener('click', e => {
    
    shuffleArray(allStudents)
    const chosenStudents = allStudents.slice(0,10);

    renderGuesses(chosenStudents);
    console.log('10 is clicked');
    console.log(chosenStudents);
});

twentyBtn.addEventListener('click', e => {

    const chosenStudents = allStudents.slice(0,20);
    console.log('20 is clicked');
    console.log(chosenStudents);
});

form.addEventListener('submit', e => {
    e.preventDefault();

});