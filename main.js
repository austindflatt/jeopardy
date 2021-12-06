const body = document.querySelector('body');
const headingTitle = document.createElement('h1');
headingTitle.innerHTML = `Jeopardy! Your Score is: $${null}`;
body.append(headingTitle);

// build the grid
const boardGrid = document.createElement('div');
boardGrid.innerHTML = `<div id="grid"></div>`;
body.append(boardGrid);

const test = document.createElement('h1');
test.innerHTML = `this is inside board grid`;
boardGrid.append(test);

// create a for loop that loops 5 times to create rows
for (i = 0; i < 5; i++) {
    const row100 = document.createElement('div');
    row100.innerHTML = `$100`;
    boardGrid.append(row100);
}
for (i = 0; i < 5; i++) {
    const row200 = document.createElement('div');
    row200.innerHTML = `$200`;
    boardGrid.append(row200);
}
for (i = 0; i < 5; i++) {
    const row400 = document.createElement('div');
    row400.innerHTML = `$400`;
    boardGrid.append(row400);
}
for (i = 0; i < 5; i++) {
    const row600 = document.createElement('div');
    row600.innerHTML = `$600`;
    boardGrid.append(row600);
}
for (i = 0; i < 5; i++) {
    const row1200 = document.createElement('div');
    row1200.innerHTML = `$1,200`;
    boardGrid.append(row1200)
}