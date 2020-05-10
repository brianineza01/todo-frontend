import React from 'react';
import { shallow } from 'enzyme';
import testStore from './store/testStore'
// Components
import App from './App';

const setup = () => {
  const wrapper = shallow(<App store= {testStore}/>);
  return { wrapper };
}


describe('App Test Suite', () => {
  it('Should have a  div tag', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').exists()).toBe(true);
  });
});