import React, {PropTypes} from 'react';
import * as styles from './Meme.css';

const Meme = ({
  name, top, bottom,
  createMeme, updateName, updateTop, updateBottom,
}) => (
  <form noValidate className={styles.form} onSubmit={createMeme}>
    <p className={styles.field}>
      <label htmlFor="memeName">Meme name :</label>
      <input id="memeName" value={name} name="memeName" type="text" onChange={updateName} />
    </p>
    <p className={styles.field}>
      <label htmlFor="memeTop">Meme top text :</label>
      <input id="memeTop" value={top} name="memeTop" type="text" onChange={updateTop} />
    </p>
    <p className={styles.field}>
      <label htmlFor="memeBottom">Meme bottom text :</label>
      <input id="memeBottom" value={bottom} name="memeBottom" type="text" onChange={updateBottom} />
    </p>
    <button className={styles.button}>Create meme</button>
  </form>
);

Meme.propTypes = {
  name: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  createMeme: PropTypes.func,
  updateName: PropTypes.func,
  updateTop: PropTypes.func,
  updateBottom: PropTypes.func,
};

Meme.defaultProps = {
  name: '',
  top: '',
  bottom: '',
  createMeme: null,
  updateName: null,
  updateTop: null,
  updateBottom: null,
};

export default Meme;
