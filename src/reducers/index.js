

const initialState = {
  guesses:[],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export const gameReducer = (state=initialState, action) => {
  const generateAuralUpdate = function(guesses, feedback) {
    // const { guesses, feedback } = initialState;
  
    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;
  
    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
  
    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }
    return auralStatus;
  };
  if (action.type === 'RESTART_GAME') {
    return Object.assign({}, state,  {
      guesses:[],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.round(Math.random() * 100) + 1
    });
  }
  else if (action.type === 'MAKE_GUESS') {
    let feedback, guess;

    guess = parseInt(action.guess, 10);

    if (isNaN(guess)) {
      console.log(guess);
      feedback = 'Please enter a valid number.';

      return Object.assign({}, state, {
        guesses: [...state.guesses, guess],
        feedback
      });
    }
    const difference = Math.abs(guess - state.correctAnswer);

    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }
      
    let guesses = [...state.guesses, guess];

    return Object.assign({}, state, {
      feedback,
      guesses,
      auralStatus: generateAuralUpdate(guesses, feedback)
    });
  } else if (action.type === 'UPDATE_AURAL') {
    const {guesses, feedback} = state;
    generateAuralUpdate(guesses,feedback);
    return Object.assign({}, state, {auralStatus: generateAuralUpdate(guesses,feedback)});
  } else {
    return state;
  }
};
