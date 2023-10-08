class Grid {
  constructor() {

  }

  draw(ctx) {
    
    ctx.beginPath();
    ctx.save();
    ctx.globalAlpha = 0.2;
    ctx.strokeStyle = "green"; // Встановлюємо колір бордера
    ctx.fillStyle = "green"; // Встановлюємо колір бордера
    ctx.lineWidth = 5; // Встановлюємо ширину бордера

    let ytiles = Math.ceil(ctx.canvas.height / 50);
    let xtiles = Math.ceil(ctx.canvas.width / 50);
    for (let i = 0; i < ytiles; i++) {
      for (let j = 0; j < xtiles; j++) {
        let xPosition = 0 - 25 + j * 50;
        ctx.font = '12px retro';
        ctx.globalAlpha = 1;
        ctx.fillText(`${j*50}`, xPosition + 50/2, i*50 - 50)
        ctx.fillText(`${i*50}`, xPosition + 50/2, i*50 + 10)
        ctx.globalAlpha = 0.2;
        ctx.fillRect(xPosition + 2, i*50 - 50/2 + 2, 46, 46);
      }
    }

    ctx.restore();
  }
}
