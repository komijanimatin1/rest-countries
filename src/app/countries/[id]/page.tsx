import axios from "axios";
export const revalidate = 7200;

export async function generateStaticParams() {
    const res = await fetch('http://localhost:3000/countries', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: "force-cache"
    });
    const countries = await res.json();
    return countries.map((country: { id: string }) => ({ id: country.id }));

}
export default async function page({ params }: { params: { id: string } }) {
    const res = await fetch(`http://localhost:3000/countries/${params.id}`);
    const country = await res.json();

    return (
        <div>
            <main className="flex justify-start">
                {/* country flag section */}
                <section className="w-max">
                    
                </section>
                {/* country details section */}
                <section>
                    <h1 className="text-3xl font-bold mb-4">{country.name}</h1>
                    <ul className="list-none space-y-2">
                        <li>
                            <strong>Native Name:</strong> {country.nativeName}
                        </li>
                        <li>
                            <strong>Population:</strong> {country.population.toLocaleString()}
                        </li>
                        <li>
                            <strong>Region:</strong> {country.region}
                        </li>
                        <li>
                            <strong>Sub Region:</strong> {country.subRegion}
                        </li>
                        <li>
                            <strong>Capital:</strong> {country.capital}
                        </li>
                        <li>
                            <strong>Top Level Domain:</strong> {country.topLevelDomain.join(", ")}
                        </li>
                        <li>
                            <strong>Currencies:</strong> {country.currencies.join(", ")}
                        </li>
                        <li>
                            <strong>Languages:</strong> {country.languages.join(", ")}
                        </li>
                        <li>
                            <strong>Border Countries:</strong>{" "}
                            {country.borders.length > 0
                                ? country.borders.join(", ")
                                : "None"}
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}
