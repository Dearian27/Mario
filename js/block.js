class Block {
  constructor(x, y, height, width, xOffset = 0, yOffset = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.type = 'default'; 
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.drawImage(tiles, tileSize * this.xOffset + blocksOffset[randomMap], tileSize * this.yOffset, tileSize, tileSize, this.x - this.width/2, this.y - this.height/2, this.width, this.height);
    // ctx.drawImage(tiles, this.x - this.width/2, this.y - this.height/2, this.width, this.height*2);
    // ctx.drawImage(tiles, 0, 0, this.width, this.height, this.x - (this.width/2), this.y - (this.height/2), this.width, this.height);

  }
}