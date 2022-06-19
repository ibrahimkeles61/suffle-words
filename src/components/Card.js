import React, { useState } from 'react';
import '../css/Card.css';

function Front({ en, flip }) {
  return (
    <div className='card' onClick={flip}>
      {en}
    </div>
  );
}

function Back({ tr, flip }) {
  return (
    <div className='card' onClick={flip}>
      {tr}
    </div>
  );
}

function ExpSide({ exp, flip }) {
  return (
    <div className='card expSide' onClick={flip}>
      {exp}
    </div>
  );
}

function Card({ en, tr, exp }) {
  const [show, setShow] = useState('front');

  const flip = () => {
    if (exp) {
      if (show === 'front') setShow('back');
      else if (show === 'back') setShow('exp');
      else if (show === 'exp') setShow('front');
    } else {
      show === 'front' ? setShow('back') : setShow('front');
    }
  };

  if (show === 'front') {
    return <Front en={en} flip={flip} />;
  } else if (show === 'back') {
    return <Back tr={tr} flip={flip} />;
  } else if (show === 'exp') {
    return <ExpSide exp={exp} flip={flip} />;
  }
}

export default Card;
