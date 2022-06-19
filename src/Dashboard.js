import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/Dashboard.css';
import AllWords from './AllWords';
import RandomWord from './RandomWord';
import AddNewWord from './AddNewWord';

function Dashboard() {
  return (
    <div className='dashBoard'>
      <Router>
        <Routes>
          <Route path='/' element={<RandomWord />} />
          <Route path='/all-words' element={<AllWords />} />
          <Route path='/add-new-word' element={<AddNewWord />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Dashboard;
