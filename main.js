const body = document.querySelector('body');
const heading = document.querySelector('#heading');
const headingTitle = document.createElement('h1');
headingTitle.innerHTML = `<img src="logo.png" height="100px" /><br />
Your Score is: <span class="score">$${null}</span>`;
heading.append(headingTitle);

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

// question area
const questionArea = document.querySelector('#question-area');
const questionText = document.createElement('h1');
questionText.innerHTML = `Question goes here`;
questionArea.append(questionText);

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
    // end arrays
    for(const i of data) {
        let value = i.value;
        console.log(value)
        let info = i;
        console.log(info)
        // push all data into empty arrays above
        if (value === "$100") {
            oneHundred.push(i);
        }
        if (value === "$200") {
            twoHundred.push(i);
        }
        if (value === "$400") {
            fourHundred.push(i);
        }
        if (value === "$600") {
            sixHundred.push(i);
        }
        if (value === "$1,200") {
            twelveHundred.push(i);
        }
    }
};

// answer input area
const answerInput = document.querySelector('#answer-input');

getQuestion();