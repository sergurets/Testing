import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Link from './link';
describe('Link', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Link title="mockTitle" url="mockUrl" />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
