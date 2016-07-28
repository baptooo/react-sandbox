import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Meme from './Meme';

describe('Meme presentational', () => {
  const props = {
    name: 'success',
    top: 'Mock',
    bottom: 'Success kid',
  };

  describe('init', () => {
    it('shoud render as a <form />', () => {
      const wrapper = shallow(<Meme {...props} />);

      expect(wrapper.type()).to.equal('form');
    });
  });

});