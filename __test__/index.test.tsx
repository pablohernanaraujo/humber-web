import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import IndexPage from '../src/pages/index';

test('page index text', () => {
  const { getByText } = render(<IndexPage />);

  expect(getByText('Humber')).toBeInTheDocument();
});
