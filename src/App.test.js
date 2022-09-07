import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Este é um projeto para aprendizado do CI\/CD/i);
  expect(linkElement).toBeInTheDocument();
});
