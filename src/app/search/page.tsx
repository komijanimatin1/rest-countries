import CountriesSection from "@/components/CountriesSection";
import { getCountries } from "../libraries/getCountries";
import Link from "next/link";
import Button from '../libraries/Button/Button'

export default async function SearchPage({ searchParams }: { searchParams: { query?: string } }) {
  // get search query from URL params and convert to lowercase, default to empty string if no query
  const query = searchParams.query?.toLowerCase() || '';
  const countries = await getCountries();

  // filter countries by query
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
      <div className="mt-10 flex flex-row items-center justify-center gap-4">
        <Link href="/">
          <Button variant="outline" className="hover:scale-110 active:scale-95">← Back</Button>
        </Link>
        <h1 className="text-center text-2xl font-bold">
          {filtered.length > 0
            ? `Results for "${query}"`
            : `No results found for "${query}"`}
        </h1>
      </div>
      {/* send filtered countries for make a new countries list */}
      <CountriesSection countries={filtered} />
    </main>
  );
}
