const controls = {
  jump: false,
  left: false,
  right: false,
}

window.addEventListener('keydown', (event) => {
  console.log(event.key, event.keyCode)
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