import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/HeaderPage';

test('Should render header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    //     const renderer = new ReactShallowRenderer();
    //     renderer.render(<Header />);
    //     expect(renderer.getRenderOutput()).toMatchSnapshot();
    //     console.log(renderer.getRenderOutput());
    // 
});