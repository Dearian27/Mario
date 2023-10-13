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

const rotateModal = document.getElementById('rotateModal');
const orientationCheck = () => {
  if (
    // /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet/i.test(navigator.userAgent) &&
    screen.orientation.type === "portrait-primary" 
  ) {
    rotateModal.classList.add('active');
  } else {
    rotateModal.classList.remove('active');
  }
}
orientationCheck();
window.addEventListener('orientationchange', (event) => {
  orientationCheck();
})


const btnKeys = document.getElementById('keys');
btnKeys.classList.add('active');
btnKeys.classList.remove('active');
btnKeys.addEventListener('click', (event) => { 
  if(btnKeys.classList.contains('active')) {
    btnKeys.classList.remove('active');
    btnKeys.classList.add('disabled');
    document.querySelectorAll('.control').forEach(el => el.style.visibility = 'hidden');
  } else {
    btnKeys.classList.remove('disabled');
    btnKeys.classList.add('active');
    document.querySelectorAll('.control').forEach(el => el.style.visibility = 'visible');
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

console.log(btnRight, btnUp);


btnLeft.addEventListener('contextmenu', (event) =>
  event.preventDefault()
)
btnUp.addEventListener('contextmenu', (event) =>
  event.preventDefault()
)
btnRight.addEventListener('contextmenu', (event) =>
  event.preventDefault()
)

window.onload = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ||
    window.innerWidth < 1050
    ) {
    document.querySelectorAll('.control').forEach(el => el.style.visibility = 'visible');
  }
}

window.addEventListener('mousedown', (event) => {
  console.log(event.target);
  switch(event.target) {
    case btnRight: controls.right = true; btnRight.classList.add('active'); break; //D
    case btnLeft: controls.left = true; btnLeft.classList.add('active'); break; //A
    case btnUp: controls.jump = true; btnUp.classList.add('active'); break;
  }
});

// Обробник події для відтискання кнопки
window.addEventListener('mouseup', (event) => {
  switch(event.target) {
    case btnRight: controls.right = false; btnRight.classList.remove('active'); break; //D
    case btnLeft: controls.left = false; btnLeft.classList.remove('active');; break; //A
    case btnUp: controls.jump = false; btnUp.classList.remove('active'); break;
  }
});


