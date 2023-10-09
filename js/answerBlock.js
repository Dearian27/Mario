class AnswerBlock extends Block {
  constructor(id, x, y, height, width, xOffset = 0, yOffset = 0, framesCount, row, startDelay = 32, isRight) {
    super(x, y, height, width, xOffset, yOffset);
    this.id = id;
    this.framesCount = framesCount;
    this.row = row;
    this.delaysCount = 5;
    this.frame = 0;
    this.frameDelay = 0;
    this.maxFrameDelay = 8;
    this.startDelay = startDelay;
    this.isRight = isRight;
    this.type = 'answer'; 
    this.isMovingRight = false; // Додаємо новий параметр для слідкування за анімацією
    this.moveCount = 0; // Лічильник кадрів анімації

    this.checked = false
  }
  update() {
    this.frameDelay++
    if(this.frame === 0) {
      this.maxFrameDelay = this.startDelay;
    } else this.maxFrameDelay = 8;

    if(this.frameDelay >= this.maxFrameDelay) {
      this.frameDelay = 0;
      this.frame++;
      if(this.frame == this.framesCount) {
        this.frame = 0;
      }
    }

    if (this.isMovingRight) {
      this.moveCount++;
      if (this.moveCount <= 10) {
        this.y -= 4;
      } else if (this.moveCount <= 20) { 
        this.y += 4;
      } else {
        this.isMovingRight = false;
        this.moveCount = 0;
      }
    }
  }
  check() {
    if(!this.checked) {
      this.checked = true;
      if(this.isRight) {
        this.right();
      } else {
        this.row = 1;
        setTimeout(() => {
          this.row = 0;
        }, 3000);
      }
    }
  }
  right() {
    if (!this.isMovingRight) {
      this.isMovingRight = true;
    }
  }
  draw() {
    this.update();
    ctx.beginPath();
    ctx.drawImage(animTiles, tileSize * this.frame, tileSize * this.row, tileSize, tileSize, this.x - this.width/2, this.y - this.height/2, this.width, this.height);
  }
}