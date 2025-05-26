import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world text', () => {
  render(<App />);
  const text = screen.getByText(/Hello World!/i);
  expect(text).toBeInTheDocument();
});
