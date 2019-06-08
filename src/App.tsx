import React from 'react';

import './App.css';
import {BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header inCourse={true} />
        <Body/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
