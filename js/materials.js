const tiles = new Image();
tiles.src = '../assets/blocks.png';
const animTiles = new Image();
animTiles.src = '../assets/animblocks.png';
const tileSize = 50;


const backgroundGradients = [
  ['#4FC3F7', '#1976D2'],
  ['#FFD700', '#FF6347'],
  ['#0F1B3A', '#0F1626']
];
const blocksOffset = [
  0,
  200,
  400,
]
const randomMap = Math.floor(Math.random() * blocksOffset.length);


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
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const answerLayout = {
  [2]: [600, 800],
  [3]: [550, 700, 850],
}