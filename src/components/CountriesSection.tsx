import CountryCart from "./CountryCart";

type Country = {
  id: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  borders: string[];
  flag: string;
};

export default function CountriesSection({ countries }: { countries: Country[] }) {
  return (
    <section className="w-3/4 mx-auto mt-16 flex flex-wrap justify-between">
      {countries.map(country =>
        <CountryCart key={country.id} name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag} />)
      }
    </section>
  );
}