import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pipeline heading', () => {
  render(<App />);
  expect(screen.getByText(/github actions demo/i)).toBeInTheDocument();
});

test('renders all pipeline steps', () => {
  render(<App />);
  expect(screen.getByText(/checkout code/i)).toBeInTheDocument();
  expect(screen.getByText(/setup node/i)).toBeInTheDocument();
  expect(screen.getByText(/install deps/i)).toBeInTheDocument();
  expect(screen.getByText(/run eslint/i)).toBeInTheDocument();
});
