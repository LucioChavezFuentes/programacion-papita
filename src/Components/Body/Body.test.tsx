import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Body from './Body';
import App from '../../App'
import renderer from 'react-test-renderer';

it('renders body without crashing', () => {
  const componentBody = shallow(
  
    <App/>
  
  )

  
  expect(componentBody.contains(<Body/>)).toEqual(true);
});