import React from 'react'
import { shallow } from 'enzyme';
import Calculator from './Calculator'

it('should render', ()=>{

    const component = shallow(<Calculator/>)

    expect(component.find('.icon-star')).to.have.lengthOf(1);
})