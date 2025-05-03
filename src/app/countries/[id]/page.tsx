export const revalidate = 7200;

// this page is SSG
// this function generates static params
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
            <main className="bg-white p-12 rounded-4xl w-4/5 mx-auto flex justify-around mt-12">
                {/* country flag section */}
                <section className="w-2/5 h-max shadow-xl">
                    <img
                        src={country.flag}
                    />
                </section>
                {/* country details section */}
                <section className="w-2/5">
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
                        <li className="">
                            <strong>Border Countries:</strong>
                            <ul className="flex flex-wrap">
                                {Array.isArray(country.borders) && country.borders.length > 0 ? (
                                    country.borders.map((border: string) => (
                                        <li key={border} className=" m-2 px-4 py-1 bg-gray-100 rounded">
                                            {border}
                                        </li>
                                    ))
                                ) : (
                                    <li className="inline-block m-2 px-4 py-1 bg-gray-100 rounded">
                                        No bordering countries
                                    </li>
                                )}
                            </ul>
                        </li>

                    </ul>
                </section>
            </main>
        </div>
    )
}
