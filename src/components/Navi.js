import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navi.css';

function Navi() {
  return (
    <div className='navi'>
      <Link to='/all-words'>
        <button className='naviButton'>All Words</button>
      </Link>
      <span className='headline'>Shuffle Words</span>
      <Link to='/'>
        <button className='naviButton'>Random Word</button>
      </Link>
      <Link to='/add-new-word'>
        <button className='naviButton'>Add New Word</button>
      </Link>
    </div>
  );
}

export default Navi;
