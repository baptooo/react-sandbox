// Vendors imports
import { combineReducers, createStore, applyMiddleware } from 'redux';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as quack from 'quack-alert';

// App imports
import * as reducers from './reducers';
import MemeContainer from './container/MemeContainer';
import MemesContainer from './container/MemesContainer';
import MemeMiddleware from './middlewares/MemeMiddleware';

const initialState = { meme: { name: 'success', top: '', bottom: '' } };

const App = () => (
  <div>
    <MemeContainer/>
    <MemesContainer/>
  </div>
);

const init = (state) => {
  const reducer = combineReducers(reducers);
  const store = createStore(
    reducer,
    { ...initialState, ...state },
    applyMiddleware( MemeMiddleware ),
  );

  render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('react-app'));
};

export default init;