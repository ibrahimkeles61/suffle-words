import React from 'react';
import '../css/AllWords.css';
// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from './Card';

function AllWords() {
  const words = useSelector((state) => state.wordSlice.words);

  // const params = useParams(); //adres çubuğundan kendi tanımladığım değişkenleri çekebilmek için

  return (
    <div className='allWords'>
      <div className='cards'>
        {words.map((word) => (
          <Card
            key={word.id}
            id={word.id}
            en={word.en}
            tr={word.tr}
            exp={word.exp}
          />
        ))}
      </div>
    </div>
  );
}

export default AllWords;
