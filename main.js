const body = document.querySelector('body');
const heading = document.querySelector('#heading');
const headingTitle = document.createElement('h1');
headingTitle.innerHTML = `Jeopardy! Your Score is: $${null}`;
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
const questionArea = document.createElement('h1');
questionArea.innerHTML = `Question goes here`;
boardArea.append(questionArea);

// answer input area
const answerInput = document.querySelector('#answer-input');