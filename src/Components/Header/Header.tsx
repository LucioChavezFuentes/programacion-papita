import React from 'react';

import Navigation from '../../Components/Navigation';




interface headerState {
  inCourse : boolean;
}

const Header: React.FC<headerState> = (props) => {
  
  return (
    <div className="header">
      
      
            <Navigation/>
            
          
          
    </div>
  )
}

export default Header;

