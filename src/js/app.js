function startMain() {

    const sizeBoard = 4;
    const random = getRandomInt(Math.pow(sizeBoard, 2));
    let n = 0;

    for (let i = 0; i < sizeBoard; i++) {
        let img = "#";
        n = ++;
        for (let b = 0; b < sizeBoard; b++) {
            if (random === n) {
                img = './img/netology.svg';
            }
            let div = `<div class = "w" id=${String(n)}>
              <a href=${img}>
              </div>`;
            document.section.append(div);
            n = ++;
        }
    };
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}