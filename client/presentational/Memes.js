import React, { PropTypes } from 'react';

const Memes = ({
  memes,
}) => (
  <fieldset style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '2rem' }}>
    {memes.map((url, key) => {
      return <img src={url} alt={'meme:' + url} key={key} style={{ maxWidth: '50%' }} />
    })}
  </fieldset>
);

Memes.propTypes = {
  memes: PropTypes.array.isRequired,
};

Memes.defaultProps = {
  memes: [],
};

export default Memes;