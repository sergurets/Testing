import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ItemInfo from './item_info';
describe('Link', () => {
  it('should render correctly', () => {
    const output = shallow(
      <ItemInfo title="title" release_date="date" genres={['rock']} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

//title={el.title} release_date={el.release_date} genres={el.genres}