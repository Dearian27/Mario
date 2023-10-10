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
btnRight.classList.add('active');
btnRight.classList.remove('active');
btnLeft.classList.add('active');
btnLeft.classList.remove('active');
btnUp.classList.add('active');
btnUp.classList.remove('active');


window.addEventListener('touchstart', (event) => {
  switch(event.target) {
    case btnRight: controls.right = true; btnRight.classList.add('active'); break; //D
    case btnLeft: controls.left = true; btnLeft.classList.add('active'); break; //A
    case btnUp: controls.jump = true; btnUp.classList.add('active'); break;
  }
});

// Обробник події для відтискання кнопки
window.addEventListener('touchend', (event) => {
  switch(event.target) {
    case btnRight: controls.right = false; btnRight.classList.remove('active'); break; //D
    case btnLeft: controls.left = false; btnLeft.classList.remove('active');; break; //A
    case btnUp: controls.jump = false; btnUp.classList.remove('active'); break;
  }
});


