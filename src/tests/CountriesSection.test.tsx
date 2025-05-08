import { render, screen } from '@testing-library/react';
import CountriesSection from '@/components/CountriesSection';
import '@testing-library/jest-dom';


describe('CountriesSection', () => {
    const mockCountries = [
        {
            "id": "germany",
            "name": "Germany",
            "nativeName": "Deutschland",
            "population": 81770900,
            "region": "Europe",
            "subRegion": "Western Europe",
            "capital": "Berlin",
            "topLevelDomain": [
                ".de"
            ],
            "currencies": [
                "Euro"
            ],
            "languages": [
                "German"
            ],
            "borders": [
                "aut",
                "bel",
                "cze",
                "dnk",
                "fra",
                "lux",
                "nld",
                "pol",
                "che"
            ],
            "flag": "https://flagcdn.com/de.svg"
        },
        {
            "id": "united-states",
            "name": "United States of America",
            "nativeName": "United States",
            "population": 323947000,
            "region": "Americas",
            "subRegion": "Northern America",
            "capital": "Washington, D.C.",
            "topLevelDomain": [
                ".us"
            ],
            "currencies": [
                "United States dollar"
            ],
            "languages": [
                "English"
            ],
            "borders": [
                "can",
                "mex"
            ],
            "flag": "https://flagcdn.com/us.svg"
        }
    ];
    it('renders correctly', () => {
        render(<CountriesSection countries={mockCountries} />);

        const countryElements = screen.getAllByText(/Germany|United States of America/i);
        expect(countryElements.length).toBe(mockCountries.length);
        expect(screen.getByText(/Germany/i)).toBeInTheDocument();
        expect(screen.getByText(/United States of America/i)).toBeInTheDocument();
    });
})