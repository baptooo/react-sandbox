import React from 'react';
import styles from './memegen.css';

const MemeForm = ({
  name, top, bottom,
  onUpdateName, onUpdateTop, onUpdateBottom, onCreateMeme
}) => {
  return (
    <form noValidate className={styles.form} onSubmit={onCreateMeme}>
      <p className={styles.field}>
        <label htmlFor="memeName">Meme name :</label>
        <input id="memeName" value={name} name="memeName" type="text" onChange={onUpdateName}/>
      </p>
      <p className={styles.field}>
        <label htmlFor="memeTop">Meme top text :</label>
        <input id="memeTop" value={top} name="memeTop" type="text" onChange={onUpdateTop}/>
      </p>
      <p className={styles.field}>
        <label htmlFor="memeBottom">Meme bottom text :</label>
        <input id="memeBottom" value={bottom} name="memeBottom" type="text" onChange={onUpdateBottom}/>
      </p>
      <button className={styles.button} onClick={onCreateMeme}>Create meme</button>
    </form>
  );
};

const MemeList = ({
  memes
}) => {
  return (
    <fieldset style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '2rem' }}>
      {memes.map((url, key) => {
        return <img src={url} alt={'meme:' + url} key={key} style={{ maxWidth: '50%' }} />
      })}
    </fieldset>
  );
};

const MemeGen = ({
  name, top, bottom, memes,
  onUpdateName, onUpdateTop, onUpdateBottom, onCreateMeme
}) => {
  return (
    <div>
      <MemeForm name={name} top={top} bottom={bottom}
                onUpdateName={onUpdateName}
                onUpdateTop={onUpdateTop}
                onUpdateBottom={onUpdateBottom}
                onCreateMeme={onCreateMeme}/>
      <MemeList memes={memes} />
    </div>
  )
};

export default MemeGen;