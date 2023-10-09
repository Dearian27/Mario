const tiles = new Image();
tiles.src = '../assets/blocks.png';
const tileSize = 50;

const audio = {
  wrong: '../assets/wrong.mp3',
  right: '../assets/right.mp3',
  jump: '../assets/jump.mp3',
}

function playSound(src) {
  const audio = new Audio(src);
  audio.volume = 0.1;
  audio.play();
}