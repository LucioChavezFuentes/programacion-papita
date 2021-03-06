import React from 'react';
import './Header.css'


import { NavLink } from 'react-router-dom';



interface headerState {
  inCourse : boolean;
}

const Header: React.FC<headerState> = (props) => {
  
  return (
    <div className="header">
      <div className="leftSection"> 
        <NavLink to='/'> Home </NavLink>
  {/* Check these Links for further implementation 
  <NavLink to='/about' > About </NavLink>
        <NavLink to='/contact'> Contact </NavLink>*/}
        
      </div>

      <div className="rightSection">
        <NavLink to='/login'> Log in </NavLink>
        <NavLink to='/register' > Sign Up </NavLink>
      </div>
      
        
            
          
          
    </div>
  )
}

export default Header;

