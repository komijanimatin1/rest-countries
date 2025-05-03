import CountriesSection from "@/components/CountriesSection";
import Navbar from "@/components/Navbar";
import { getCountries } from "./libraries/getCountries";
import SearchComponent from "@/components/Searchbar";
import RegionFilter from "@/components/RegionFilter";

export default async function Home() {

  const countries = await getCountries();
  return (
    <div>
      <Navbar />
      <SearchComponent />
      <RegionFilter />
      <CountriesSection countries={countries} />
    </div>
  );
}
