import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('<Greeting/>', () => {
  it('should have welcome header', () => {
    // Arrange
    render(<Greeting />);

    // act
    // ... nothing

    //assert
    const greetingHeader = screen.getByText(/Welcome/i);
    expect(greetingHeader).toBeInTheDocument();
  });

  it('should have welcome description paragraph', () => {
    // Arrange
    render(<Greeting />);

    // act
    // ... nothing

    // assert
    const greetingDescription = screen.getByText(/It's good to see you/i);
    expect(greetingDescription).toBeInTheDocument();
  });
});
