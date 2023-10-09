class Sentence {
  constructor(text, x, y, textAlign = 'center') {
    this.text = text;
    this.x = x;
    this.y = y;
    this.textAlign = textAlign;
  }
  update() {

  }
  draw(ctx) {
    ctx.beginPath();
    ctx.textAlign = 'center';
    ctx.font = '36px Retro'; // Встановлення розміру та шрифта
    ctx.fillStyle = "white";
    ctx.fillText(this.text, this.textAlign === 'center' ? ctx.canvas.width / 2 : this.textAlign === 'right' ? ctx.canvas.width - ctx.measureText(text).width/4 : 0, this.y); // Виведення тексту
  }
}