window.addEventListener("message", (e) => {
  if (
    event.origin !== "http://localhost:3000" ||
    event.origin.includes("solution-school")
  ) {
    return;
  }
  if (!gameIsStarted) {
    gameIsStarted = true;
    let data = e.data;
    data = data.map((question) => {
      let rightVariant = question.variants.find(
        (variant) => variant.isRight === true
      );
      let limitedVariants = question.variants.filter(
        (variant) => !variant.isRight
      );
      if (limitedVariants.length > 2) {
        limitedVariants = limitedVariants.slice(0, 2);
      }
      return { ...question, variants: [...limitedVariants, rightVariant] };
    });
    startGame(data);
  }
});
