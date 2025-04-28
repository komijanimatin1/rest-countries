import Link from "next/link";

export default function CountryCart({ id, name, population, region, capital, flag }: { id: string; name: string; population: number; region: string; capital: string; flag: string; }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 my-4">
            <img
                src={flag}
                alt={`${name} flag`}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <Link
                    href={`/countries/${id}`}
                    className="text-lg font-bold mb-2"
                >
                    {name}
                </Link>
                <p className="text-sm mb-1">
                    <span className="font-semibold">Population:</span> {population.toLocaleString()}
                </p>
                <p className="text-sm mb-1">
                    <span className="font-semibold">Region:</span> {region}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Capital:</span> {capital}
                </p>
            </div>
        </div>
    )
}
