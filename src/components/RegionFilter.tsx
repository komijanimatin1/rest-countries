'use client';

import { useRouter } from 'next/navigation';

// all regions
const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export default function RegionFilter() {
  const router = useRouter();

  // this function pushes cliend selection as query
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'All') {
      router.push('/');
    } else {
      router.push(`/search?query=${encodeURIComponent(value)}`);
    }
  };

  return (
    <div className="w-48 mb-6">
      <select
        onChange={handleChange}
        className="w-full outline-none rounded-md p-2 bg-white"
        defaultValue=""
      >
        {/* select tag placeholder */}
        <option value="" disabled hidden>
          Filter by region
        </option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}
