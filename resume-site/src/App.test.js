import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  // Think of this as GetElementByInnerText the i makes it case Insensitive
  const linkElement = screen.getByText(/Jeffrey Ongley/i);
  expect(linkElement).toBeInTheDocument();
});
