import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { link } from 'fs';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test("some of the tests",()=>{
  const {getByText} = render(<App />);
  console.log(getByText);
  const linkElement = getByText(/papa/i)
  console.log(linkElement)
  const linkEle2 = getByText(/learn react/i);
})

