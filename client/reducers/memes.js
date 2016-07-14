const initialState = [];

const memes = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_MEME':
      let {name, top, bottom } = action;

      return [
        ...state,
        `http://memegen.link/${name}/${top}/${bottom}.jpg`,
      ];
    default:
      return state;
  }
};

export default memes;