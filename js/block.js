class Block {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(this.x - (this.width/2), this.y - (this.height/2), this.width, this.height);

  }
}