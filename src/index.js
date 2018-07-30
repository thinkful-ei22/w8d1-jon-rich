import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';
import {restartGame, makeGuess} from './actions/index'
import store from './store';

console.log(store.getState());
store.dispatch(makeGuess(7))
console.log(store.getState());

console.log(store.getState());
store.dispatch(restartGame())
console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
