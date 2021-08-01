import { render, screen } from '@testing-library/react';
import LoginView from '../components/LoginView';

test('renders commponent', () => {
  render(<LoginView />);
  const linkElement = screen.getByText(/Github Search App Login Page/i);
  expect(linkElement).toBeInTheDocument();
});
