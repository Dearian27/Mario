class Sentence {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
  }
  update() {

  }
  draw(ctx) {
    ctx.beginPath();
    ctx.textAlign = "center";
    ctx.font = '36px Retro'; // Встановлення розміру та шрифта
    ctx.fillStyle = "white";
    ctx.fillText(this.text, ctx.canvas.width / 2, this.y); // Виведення тексту
  }
}