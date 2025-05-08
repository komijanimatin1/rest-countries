import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('px-4 py-2 text-base'); // medium
    expect(button).toHaveClass('bg-blue-600 text-white hover:bg-blue-700'); // primary
  });

  it('renders with custom size and variant', () => {
    render(<Button size="large" variant="secondary">Big Secondary</Button>);
    const button = screen.getByRole('button', { name: /big secondary/i });
    expect(button).toHaveClass('px-6 py-3 text-lg');
    expect(button).toHaveClass('bg-gray-600 text-white hover:bg-gray-700');
  });

  it('applies full width class when isFullWidth is true', () => {
    render(<Button isFullWidth>Full Width</Button>);
    const button = screen.getByRole('button', { name: /full width/i });
    expect(button).toHaveClass('w-full');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button', { name: /custom/i });
    expect(button).toHaveClass('custom-class');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByRole('button', { name: /click/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // it('is disabled when disabled prop is passed', () => {
  //   render(<Button disabled>Disabled</Button>);
  //   const button = screen.getByRole('button', { name: /disabled/i });
  //   expect(button).toBeDisabled();
  // });
  
});
