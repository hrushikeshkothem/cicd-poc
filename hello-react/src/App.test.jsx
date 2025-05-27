import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello hrushikesh text', () => {
  render(<App />);
  const text = screen.getByText(/Hello Hrushikesh/i);
  expect(text).toBeInTheDocument();
});
