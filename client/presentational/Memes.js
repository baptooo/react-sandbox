import React, { PropTypes } from 'react';
import styles from './Memes.css';
import Picture from './Picture';

const Memes = ({
  memes,
}) => (
  <section className={styles.container}>
    {memes.map((url, key) => {
      return <Picture key={key} url={url} />
    })}
  </section>
);

Memes.propTypes = {
  memes: PropTypes.array.isRequired,
};

Memes.defaultProps = {
  memes: [],
};

export default Memes;