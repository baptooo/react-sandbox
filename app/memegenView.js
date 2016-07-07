import React from 'react';

const MemeForm = ({
  name, top, bottom,
  onUpdateName, onUpdateTop, onUpdateBottom, onCreateMeme
}) => {
  return (
    <form noValidate>
      <p>
        <label htmlFor="memeName">Meme name :</label>
        <input value={name} name="memeName" type="text" onChange={onUpdateName}/>
      </p>
      <p>
        <label htmlFor="memeTop">Meme top text :</label>
        <input value={top} name="memeTop" type="text" onChange={onUpdateTop}/>
      </p>
      <p>
        <label htmlFor="memeBottom">Meme bottom text :</label>
        <input value={bottom} name="memeBottom" type="text" onChange={onUpdateBottom}/>
      </p>
      <button type="button" onClick={onCreateMeme}>Create meme</button>
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