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
      <div className="w-full mt-8 flex justify-center gap-8">
        <SearchComponent />
        <RegionFilter />
      </div>
      <CountriesSection countries={countries} />
    </div>
  );
}
