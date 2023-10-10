const modal = document.getElementById('myModal');
const btn = document.getElementById('btn');
const animateElement = document.getElementById('startAnimation'); // Замініть на ваш ID анімації
function openModal() {
  modal.classList.add('active');
  animateElement.beginElement();
}
function closeModal() {
  modal.classList.remove('active');
}
btn.addEventListener('click', () => {closeModal();shuffle();init()});

const marioSprites = new Image();
marioSprites.src = '../assets/mario2.svg';

let questions = [
  {
    question: 'She ___ cooking now.',
    answer: 'She is cooking now.',
    variants: [
      {isRight: true, text: 'is'},
      {isRight: false, text: 'are'},
      {isRight: false, text: 'am'},
    ]
  },
  {
    question: '___ they playing the piano at the moment?',
    answer: 'Are they playing the piano at the moment?',
    variants: [
      {isRight: false, text: 'is'},
      {isRight: false, text: 'am'},
      {isRight: true, text: 'are'},
    ]
  },
  {
    question: 'Mary and Jack are not ___ now.',
    answer: 'Mary and Jack are not talking now.',
    variants: [
      {isRight: true, text: 'talking'},
      {isRight: false, text: 'talks'},
    ]
  },
  {
    question: '___ we ___ exercises at the moment?',
    answer: 'Are we doing exercises at the moment?',
    variants: [
      {isRight: true, text: 'are/doing'},
      {isRight: false, text: 'are/do'},
    ]
  },
  {
    question: 'Sam isn\'t ___ English at the moment.',
    answer: 'Sam isn\'t learning English at the moment.',
    variants: [
      {isRight: true, text: 'learing'},
      {isRight: false, text: 'learns'},
    ]
  },
]
const shuffle = () => {
  questions = shuffleArray(questions);
  questions.forEach(question => {
    question.variants = shuffleArray(question.variants);
  });
}
shuffle();
let currentQuestion = 0;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;

function resizeCanvas() {
  let scale = 1;
  if(window.innerHeight < 320) {
    scale = 3;
  }
  else if(window.innerHeight < 450) {
    scale = 2;
  }
  else if(window.innerHeight < 670 
    // || (screen.orientation === 'album' && window.innerHeight < 768)
    ) {
    scale = 1.5;
  }
  const screenWidth = window.innerWidth * scale;
  const screenHeight = window.innerHeight * scale;

  canvas.width = screenWidth-5;
  canvas.height = screenHeight-5;
  // canvas.style.transform = 'scale(0.5)';
  canvas.style.overflow = 'hidden';
}
window.addEventListener('resize', resizeCanvas);

const player = new Mario(730, 400, 45*1.5, 40*1.5, marioSprites)
const blocks = [
  // new AnimBlock(550, 300, 51, 51, 0, 0, 4, 1, 200),
  // new AnimBlock(700, 300, 51, 51, 0, 0, 4, 1, 200),
  // new AnimBlock(850, 300, 51, 51, 0, 0, 4, 1, 200),

  new Block(400, 550, 51, 51, 2, 2),
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
  new BackBlocks(450, 550, 50, 50, 2, 1, 11),  
  new Background(1000, 550, 51, 51, 3, 2),
]
let text, progress, answerBlocks = [0, 0], answersMessages = [0, 0], bricks = [];

const init = () => {
  player.active = true;
  answerBlocks = [0, 0], answersMessages = [0, 0], bricks = [];

  let arr = new Array(questions[currentQuestion].variants.length);
  for(let i = 0; i < arr.length; i++) {
    answerBlocks[i] = new AnswerBlock(i, answerLayout[arr.length][i], 300, 51, 51, 0, 0, 4, 0, 32, questions[currentQuestion].variants[i].isRight); 
    answersMessages[i] = new Message(i, answerBlocks[i].x, answerBlocks[i].y-100, 100, 50, questions[currentQuestion].variants[i].text, 20, 'black', 'white', 10);
  }
  for(let i = 500; i <= 900; i+=50) {
    if(!answerLayout[arr.length].includes(i)) {
      bricks.push(new AnimBlock(i, 300, 51, 51, 0, 0, 4, 1, 200));
    }
  }
  text = new Sentence(questions[currentQuestion].question, 0, 50);
  progress = new Sentence(`${currentQuestion+1}/${questions.length}`, 0, 50, 'right');
}
init();

const checkCollision = () => {
  let isGrounded = false;
  const colliders = answerBlocks.length && bricks.length ? [...answerBlocks, ...bricks, ...blocks] : [...blocks];
  colliders.forEach(block => {
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
          if(block.type === 'answer') {
            let checked = block.checked;
            block.check();
            if(!block.isRight && !checked) {
              answersMessages[block.id].style = 'wrong';
              playSound(audio.wrong);
              player.active = false;
              shuffle();
              setTimeout(() => {
                currentQuestion = 0;
                init();
              }, 3000);
              setTimeout(() => player.active = true, 3500);
            } else if(!checked) {
              text.text = questions[currentQuestion].answer;
              playSound(audio.right);
              answersMessages[block.id].style = 'right';
              answerBlocks.forEach(block => {
                block.checked = true;
              })
              currentQuestion++;
              if(currentQuestion === questions.length) {
                setTimeout(() => {
                  openModal();
                  player.active = false;
                },1000)
              }
              setTimeout(() => {
                if(currentQuestion !== questions.length) {
                  init();
                }else {
                  currentQuestion = 0;
                }
              }, 3000)
            }
          }
        }
      }
    }
  });
  if(isGrounded) {
    player.isGrounded = true;
  } else player.isGrounded = false;
}

// const grid = new Grid();

const animation = () => {
  const scaleFactor = 0.5;
  
  canvas.height = canvas.height;
//   canvas.width = 1000; // Задає внутрішню ширину канвасу в 1000 пікселів
// canvas.height = 1000; // Задає внутрішню висоту канвасу в 1000 пікселів

// canvas.style.width = '500px'; // Задає відображену ширину канвасу в 500 пікселів через CSS
// canvas.style.height = '500px';

  // canvas.height = canvas.height;
  // canvas.style.height = `${canvas.height/2}px`;
  // canvas.style.width = `${canvas.width/2}px`;
  // // ctx.canvas.height = canvas.height * 2;
  
  
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, backgroundGradients[randomMap][0]);
  gradient.addColorStop(1, backgroundGradients[randomMap][1]);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.save();
  ctx.translate(Math.round(-player.x + canvas.width/2), Math.round(-player.y + canvas.height/2));
  checkCollision();
  blocks.forEach(block => {
    block.draw(ctx);
  });
  bricks.forEach(block => {
    block.draw(ctx);
  });
  backgrounds.forEach(block => {
    block.draw(ctx);
  });
  player.update();
  player.draw(ctx);
  
  answerBlocks.forEach(block => block.draw(ctx));
  answersMessages.forEach(message => message.draw(ctx)); //
  
  ctx.restore();
  text.draw(ctx);
  progress.draw(ctx);

  // ctx.scale(scaleFactor, scaleFactor);
  requestAnimationFrame(animation)
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