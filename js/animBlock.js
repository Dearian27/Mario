class AnimBlock extends Block {
  constructor(x, y, height, width, xOffset = 0, yOffset = 0, framesCount, row) {
    super(x, y, height, width, xOffset, yOffset);
    this.framesCount = framesCount;
    this.row = row;
    this.delaysCount = 5;
    this.frame = 0;
    this.frameDelay = 0;
    this.maxFrameDelay = 8;
  }
  update() {
    this.frameDelay++
    if(this.frame === 0) {
      this.maxFrameDelay = 32;
    } else this.maxFrameDelay = 8;

    if(this.frameDelay >= this.maxFrameDelay) {
      this.frameDelay = 0;
      this.frame++;
      if(this.frame == this.framesCount) {
        this.frame = 0;
      }
    }
  }
  draw() {
    this.update();
    ctx.beginPath();
    ctx.drawImage(tiles, tileSize * this.frame, tileSize * this.row, tileSize, tileSize, this.x - this.width/2, this.y - this.height/2, this.width, this.height);
  }
}