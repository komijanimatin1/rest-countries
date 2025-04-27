import CountriesSection from "@/components/CountriesSection";
import Navbar from "@/components/Navbar";
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

export default async function Home() {
  const { data: countries } = await axios.get<Country[]>('http://localhost:3000/countries', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return (
    <div>
        <Navbar/>
        <CountriesSection countries={countries}/>
    </div>
  );
}
