import React from 'react';

import './App.css';

import Header from './Components/Header/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header inCourse={true} />
    </div>
  );
}

export default App;
