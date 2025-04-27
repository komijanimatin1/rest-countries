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

export default function CountriesSection({ countries }: { countries: Country[] }) {
  console.log(countries)
  return (
    <section>

    </section>
  );
}