import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('verify if has World on the page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('verify if has Economy on the page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Economy/i);
  expect(linkElement).toBeInTheDocument();
});

test('verify if has Technology on the page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Technology/i);
  expect(linkElement).toBeInTheDocument();
});
