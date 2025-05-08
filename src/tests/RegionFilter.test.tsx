import { render, screen, fireEvent } from '@testing-library/react'
import RegionFilter from '@/components/RegionFilter'
import { regions } from '@/components/RegionFilter'
import '@testing-library/jest-dom'
import { useRouter } from 'next/navigation'
import { describe } from 'node:test'

// Mock next/navigation router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('RegionFilter Component', () => {

  it('renders correctly', () => {
      //checks filter dropdown
      render(<RegionFilter />);
      const dropdown = screen.getByRole('combobox'); 
      expect(dropdown).toBeInTheDocument();
    
    //checks dropdown options
    fireEvent.click(dropdown);
    regions.forEach(region => {
      expect(screen.getByText(new RegExp(region, 'i'))).toBeInTheDocument();
    });
  })

  it('navigates correctly on selection', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    
    render(<RegionFilter />);
    const dropdown = screen.getByRole('combobox'); 
    
    fireEvent.change(dropdown, { target: { value: 'All' } });
    expect(mockPush).toHaveBeenCalledWith('/');
    //checks navigation 'Europe' for example
    fireEvent.change(dropdown, { target: { value: 'Europe' } });
    expect(mockPush).toHaveBeenCalledWith('/search?query=Europe');
  })

})