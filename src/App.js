import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './roughCopy';
import Navi from './components/Navi';
import RandomWord from './components/RandomWord';
import AllWords from './components/AllWords';
import AddNewWord from './components/AddNewWord';
import { updateStateWords } from './app/wordSlice';
import { db } from './services/firebase';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection('words')
      .orderBy('en')
      .get()
      .then((snapshot) => {
        const words = [];
        snapshot.forEach((doc) => words.push(doc.data()));
        dispatch(updateStateWords(words));
      });
  }, []); //redux içerisinde yapamadığım için veri tabanındaki wordsü stateteki wordse buradan atıyorum

  return (
    <div className='app'>
      <Router>
        <Navi />
        <div className='dashBoard'>
          <Routes>
            <Route path='/' element={<RandomWord />} />
            <Route path='/all-words' element={<AllWords />} />
            <Route path='/add-new-word' element={<AddNewWord />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
