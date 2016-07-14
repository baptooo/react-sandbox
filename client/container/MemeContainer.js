import { connect } from 'react-redux';
import Meme from '../presentational/Meme';

const createMeme = (evt) => {
  evt.preventDefault();

  return {
    type: 'SUBMIT_MEME'
  }
};

const updateProp = (name, value) => {
  return {
    type: 'UPDATE_PROP',
    propName: name,
    propValue: value,
  };
};

const updateName = (evt) => updateProp('name', evt.target.value);
const updateTop = (evt) => updateProp('top', evt.target.value);
const updateBottom = (evt) => updateProp('bottom', evt.target.value);

const mapPropToState = (state) => {
  return {
    ...state.meme
  };
};

export default connect(
  mapPropToState,
  { createMeme, updateName, updateTop, updateBottom }
)(Meme);