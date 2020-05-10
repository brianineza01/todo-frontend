import React from 'react';
import { shallow } from 'enzyme';

// Components
import { LoginContainer } from './LoginContainer';

const setup = () => {
  const formData = {
    email: 'chris5@SpeechGrammarList.com',
    password: 'QWE1234'
  }
  const wrapper = shallow(<LoginContainer />);
  const simulateChangeOnInput = (wrapper, inputSelector, inputName, newValue) => {
    const input = wrapper.find(inputSelector);
    input.simulate('change', {
      target: {
        name: inputName,
        value: newValue
      }
    })
    return wrapper.find(inputSelector)
  }
  return { wrapper, formData, simulateChangeOnInput };
}


describe('Login Test Suite', () => {
  it('Should have a heading tags', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h2').exists()).toBe(true);
  });
  it('Should have a inputbox and buttons tags', () => {
    const { wrapper } = setup();
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('#input-auth-email').exists()).toBe(true);
    expect(wrapper.find('#input-auth-password').exists()).toBe(true);
  });
  it('Should test the onchange function and pass', () => {

    const { wrapper, simulateChangeOnInput } = setup();
    const updatedEmail = simulateChangeOnInput(wrapper, '#input-auth-email', 'email', 'kalisa@gmail.com')
    expect(updatedEmail.props().value).toBe('kalisa@gmail.com')
    const updatedPassword = simulateChangeOnInput(wrapper, '#input-auth-password', 'password', 'QWE1234')
    expect(updatedPassword.props().value).toBe('QWE1234');
  });

  it('should test the state of the app after onChange event', () => {
    const { wrapper, simulateChangeOnInput } = setup();
    const componentInstance = wrapper.instance();
    const updatedEmail = simulateChangeOnInput(wrapper, '#input-auth-email', 'email', 'kalisa@gmail.com')
    const updatedPassword = simulateChangeOnInput(wrapper, '#input-auth-password', 'password', 'QWE1234')
    expect(componentInstance.state.email).toEqual(updatedEmail.props().value)
    expect(componentInstance.state.password).toEqual(updatedPassword.props().value)

    it('should simulate submit event', () => {
      const { simulateChangeOnInput } = setup();
      const loginMock = jest.fn()
      const wrapper = shallow(<LoginContainer login={loginMock} />)

      simulateChangeOnInput(wrapper, '#input-auth-email', 'email', 'kalisa@gmail.com')
      simulateChangeOnInput(wrapper, '#input-auth-password', 'password', 'QWE1234')
      const form = wrapper.find('form')
      form.simulate('submit', {
        preventDefault: () => console.log('preventDefault')
      });
      expect(loginMock).toHaveBeenCalledTimes(1)
    })
  });
});