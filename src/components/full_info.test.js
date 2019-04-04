import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import FullInfo from './full_info';
describe('Link', () => {
  it('should render correctly', () => {
    const output = shallow(
      <FullInfo title="title" release_date="date" genres={['rock']} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});