class Background {
  constructor(x, y, height, width, xOffset = 0, yOffset = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.drawImage(tiles, 16 * this.xOffset, 16 * this.yOffset, 16, 16, this.x - this.width/2, this.y - this.height/2, this.width, this.height);
  }
}