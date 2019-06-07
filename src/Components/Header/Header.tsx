import React from 'react';
import {BrowserRouter } from 'react-router-dom';
import Navigation from '../../Components/Navigation';




interface headerState {
  inCourse : boolean;
}

const Header: React.FC<headerState> = (props) => {
  
  return (
    <div className="header">
      
      <BrowserRouter>
          <div>
            <Navigation/>
            
          
          </div>
      
          </BrowserRouter>
    </div>
  )
}

export default Header;

