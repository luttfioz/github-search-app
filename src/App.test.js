import { render, screen } from '@testing-library/react';
import App from './App';

test('renders commponent', () => {
  render(<App />);
  const linkElement = screen.getByText(/Github Search App Login Page/i);
  expect(linkElement).toBeInTheDocument();
});
