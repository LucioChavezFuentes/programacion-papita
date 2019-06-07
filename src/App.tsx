import React from 'react';

import './App.css';

import Header from './Components/Header/Header';
import Body from './Components/Body/Body'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header inCourse={true} />
      <Body/>
    </div>
  );
}

export default App;
