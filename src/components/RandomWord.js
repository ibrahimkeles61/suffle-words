import React, { useState } from 'react';
import '../css/RandomWord.css';
import { useSelector } from 'react-redux';

function RandomWord() {
  const words = useSelector((state) => state.wordSlice.words);

  const random = (x) => Math.floor(Math.random() * x);

  const [side, setSide] = useState(random(2));

  const change_random_word = () => set_random_word(words[random(words.length)]);

  const [random_word, set_random_word] = useState({ en: 'GO', tr: 'BAŞLA' });

  const go_next = () => {
    setSide(random(2));
    change_random_word();
    console.log(words);
  };

  const flip = () => (side === 1 ? setSide(0) : setSide(1));

  return (
    <div className='randomWord'>
      <div className='panel' onClick={flip}>
        {side === 1
          ? random_word.en.toUpperCase()
          : random_word.tr.toUpperCase()}
        <div className='right__arrow__box' onClick={go_next} />
      </div>
    </div>
  );
}

export default RandomWord;
