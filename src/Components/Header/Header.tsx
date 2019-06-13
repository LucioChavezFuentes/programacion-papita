import React from 'react';


import { NavLink } from 'react-router-dom';



interface headerState {
  inCourse : boolean;
}

const Header: React.FC<headerState> = (props) => {
  
  return (
    <div className="header">
      <div className="leftSection"> 
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/about' > About </NavLink>
        <NavLink to='/contact'> Contact </NavLink>
      </div>

      <div className="rightSection">
        <NavLink to='/'> Log in </NavLink>
        <NavLink to='/about' > Sign Up </NavLink>
      </div>
      
        
            
          
          
    </div>
  )
}

export default Header;

