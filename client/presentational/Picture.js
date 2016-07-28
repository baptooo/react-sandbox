import React, { PropTypes } from 'react';
import styles from './Memes.css';

const Picture = ({
  url
}) => (
  <article className={styles.picture}>
    <div className={styles.picture__wrapper}>
      <img src={url} alt={'meme:' + url} className={styles.picture__img} />
    </div>
  </article>
);

Picture.propTypes = {
  url: PropTypes.string.isRequired,
};

Picture.defaultProps = {
  url: '',
};

export default Picture;