import React from 'react'
import { shallow } from 'enzyme'
import { UserInfoContainer } from './UserInfoContainer';


const setUp = (props = {}) => {
    const component = shallow(<UserInfoContainer {...props} />)
    return component;
}

describe(' UserInfoContainer test suite', () => {

    describe('has Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                userData: {
                    email: 'hey@email',
                    names: 'hey hey'
                }
            }
            wrapper = setUp(props);
        });
        it('Should render without errors', () => {
            const component = wrapper;
            expect(component.length).toBe(1)
        });
        it('Should render a H2 tags', () => {
            const h2 = wrapper.find('h2');
            expect(h2.length).toBe(2);
        });
    });
    describe('has error Prop', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                error: 'wrong password'
            }
            wrapper = setUp(props);
        });
        it('Should not render without errors', () => {
            window.alert = jest.fn()
            const component = wrapper;
            expect(component.length).toBe(1)
            window.alert.mockClear();
        });
    });
    describe('has no Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                userData: {}
            } 
            wrapper = setUp(props);
        });
        it('Should not render a div block', () => {
            const component = wrapper;
            expect(component.length).toBe(1)
            expect(component.find('div').exists()).toBe(false)
        });
        it('Should not render a H2 tags', () => {
            const h2 = wrapper.find('h2');
            expect(h2.length).toBe(0);
        });
    });
})