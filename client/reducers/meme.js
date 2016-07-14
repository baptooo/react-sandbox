const initialState = {
  name: '',
  top: '',
  bottom: '',
};

const meme = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROP':
      return {
        ...state,
        [action.propName]: action.propValue,
      };
    case 'SUBMIT_MEME':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default meme;