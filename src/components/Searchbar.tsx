'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchComponent() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search countries..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-2 py-1"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white px-3 py-1">Search</button>
    </form>
  );
}
