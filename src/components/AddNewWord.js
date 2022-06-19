import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../css/AddNewWord.css';
import { useSelector } from 'react-redux';
import { addNewWord, updateStateWords } from '../app/wordSlice';
import { db } from '../services/firebase';

function AddNewWord() {
  const dispatch = useDispatch();

  const words = useSelector((state) => state.wordSlice.words);

  const enWords = words.map((x) => x.en);

  const [en, setEn] = useState('');
  const [tr, setTr] = useState('');
  const [exp, setExp] = useState('');

  const changing = (inputName, value) => {
    switch (inputName) {
      case 'en':
        setEn(value);
        break;
      case 'tr':
        setTr(value);
        break;
      case 'exp':
        setExp(value);
        break;
      default:
        break;
    }
  };

  const isWordExist = () => en !== '' && tr !== '' && true;
  const areWordsNew = () => {
    if (enWords.indexOf(en) !== -1) {
      if (words.find((x) => x.en === en).tr !== tr) return true;
    } else return true;
  };

  const clearAreas = () => {
    setEn('');
    setTr('');
    setExp('');
  };

  const refreshState = () => {
    db.collection('words')
      .orderBy('en')
      .get()
      .then((snapshot) => {
        const words = [];
        snapshot.forEach((doc) => words.push(doc.data()));
        dispatch(updateStateWords(words));
      });
  };

  const clickSave = (e) => {
    e.preventDefault();
    if (!isWordExist()) {
      alert('Please give an english and a turkish word!');
    } else {
      if (areWordsNew()) dispatch(addNewWord({ en: en, tr: tr, exp: exp }));
      else alert('You already have this word and this meaning');
    }
    clearAreas();
    refreshState();
  };

  return (
    <div className='addNewWord'>
      <div className='panel panel__addNewWord'>
        <form className='newWordForm'>
          <input
            type='text'
            value={en}
            onChange={(e) => changing('en', e.target.value)}
            placeholder='English..'
            className='wordInput'
          />
          <input
            type='text'
            value={tr}
            onChange={(e) => changing('tr', e.target.value)}
            placeholder='Turkish..'
            className='wordInput'
          />
          <input
            type='text'
            value={exp}
            onChange={(e) => changing('exp', e.target.value)}
            placeholder='Explanation if its needed..'
            className='expInput'
          />
          <button onClick={(e) => clickSave(e)} className='submitInput'>
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewWord;
