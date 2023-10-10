const controls = {
  jump: false,
  left: false,
  right: false,
}

window.addEventListener('keydown', (event) => {
  switch(event.keyCode) {
    case 68: controls.right = true; break; //D
    case 39: controls.right = true; break; //arrow right
    case 65: controls.left = true; break; //A
    case 37: controls.left = true; break; //arrow left
    case 32: controls.jump = true; break;
  }
})

window.addEventListener('keyup', (event) => {
  switch(event.keyCode) {
    case 68: controls.right = false; break;
    case 39: controls.right = false; break; //arrow right
    case 65: controls.left = false; break;
    case 37: controls.left = false; break; //arrow left
    case 32: controls.jump = false; break;
  }
})


const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnUp = document.querySelector('#up');

window.addEventListener('touchstart', (event) => {
  switch(event.target) {
    case btnRight: controls.right = true; btnRight.style.background = "url('./assets/right_a.png')"; break; //D
    case btnLeft: controls.left = true; btnLeft.style.background = 'url("./assets/left_a.png")'; break; //A
    case btnUp: controls.jump = true; btnUp.style.background = 'url("./assets/up_a.png")'; break;
  }
});

// Обробник події для відтискання кнопки
window.addEventListener('touchend', (event) => {
  switch(event.target) {
    case btnRight: controls.right = false; btnRight.style.background = 'url("./assets/right.png")'; break; //D
    case btnLeft: controls.left = false; btnLeft.style.background = 'url("./assets/left.png")'; break; //A
    case btnUp: controls.jump = false; btnUp.style.background = 'url("./assets/up.png")'; break;
  }
});


