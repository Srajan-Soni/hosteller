'use client'
import Link from 'next/link';

export default function LocationCard({ location }) {
  return (
    <div className='flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg'>
       
      <img src={location.image} alt={location.name} />
      <h2 className="text-xl font-bold mb-2 p-2">{location.name}</h2>
      <Link className="px-4 py-2 bg-blue-600 text-white text-center rounded-lg shadow-md transition hover:bg-blue-700 " href={`/locations/${location.id}` }>View Hostels</Link>
    </div>
  );
}
