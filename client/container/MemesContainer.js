import { connect } from 'react-redux';
import Memes from '../presentational/Memes';

const mapPropToState = (state) => {
  return {
    memes: state.memes
  }
};

export default connect(
  mapPropToState,
)(Memes);