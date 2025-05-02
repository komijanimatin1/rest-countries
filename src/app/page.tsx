import CountriesSection from "@/components/CountriesSection";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { getCountries } from "./libraries/getCountries";

export default async function Home() {

  const countries = await getCountries();
  return (
    <div>
        <Navbar/>
        <SearchComponent/>
        <CountriesSection countries={countries}/>
        
    </div>
  );
}
