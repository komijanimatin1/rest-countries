import CountriesSection from "@/components/CountriesSection";
import axios from "axios";

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

export default async function SearchPage({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams.query?.toLowerCase() || '';

  const { data: countries } = await axios.get<Country[]>('http://localhost:3000/countries', {
    headers: { 'Content-Type': 'application/json' },
  });

  const filtered = countries.filter((country) => {
    const queryLower = query.toLowerCase();
  
    const searchableContent = `
      ${country.name}
      ${country.nativeName}
      ${country.region}
      ${country.subRegion}
      ${country.capital}
      ${country.topLevelDomain.join(" ")}
      ${country.currencies.join(" ")}
      ${country.languages.join(" ")}
      ${country.borders.join(" ")}
    `.toLowerCase();
  
    return searchableContent.includes(queryLower);
  });
  
  return (
    <main>
      <h1 className="text-center text-2xl font-bold mt-10">
        {filtered.length > 0
          ? `Results for "${query}"`
          : `No results found for "${query}"`}
      </h1>
      <CountriesSection countries={filtered} />
    </main>
  );
}
