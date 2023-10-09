class BackBlocks {
  constructor(x, y, width, height, frame, row, count) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.frame = frame;
    this.row = row;
    this.count = count;
  }
  draw(ctx) {
    ctx.beginPath();
    for(let i = 0; i < this.count; i++) {
      ctx.drawImage(tiles, tileSize * this.frame + blocksOffset[randomMap], tileSize * this.row, tileSize, tileSize, this.x - this.width/2 + 50 * i, this.y - this.height/2, this.width, this.height);
    }
  }
}