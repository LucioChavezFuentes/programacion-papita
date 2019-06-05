import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Navigation from '../../Components/Navigation';
import Home from '../../Components/Home';
import About from '../../Components/About';
import Contact from '../../Components/Contact';
import Error from '../../Components/Error';
import { CSSTransition, TransitionGroup} from 'react-transition-group';


interface headerState {
  inCourse : boolean;
}

const Header: React.FC<headerState> = (props) => {
  
  return (
    <div className="header">
      
      <BrowserRouter>
        <div>
          <Navigation/>
          
          <Route 
// tslint:disable-next-line: jsx-no-multiline-js
              render={({location}) => (
                <TransitionGroup>

                
                  <CSSTransition timeout={300} classNames='fade' key={location.key}>
                    
                    <Switch location={location}>
                      
                      <Route path="/" component={Home} exact  />

                      <Route path="/about" component={About}  />

                      <Route path="/contact" component={Contact}  />

                      <Route component={Error}/>

                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                )} 
          />
          </div>
      
          </BrowserRouter>
        </div>
  )
}

export default Header;

