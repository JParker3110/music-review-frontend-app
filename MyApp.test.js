import { render, screen } from '@testing-library/react';
import MyApp from './src/pages/_app';

describe('MyApp Component', () => {
  test('renders the title', () => {
    render(<MyApp />);
    const titleElement = screen.getByText(/Niecey Music Review App/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders navigation button', () => {
    render(<MyApp />);
    const buttonElement = screen.getByText(/Music/i);
    expect(buttonElement).toBeInTheDocument();
  });

  
  test('renders footer text', () => {
    render(<MyApp />);
    const footerElement = screen.getByText(/© 2024 Music Review App/i);
    expect(footerElement).toBeInTheDocument();
  });

  
});
