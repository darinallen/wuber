import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router'; // Needed to preserve the history of your “URL” in memory
import About from '../About/About';

test('About component renders correctly', () => {
  const component = render(<MemoryRouter><About /></MemoryRouter>);
  expect(component).toMatchSnapshot();
});
