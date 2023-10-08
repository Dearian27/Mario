class Mario {
  constructor(x, y, height, width, assets, assetsSize = 18) {
    this.height = height;
    this.width = width;
    this.x = x - (width/2);
    this.y = y - (height/2);
    this.velocity = {
      x: 0,
      y: 0
    }
    this.assets = assets;
    this.frame = 0;
    this.row = 0;
    this.assetsSize = assetsSize; // 'cause animation frame is a square
    this.direction = 'right'; // 'right'
    this.currentAnim = 'idle';
    this.frameDelay = 0;
    this.maxFrameDelay = 8;

    this.isGrounded = true;
  }
  checkAnimation(anim, row) {
    if(this.currentAnim !== anim) {
      this.currentAnim = anim;
      this.row = row;
      this.frameDelay = 0;
      this.frame = 0;
    }
  }
  frameAnim(framesCount, delaysCount = 5, repeat = true) {
    this.frameDelay++;
      if(this.frameDelay >= delaysCount) {
        this.frameDelay = 0;
        if(this.frame === framesCount-1) {
          if(!repeat) return;
          this.frame = 0;
        } else {
          this.frame++;
        }
      }
  }
  animation() {
    if(!this.isGrounded) {
      this.checkAnimation('jump', 2);
      this.frameAnim(3, 4, false)
    } else {
      if(this.velocity.x !== 0) {
        this.checkAnimation('running', 1);
        this.frameAnim(3, 7)
      } else if(this.velocity.x === 0) {
        this.checkAnimation('idle', 0);
        this.frameAnim(2, 30)
      }
    }
  }
  update() {
    if(controls.right) {
      this.velocity.x = 3;
      this.direction = 'right';
    }
    if(controls.left) {
      this.velocity.x = -3;
      this.direction = 'left';
    }
    if(controls.jump && this.isGrounded) {
      this.velocity.y = -11;
      this.isGrounded = false;
    }
        
    this.velocity.y += 0.3; // gravity
    this.y += this.velocity.y;
    this.x += this.velocity.x;
    this.animation();
    this.velocity.x = 0;
    
  }
  
  draw(ctx) {
    let offset = 0;
    ctx.save();
    ctx.translate(this.x, this.y);
    
    if(this.direction == 'left') { //flip
      ctx.scale(-1, 1);
    }
    ctx.drawImage(this.assets, this.frame * this.assetsSize, this.row * this.assetsSize, this.assetsSize, this.assetsSize, offset  - this.width/2, 0 - this.height/2, this.width, this.height);

    ctx.globalAlpha = 0.4;
    ctx.fillStyle = 'green';
    // ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
    ctx.restore();
    ctx.scale(1, 1);
  }
}