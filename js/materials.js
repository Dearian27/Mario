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
  wrong: new Audio('../assets/wrong.mp3'),
  right: new Audio('../assets/right.mp3'),
  jump: new Audio('../assets/jump.mp3')
}

function playSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
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