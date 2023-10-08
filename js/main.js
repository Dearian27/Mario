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

  canvas.width = screenWidth-5;
  canvas.height = screenHeight-5;
}
window.addEventListener('resize', resizeCanvas);

const player = new Mario(100, 100, 45*1.5, 40*1.5, marioSprites)
const blocks = [
  new Block(600, 500, 50, 50),
  new Block(650, 500, 50, 50),
  new Block(700, 500, 50, 50),
  new Block(750, 500, 50, 50),
  new Block(800, 500, 50, 50),
  new Block(850, 500, 50, 50),
  new Block(900, 500, 50, 50),
  new Block(950, 500, 50, 50),

 
  
  new Block(1000, 500, 50, 50, 1, 1),
  new Block(1050, 550, 50, 50, 1, 1),
  new Block(950, 550, 50, 50, 1),
]
const backgrounds = [
  new Background(600, 550, 50, 50, 1),
  new Background(650, 550, 50, 50, 1),
  new Background(700, 550, 50, 50, 1),
  new Background(750, 550, 50, 50, 1),
  new Background(800, 550, 50, 50, 1),
  new Background(850, 550, 50, 50, 1),
  new Background(900, 550, 50, 50, 1),
  new Background(950, 550, 50, 50, 1),
  new Background(1000, 550, 50, 50, 1),
]

const text = new Sentence('He ___ playing football now!', 0, 50);

const checkCollision = () => {
  let isGrounded = false;
  blocks.forEach(block => {
    // Визначаємо межі блоку
    const blockLeft = block.x - block.width / 2;
    const blockRight = block.x + block.width / 2;
    const blockTop = block.y - block.height / 2;
    const blockBottom = block.y + block.height / 2;

    // Визначаємо межі гравця
    const playerLeft = player.x - player.width / 2;
    const playerRight = player.x + player.width / 2;
    const playerTop = player.y - player.height / 2;
    const playerBottom = player.y + player.height / 2;

    // Перевіряємо, чи відбувається зіткнення
    if (
      playerRight >= blockLeft &&
      playerLeft <= blockRight &&
      playerBottom >= blockTop &&
      playerTop <= blockBottom
    ) {

      // Визначаємо з якого боку гравець зіткнувся з блоком
      const overlapX = Math.min(playerRight - blockLeft, blockRight - playerLeft);
      const overlapY = Math.min(playerBottom - blockTop, blockBottom - playerTop);

      if (overlapX < overlapY) {
        // Гравець зіткнувся з боковою стінкою блоку
        if (player.x < block.x) {
          player.x = blockLeft - player.width / 2;
          player.velocity.x = 0;
        } else {
          player.x = blockRight + player.width / 2;
          player.velocity.x = 0;
        }
      } else {
        // Гравець зіткнувся з верхньою або нижньою стінкою блоку
        if (player.y < block.y && player.velocity.y > 0) {
          player.velocity.y = 0;
          player.y = blockTop - player.height / 2;
          isGrounded = true;
        } else if(player.velocity.y > 0) {
          player.velocity.y = 0;
          player.y = blockBottom + player.height / 2;
        }
      }
    }
  });
  if(isGrounded) {
    player.isGrounded = true;
  } else player.isGrounded = false;
}

const grid = new Grid();

const animation = () => {
  canvas.height = canvas.height;

  // ctx.save();
  // ctx.translate( player.x - canvas.width * 0.5, player.y - canvas.height * 0.5);
  
  
  // const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  // gradient.addColorStop(0, '#FFD700');  // Світлий жовтий
  // gradient.addColorStop(1, '#FF6347');  // Світло-помаранчевий
  // ctx.fillStyle = gradient;
  // ctx.fillRect(0, 0, canvas.width, canvas.height);


  // const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  // gradient.addColorStop(0, '#4FC3F7');  // Світло-синій
  // gradient.addColorStop(1, '#1976D2');  // Темно-синій
  // ctx.fillStyle = gradient;
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  checkCollision();
  blocks.forEach(block => {
    block.draw(ctx);
  });
  backgrounds.forEach(block => {
    block.draw(ctx);
  });
  player.update();
  player.draw(ctx);

  // ctx.restore();
  text.draw(ctx);

  grid.draw(ctx);
  
  requestAnimationFrame(animation);
}
window.addEventListener('load', () => {
  resizeCanvas();
  animation();
  blocks.push(
    new Block(-40, 0, canvas.height * 3, 100),
    new Block(canvas.width + 40, 0, canvas.height * 3, 100),
    new Block(0, -40, 100, canvas.width * 3),
    new Block(0, canvas.height + 40, 100, canvas.width * 3),
  )
});