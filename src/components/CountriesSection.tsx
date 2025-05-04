import CountryCart from "./CountryCard";
import { Country } from "@/app/types/types";

export default function CountriesSection({ countries }: { countries: Country[] }) {
  return (
    // in this section data will send as props to country card component 
    <section className="w-3/4 mx-auto mt-16 flex flex-wrap md:justify-evenly justify-center gap-4">
      {countries.map(country =>
        <CountryCart key={country.id} id={country.id} name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag} />)
      }
    </section>
  );
}