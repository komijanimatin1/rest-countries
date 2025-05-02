import CountriesSection from "@/components/CountriesSection";
import Navbar from "@/components/Navbar";
import { getCountries } from "./libraries/getCountries";
import SearchComponent from "@/components/Searchbar";

export default async function Home() {

  const countries = await getCountries();
  return (
    <div>
      <Navbar />
      <SearchComponent />
      <CountriesSection countries={countries} />
    </div>
  );
}
