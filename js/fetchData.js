window.addEventListener("message", (e) => {
  if (
    event.origin !== "http://localhost:3000" ||
    event.origin.includes("solution-school")
  ) {
    return;
  }
  if (!gameIsStarted) {
    gameIsStarted = true;
    const data = e.data;
    startGame(data);
  }
});
