function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function startMain() {
  const sizeBoard = 4;
  const randomN = getRandomInt(sizeBoard ** 2);
  let n = 0;

  for (let i = 0; i < sizeBoard; i += 1) {
    let imgGoblin = '#';
    n += 1;
    for (let b = 0; b < sizeBoard; b += 1) {
      imgGoblin = (n === randomN) ? './img/goblin.png' : '#';

      const div = `<div class = "w" id=${String(n)}>
              <a href=${imgGoblin}>
              </div>`;
      document.section.append(div);
      n += 1;
    }
  }
}

function updateBord() {
  setInterval(() => {
    const randomN = getRandomInt(16);
    document.getElementById(String(randomN)).href = './img/goblin.png';
  }, 2);
}
startMain();
updateBord();
