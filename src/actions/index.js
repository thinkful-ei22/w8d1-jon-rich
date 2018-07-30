//restartGame
export const restartGame = () => ({
  type: 'RESTART_GAME'
});

export const updateAural = () => ({
  type: 'UPDATE_AURAL'
});


//makeGuess
export const makeGuess = (guess) => ({
  type: 'MAKE_GUESS',
  guess
});