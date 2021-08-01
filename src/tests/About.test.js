import { render, screen } from '@testing-library/react';
import About from '../components/AboutView';

test('renders commponent', () => {
  render(<About />);
  const linkElement = screen.getAllByText(/Lorem ipsum dolor sit amet/i);
  expect(linkElement).toBeTruthy();
});
