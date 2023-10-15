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

const crossBtn = document.querySelector('.cross');
crossBtn.addEventListener('click', () => {
  rotateModal.classList.remove('active');
  crossBtn.classList.add('active');
})
const rotateModal = document.getElementById('rotateModal');
const orientationCheck = () => {
  if (
    window.innerWidth < window.innerHeight &&
    !crossBtn.classList.contains('active')
  ) {
    rotateModal.classList.add('active');
  } else {
    rotateModal.classList.remove('active');
  }
}
orientationCheck();
// window.addEventListener('orientationchange', (event) => {
//   orientationCheck();
// })

let logs = ['keysVis: false; ', 'touch: false; ', 'mouse: false; ', 'wasTouch: false; ', 'wasMouse: false; ' , 0];
const logHTML = document.getElementById('logs');
// logHTML.innerHTML = logs.join('\n');

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
  
  logs[5]++;
  if(document.querySelector('.control').style.visibility === 'visible') {
    logs[0] = 'keysVis: true; ';
  } else {
    logs[0] = 'keysVis: false; ';
  }
  // logHTML.innerHTML = logs.join('\n');
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
      
      if(document.querySelector('.control').style.visibility === 'visible') {
        logs[0] = 'keysVis: true; ';
        // logHTML.innerHTML = logs.join('\n');
      } else {
        logs[0] = 'keysVis: true; ';
        // logHTML.innerHTML = logs.join('\n');
      }
  }
}


window.addEventListener('touchstart', (event) => {
  if(event.target === btnRight || event.target === btnUp || event.target === btnLeft) {  
    logs[1] = 'touchstart: true; ';
    logs[3] = 'wasTouch: true; ';
    // logHTML.innerHTML = logs.join('\n');
  }
  switch(event.target) {
    case btnRight: controls.right = true; btnRight.classList.add('active'); break; //D
    case btnLeft: controls.left = true; btnLeft.classList.add('active'); break; //A
    case btnUp: controls.jump = true; btnUp.classList.add('active'); break;
  }
});

window.addEventListener('touchend', (event) => {
  if(event.target === btnRight || event.target === btnUp || event.target === btnLeft) {
    logs[1] = 'touch: false; ';
    // logHTML.innerHTML = logs.join('\n');
  }
  
  switch(event.target) {
    case btnRight: controls.right = false; btnRight.classList.remove('active'); break; //D
    case btnLeft: controls.left = false; btnLeft.classList.remove('active');; break; //A
    case btnUp: controls.jump = false; btnUp.classList.remove('active'); break;
  }
});


window.addEventListener('mousedown', (event) => {
  if(event.target === btnRight || event.target === btnUp || event.target === btnLeft) {
    logs[2] = 'mouse: true; ';
    logs[4] = 'wasMouse: true; ';
    // logHTML.innerHTML = logs.join('\n');
  }

  switch(event.target) {
    case btnRight: controls.right = true; btnRight.classList.add('active'); break; //D
    case btnLeft: controls.left = true; btnLeft.classList.add('active'); break; //A
    case btnUp: controls.jump = true; btnUp.classList.add('active'); break;
  }
});

window.addEventListener('mouseup', (event) => {
  if(event.target === btnRight || event.target === btnUp || event.target === btnLeft) {
    logs[2] = 'mouse: false; ';
    // logHTML.innerHTML = logs.join('\n');
  }

  switch(event.target) {
    case btnRight: controls.right = false; btnRight.classList.remove('active'); break; //D
    case btnLeft: controls.left = false; btnLeft.classList.remove('active');; break; //A
    case btnUp: controls.jump = false; btnUp.classList.remove('active'); break;
  }
});


