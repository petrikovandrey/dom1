function start() {

    let sizeBoard = 4;
    let random = getRandomInt(sizeBoard ^ 2);
    let n = 0
    for (let i = 0; i < sizeBoard; i++) {
        n = n + 1;
        for (let b = 0; b < sizeBoard; b++) {


            let div = `<div class = "w" id=${String(n)}>
              <a href='./img/netology.svg'>
              </div>`;
            document.section.append(div);
            n = n + 1;
        }
    };
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}