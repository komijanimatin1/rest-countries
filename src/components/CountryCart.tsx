
export default function CountryCart({name, population, region, capital, flag}: {name: string; population: number; region: string; capital: string; flag: string;}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 my-4">
      <img
        src={flag}
        alt={`${name} flag`}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
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
