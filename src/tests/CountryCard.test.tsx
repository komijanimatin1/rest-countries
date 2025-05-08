import { render, screen } from '@testing-library/react';
import CountryCard from '@/components/CountryCard';
import '@testing-library/jest-dom';

describe('CountryCard', () => {
    const mockCountry = {
        id: 'germany',
        name: 'Germany',
        population: 81770900,
        region: 'Europe',
        capital: 'Berlin',
        flag: 'https://flagcdn.com/de.svg',
    };

    // country information test
    it('renders country name, population, region, and capital', () => {
        render(<CountryCard {...mockCountry} />);

        expect(screen.getByText(/Germany/i)).toBeInTheDocument();
        expect(screen.getByText(/Population:/i)).toBeInTheDocument();
        expect(screen.getByText(/Region:/i)).toBeInTheDocument();
        expect(screen.getByText(/Capital:/i)).toBeInTheDocument();
    });

    // flag image test
    it('renders the correct flag image', () => {
        render(<CountryCard {...mockCountry} />);
        
        const flagImage = screen.getByAltText(/Germany flag/i);
        expect(flagImage).toHaveAttribute('src', mockCountry.flag);
    });

    // link test
    it('links to the correct country page', () => {
        render(<CountryCard {...mockCountry} />);
        
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/countries/germany');
    });
});
