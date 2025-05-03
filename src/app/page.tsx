export const revalidate = 86400; // 24 hours

import CountriesSection from "@/components/CountriesSection";
import Navbar from "@/components/Navbar";
import { getCountries } from "./libraries/getCountries";
import SearchComponent from "@/components/Searchbar";
import RegionFilter from "@/components/RegionFilter";

// this page is SSG
export const dynamic = "force-static"; 

export default async function Home() {

  const countries = await getCountries();
  return (
    <div>
      {/* navbar component */}
      <Navbar /> 

      {/* search and filter section */}
      <div className="w-full mt-8 flex justify-center gap-8">
        <SearchComponent />
        <RegionFilter />
      </div>

      {/* this component generates countries section */}
      <CountriesSection countries={countries} />
    </div>
  );
}
