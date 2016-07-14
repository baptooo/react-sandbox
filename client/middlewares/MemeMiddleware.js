const MemeMiddleware = store => next => action => {
  let { meme } = store.getState();

  if(action.type === 'SUBMIT_MEME') {
    let { name, top, bottom } = meme;
    if(!name || !top || !bottom) {
      alert('Coin !');
      throw('You cannot create a meme with no name, top or bottom')
    }
    store.dispatch({ type: 'CREATE_MEME', ...meme });
  }

  return next(action);
};

export default MemeMiddleware;