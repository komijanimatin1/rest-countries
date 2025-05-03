import Link from "next/link";

export default function CountryCart({ id, name, population, region, capital, flag }: { id: string; name: string; population: number; region: string; capital: string; flag: string; }) {
    return (
        <Link
            href={`/countries/${id}`}
            className="text-lg font-bold mb-2"
        >
            <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 my-4 hover:scale-105 active:scale-95 transition-all duration-200">
                {/* country flag */}
                <img
                    src={flag}
                    alt={`${name} flag`}
                    className="w-full h-40 object-cover س"
                />
                <div className="p-4">
                    <h2>
                        {/* country name */}
                        {name}
                    </h2>
                    <p className="text-sm mb-1">
                        {/* country population */}
                        <span className="font-semibold">Population:</span> {population.toLocaleString()}
                    </p>
                    <p className="text-sm mb-1">
                        {/* country region */}
                        <span className="font-semibold">Region:</span> {region}
                    </p>
                    <p className="text-sm">
                        {/* country capital */}
                        <span className="font-semibold">Capital:</span> {capital}
                    </p>
                </div>
            </div>
        </Link>
    )
}
