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

const player = new Mario(730, 400, 45*1.5, 40*1.5, marioSprites)
const blocks = [
  new AnimBlock(500, 300, 51, 51, 0, 0, 4, 5),
  new AnimBlock(550, 300, 51, 51, 0, 0, 4, 5),
  new AnimBlock(650, 300, 51, 51, 0, 0, 4, 5),
  new AnimBlock(700, 300, 51, 51, 0, 0, 4, 5),
  new AnimBlock(750, 300, 51, 51, 0, 0, 4, 5),
  new AnimBlock(850, 300, 51, 51, 0, 0, 4, 5),
  new AnimBlock(900, 300, 51, 51, 0, 0, 4, 5),


  
  new Block(400, 550, 50, 50, 2, 2),

  new Block(1050, 500, 50, 51, 3, 3),
  new Block(400, 500, 50, 50, 0, 0),
  new Block(450, 500, 50, 50),
  new Block(500, 500, 50, 50),
  new Block(550, 500, 50, 50),
  new Block(600, 500, 50, 50),
  new Block(650, 500, 50, 50),
  new Block(700, 500, 50, 50),
  new Block(750, 500, 50, 50),
  new Block(800, 500, 50, 50),
  new Block(850, 500, 50, 50),
  new Block(900, 500, 50, 50),
  new Block(950, 500, 50, 50),

  new Block(350, 500, 50, 50, 2, 3),
  new Block(1000, 500, 50, 50, 0, 0),
]
const backgrounds = [
  new BackBlocks(450, 550, 51, 50, 2, 1, 11),
  // new BackBlocks(400, 600, 50, 50, 2, 1, 14),
  
  new Background(1000, 550, 50, 51, 3, 2),
  // new Background(400, 550, 50, 50, 0, 3),
]
const answers = [
  new AnimBlock(600, 300, 51, 51, 0, 0, 4, 4),
  new AnimBlock(800, 300, 51, 51, 0, 0, 4, 4),
]

const text = new Sentence('He ___ playing football now!', 0, 50);

const checkCollision = () => {
  let isGrounded = false;
  blocks.forEach(block => {
    const blockLeft = block.x - block.width / 2;
    const blockRight = block.x + block.width / 2;
    const blockTop = block.y - block.height / 2;
    const blockBottom = block.y + block.height / 2;
    const playerLeft = player.x - player.width / 2;
    const playerRight = player.x + player.width / 2;
    const playerTop = player.y - player.height / 2;
    const playerBottom = player.y + player.height / 2;

    if (
      playerRight >= blockLeft &&
      playerLeft <= blockRight &&
      playerBottom >= blockTop &&
      playerTop <= blockBottom
    ) {
      const overlapX = Math.min(playerRight - blockLeft, blockRight - playerLeft);
      const overlapY = Math.min(playerBottom - blockTop, blockBottom - playerTop);

      if (overlapX <= overlapY) {
        if (player.x < block.x) {
          player.x = blockLeft - player.width / 2;
          player.velocity.x = 0;
        } else {
          player.x = blockRight + player.width / 2;
          player.velocity.x = 0;
        }
      } else {
        if (player.y < block.y && player.velocity.y > 0) {
          player.velocity.y = 0;
          player.y = blockTop - player.height / 2;
          isGrounded = true;
        } else if(player.velocity.y < 0 && player.y > block.y) {
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
  
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#4FC3F7');  // Світло-синій
  gradient.addColorStop(1, '#1976D2');  // Темно-синій
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate( -Math.round(player.x) + canvas.width/2, -Math.round(player.y) + canvas.height/2);

  // const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  // gradient.addColorStop(0, '#FFD700');  // Світлий жовтий
  // gradient.addColorStop(1, '#FF6347');  // Світло-помаранчевий
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
  
  answers.forEach(block => block.draw(ctx));
  
 
  // grid.draw(ctx);
  ctx.restore();
  text.draw(ctx);
  requestAnimationFrame(animation)
  // setTimeout(() => animation(), 1000/60);
}
window.addEventListener('load', () => {
  resizeCanvas();
  animation();
  blocks.push(
    new Block(300, 150, canvas.height * 3, 50, -1),
    new Block(1100, 150, canvas.height * 3, 50, -1),
    new Block(350, 50, 50, canvas.width * 3, -1),
    new Block(300, 600, 50, canvas.width * 3, -1),
  )
});