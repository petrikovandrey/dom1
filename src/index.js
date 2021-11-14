import './css/style.css';

import './js/app';
const section = document.querySelector("section");

// TODO: write your code in app.js
function start() {

    let value = "";
    let sizeBoard = 4;
    board = [];
    for (let i = 0; i < sizeBoard; i++) {
        let row = [];

        board.push(row);
        for (let b = 0; b < sizeBoard; b++) {
            newDiv(i, b)
            board[i].push(value);
        }
    };
}

function newDiv(i, b) {

    const div = `<div class = "w" id=${String(i)+String(b)}>
    <a href="#">
    </div>`;

    document.section.append(div);
}