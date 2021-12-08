const body = document.querySelector('body');
const heading = document.querySelector('#heading');
const headingTitle = document.createElement('h1');
let score = localStorage.getItem('score') || 0;
if (score >= 0) {
    headingTitle.innerHTML = `<img src="images/logo.png" height="100px" /><br /><br />
    Your Score is: <span class="score">$${score.toLocaleString()}</span>`;
} else {
    headingTitle.innerHTML = `<img src="images/logo.png" height="100px" /><br /><br />
    Your Score is: <span class="incorrect-negative">$${score.toLocaleString()}</span>`;
}
heading.append(headingTitle);

// audio
const correctMp3 = new Audio('sounds/correct.mp3');
const outOfTime = new Audio('sounds/timesup.mp3');
const theme = new Audio('sounds/theme.mp3');

/* // timer function
let timeRemaining = 30;
let timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeRemaining === 0) {
        clearTimeout(timerId);
        headingTitle.innerHTML = `Times up!`
    } else {
        headingTitle.innerHTML = timeRemaining + ' seconds remaining';
        timeRemaining--;
    }
} */

// build the grid
const boardArea = document.querySelector('#board-area');
const boardGrid = document.createElement('div');
boardGrid.innerHTML = `<div id="grid" class="grid-outer"></div>`;
boardArea.append(boardGrid);
const boardGridInner = document.querySelector('#grid')

// create a for loop that loops 5 times to create rows
for (i = 0; i < 5; i++) {
    const row100 = document.createElement('div');
    row100.classList.add('single-box');
    row100.innerHTML = `$100`;
    boardGridInner.append(row100);
}
for (i = 0; i < 5; i++) {
    const row200 = document.createElement('div');
    row200.classList.add('single-box');
    row200.innerHTML = `$200`;
    boardGridInner.append(row200);
}
for (i = 0; i < 5; i++) {
    const row400 = document.createElement('div');
    row400.classList.add('single-box');
    row400.innerHTML = `$400`;
    boardGridInner.append(row400);
}
for (i = 0; i < 5; i++) {
    const row600 = document.createElement('div');
    row600.classList.add('single-box');
    row600.innerHTML = `$600`;
    boardGridInner.append(row600);
}
for (i = 0; i < 5; i++) {
    const row1200 = document.createElement('div');
    row1200.classList.add('single-box');
    row1200.innerHTML = `$1,200`;
    boardGridInner.append(row1200);
}

// question text area
const questionArea = document.querySelector('#question-area');
const questionText = document.createElement('h1');

// answer submission area
// come back to later

// function to get question
async function getQuestion() {
    const httpResponse = await fetch('jeopardy.json');
    const data = await httpResponse.json();
    // create empty array for each value of questions
    const oneHundred = [];
    const twoHundred = [];
    const fourHundred = [];
    const sixHundred = [];
    const twelveHundred = [];

    for(const i of data) {
        let value = i.value;
        let info = i;
        // push all data into empty arrays above
        if (value === '$100') {
            oneHundred.push(i);
        }
        if (value === '$200') {
            twoHundred.push(i);
        }
        if (value === '$400') {
            fourHundred.push(i);
        }
        if (value === '$600') {
            sixHundred.push(i);
        }
        if (value === '$1,200') {
            twelveHundred.push(i);
        }
    }
    // get random questions from arrays
    const singleBox = document.querySelectorAll('.single-box');
    singleBox.forEach(element =>
    element.addEventListener('click', function() {
        console.log('box was clicked!');
        let random = Math.floor(Math.random() * 1000);
        if (element.innerText === '$100') {
            console.log('this box value is $100');
            question100 = oneHundred[random].question
            console.log(question100);
            questionText.innerHTML = `${question100}`;
            questionArea.append(questionText);
            answer = oneHundred[random].answer
            element.innerText = '';
            element.classList.add('clear');
            // globally declare variable
            questionValue = 100
        }
        if (element.innerText === '$200') {
            console.log('this box value is $200');
            question200 = twoHundred[random].question
            questionText.innerHTML = `${question200}`;
            questionArea.append(questionText);
            answer = twoHundred[random].answer
            element.innerText = '';
            element.classList.add('clear');
            // globally declare variable
            questionValue = 200
        }
        if (element.innerText === '$400') {
            console.log('this box value is $400');
            question400 = fourHundred[random].question
            questionText.innerHTML = `${question400}`;
            questionArea.append(questionText);
            answer = fourHundred[random].answer
            element.innerText = '';
            element.classList.add('clear');
            // globally declare variable
            questionValue = 400
        }
        if (element.innerText === '$600') {
            console.log('this box value is $600');
            question600 = sixHundred[random].question
            questionText.innerHTML = `${question600}`;
            questionArea.append(questionText);
            answer = sixHundred[random].answer
            element.innerText = '';
            element.classList.add('clear');
            // globally declare variable
            questionValue = 600
        }
        if (element.innerText === '$1,200') {
            console.log('this box value is $1,200');
            question1200 = twelveHundred[random].question
            questionText.innerHTML = `${question1200}`;
            questionArea.append(questionText);
            answer = twelveHundred[random].answer
            element.innerText = '';
            element.classList.add('clear');
            // globally declare variable
            questionValue = 1200
        }
    })
    )
    // answer input area
    const answerInputForm = document.querySelector('#answer-input-form');
    const answerInput = document.querySelector('#answer-input');
    
    answerInputForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (answerInput.value === answer) {
            questionText.innerHTML = `Correct!`;
            questionArea.append(questionText);
            correctMp3.play();
            answerInput.value = '';
            score = score + questionValue
            console.log(score);
            if (score >= 0) {
                headingTitle.innerHTML = `<img src="images/logo.png" height="100px" /><br /><br />
                Your Score is: <span class="score">$${score.toLocaleString()}</span>`;
            } else {
                headingTitle.innerHTML = `<img src="images/logo.png" height="100px" /><br /><br />
                Your Score is: <span class="incorrect-negative">$${score.toLocaleString()}</span>`;
            }
            localStorage.setItem('score', score.toLocaleString());
        } else {
            questionText.innerHTML = `<span class="incorrect-negative">Incorrect!</span> The correct answer was "${answer}"`;
            questionArea.append(questionText);
            outOfTime.play();
            answerInput.value = '';
            score = score - questionValue
            console.log(score);
            if (score >= 0) {
                headingTitle.innerHTML = `<img src="images/logo.png" height="100px" /><br /><br />
                Your Score is: <span class="score">$${score.toLocaleString()}</span>`;
            } else {
                headingTitle.innerHTML = `<img src="images/logo.png" height="100px" /><br /><br />
                Your Score is: <span class="incorrect-negative">$${score.toLocaleString()}</span>`;
            }
            localStorage.setItem('score', score.toLocaleString());
        }
    })
};

getQuestion();