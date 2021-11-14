function startMain() {
  const sizeBoard = 4;
  //   const random = getRandomInt(Math.pow(sizeBoard, 2));
  let n = 0;

  for (let i = 0; i < sizeBoard; i += 1) {
    // const img = '#';
    n += 1;
    for (let b = 0; b < sizeBoard; b += 1) {
      const div = `<div class = "w" id=${String(n)}>
              <a href="./img/netology.svg">
              </div>`;
      document.section.append(div);
      n += 1;
    }
  }
}

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

startMain();
