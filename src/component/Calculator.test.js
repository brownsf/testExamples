import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from './Calculator';

describe('calculator', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Calculator />);
  });
  it('should render', () => {
    component = shallow(<Calculator />);
    expect(component).toMatchSnapshot();

    expect(component.find('input')).toHaveLength(2);
  });

  it('should run math calculations', () => {
    const wrapper = mount(<Calculator />);

    wrapper.setState({ first: 1, second: 2 });

    wrapper.find('button[data-test-id="button-add"]').simulate('click');
    expect(wrapper.state().result).toBe(3);
  });

  it('should update props', () => {
    const wrapper = mount(<Calculator />);

    wrapper.setProps({ name: 'Mike' });


    expect(wrapper).toMatchSnapshot();
  });
});
