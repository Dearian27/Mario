const controls = {
  jump: false,
  left: false,
  right: false,
}

window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'd' || 'D': controls.right = true; break;
    case 'a' || 'A': controls.left = true; break;
    case ' ': controls.jump = true; break;
  }
})

window.addEventListener('keyup', (event) => {
  switch(event.key) {
    case 'd' || 'D': controls.right = false; break;
    case 'a' || 'A': controls.left = false; break;
    case ' ': controls.jump = false; break;
  }
})