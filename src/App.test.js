import { render, screen } from '@testing-library/react';
import App from './App';

test('renders products view', () => {
  render(<App />);
  const productsListing = screen.getByText(/360°/i);
  expect(productsListing).toBeInTheDocument();
});
