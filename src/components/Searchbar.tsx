'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/libraries/Button/Button';

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
    <div className='w-max h-max bg-white rounded-md'>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search countries..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-10 px-2 py-1 focus:outline-none"
        />
        <Button size='medium'>
          <span>search</span>
        </Button>
      </form>
    </div>
  );
}
