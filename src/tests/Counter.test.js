// import necessary react testing library helpers here
// import the Counter component here
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

console.log('This is Allen Jean')

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const plusSign = screen.getByRole('button', {name: '+'});
  fireEvent.click(plusSign);
  const incrementCount = screen.getByTestId('count');
  expect(incrementCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const minusSign = screen.getByRole('button', {name: '-'});
  fireEvent.click(minusSign);
  const decrementCount = screen.getByTestId('count');
  expect(decrementCount).toHaveTextContent('-1');
});
