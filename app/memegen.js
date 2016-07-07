import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import MemeGen from './memegenView';

let memeState, memeStore, memepropStore;

const memeprop = (state = { name: '', top: '', bottom: ''}, action) => {
  switch(action.type) {
    case 'UPDATE_PROP':
      return { ...state, [action.propName] : action.propValue };
    case 'RESET_PROPS':
      return { name: '', top: '', bottom: '' };
    default:
      return state;
  }
};

const memegen = (state = memeState, action) => {
  let { meme, memes } = state;
  let { name, top, bottom } = meme;

  switch(action.type) {
    case 'UPDATE_MEME':
      memepropStore.dispatch({ ...action, type: 'UPDATE_PROP' });
      return { ...state, meme: memepropStore.getState() };
    case 'CREATE_MEME':
      if(!name || !top || !bottom) {
        throw('You cannot create a meme with empty vars');
      } else {
        memepropStore.dispatch({ type: 'RESET_PROPS' });

        return { ...state,
          memes: [...memes, `http://memegen.link/${name}/${top}/${bottom}.jpg`],
          meme: memepropStore.getState()
        };
      }
    default:
      return state;
  }
};



const render = () => {
  let { meme, memes } = memeStore.getState();
  let { name, top, bottom } = meme;

  ReactDOM.render(
    <MemeGen name={name} top={top} bottom={bottom} memes={memes}
             onUpdateName={(evt) => memeStore.dispatch({ type: 'UPDATE_MEME', propName: 'name', propValue: evt.target.value })}
             onUpdateTop={(evt) => memeStore.dispatch({ type: 'UPDATE_MEME', propName: 'top', propValue: evt.target.value })}
             onUpdateBottom={(evt) => memeStore.dispatch({ type: 'UPDATE_MEME', propName: 'bottom', propValue: evt.target.value })}
             onCreateMeme={(evt) => memeStore.dispatch({ type: 'CREATE_MEME' })}
    />, document.getElementById('react-app')
  )
};

const init = (state = { meme: {}, memes: []}) => {
  memeState = state;
  memeStore = createStore(memegen);
  memepropStore = createStore(memeprop);

  memeStore.subscribe(render);
  render();

};

export default init;