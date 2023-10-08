const marioSprites = new Image();
marioSprites.src = '../assets/mario2.svg';


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;

function resizeCanvas() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  canvas.width = screenWidth;
  canvas.height = screenHeight;
}
window.addEventListener('resize', resizeCanvas);

const player = new Mario(100, 100, 45*1.5, 40*1.5, marioSprites)

const animation = () => {

  canvas.height = canvas.height;
  player.update();
  player.draw(ctx);

  requestAnimationFrame(animation);
}
window.addEventListener('load', () => {resizeCanvas(); animation()});