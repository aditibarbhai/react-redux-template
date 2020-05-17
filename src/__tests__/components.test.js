import React from 'react';
import { shallow } from 'enzyme';
import { HelloWorld } from '../components';

describe('Components', () => {
  it('HelloWorld should render without errors', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper).toMatchSnapshot();
  });
});
