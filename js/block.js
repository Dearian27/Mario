class Block {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.beginPath();
    // ctx.fillStyle = "brown";
    // ctx.globalAlpha = 0.2;
    // ctx.fillStyle = "white";

    ctx.drawImage(tiles, 0, 0, 16, 16, this.x - this.width/2, this.y - this.height/2, this.width, this.height);
    
    var numTiles = Math.ceil(this.width / 50); // Кількість спрайтів, які вміщаються в ширину блока
    for (var i = 0; i < numTiles; i++) {
        var xPosition = this.x - this.width/2 + i * 50; // Зміщення по горизонталі
        ctx.drawImage(tiles, 0, 0, 16, 16, xPosition, this.y - this.height/2, 50, 50);
    }
    // ctx.drawImage(tiles, this.x - this.width/2, this.y - this.height/2, this.width, this.height*2);


    // ctx.drawImage(tiles, 0, 0, this.width, this.height, this.x - (this.width/2), this.y - (this.height/2), this.width, this.height);

  }
}