import CountriesSection from "@/components/CountriesSection";
import Navbar from "@/components/Navbar";
import axios from "axios";

type Country = {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital?: string[];
  flags: {
    png: string;
    svg: string;
  };
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
