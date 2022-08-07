import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Action description paragraph', () => {
    render(<App />);
    const paragraphElement = screen.getByText(/Edit/i);

    expect(paragraphElement).toBeInTheDocument();
  });
});
