//restartGame
export const restartGame = () => ({
  type: "RESTART_GAME"
})


//makeGuess
export const makeGuess = (guess) => ({
  type: "MAKE_GUESS",
  guess
})