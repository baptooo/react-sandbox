import { createStore, combineReducers } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import MemeGen from './components/memegenView';
import * as quackAlert from 'quack-alert';

let memeStore;

const memeReducer = (state = { name: '', top: '', bottom: ''}, action) => {
  switch(action.type) {
    case 'UPDATE_MEME':
      return { ...state, [action.propName] : action.propValue };
    case 'CREATE_MEME':
      return { name: '', top: '', bottom: '' };
    default:
      return state;
  }
};

const memesReducer = (state = [], action) => {
  let { name, top, bottom } = action;

  switch(action.type) {
    case 'CREATE_MEME':
      if(!name || !top || !bottom) {
        alert('Coin !');
        throw('You cannot create a meme with no name, top or bottom')
      }
      return [
        ...state, `http://memegen.link/${name}/${top}/${bottom}.jpg`
      ];
    default:
      return state;
  }
};

const memegen = combineReducers({
  meme: memeReducer,
  memes: memesReducer
});


const render = () => {
  let { meme, memes } = memeStore.getState();
  let { name, top, bottom } = meme;

  ReactDOM.render(
    <MemeGen name={name} top={top} bottom={bottom} memes={memes}
             onUpdateName={(evt) => memeStore.dispatch({ type: 'UPDATE_MEME', propName: 'name', propValue: evt.target.value })}
             onUpdateTop={(evt) => memeStore.dispatch({ type: 'UPDATE_MEME', propName: 'top', propValue: evt.target.value })}
             onUpdateBottom={(evt) => memeStore.dispatch({ type: 'UPDATE_MEME', propName: 'bottom', propValue: evt.target.value })}
             onCreateMeme={(evt) => {
               evt.preventDefault();
               memeStore.dispatch({ type: 'CREATE_MEME', ...meme });
             }}
    />, document.getElementById('react-app')
  )
};

const init = (state = { meme: {}, memes: []}) => {
  memeStore = createStore(memegen, state);

  memeStore.subscribe(render);
  render();

};

export default init;