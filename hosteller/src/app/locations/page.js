'use client';

import { useQuery, gql } from '@apollo/client';

const GET_LOCATION_HOSTEL_COUNT = gql`
  query{
    locationHostelCount {
      id
      name
      image
      hostelCount
    }
  }
`;

export default function LocationHostelCount() {
  const { data, loading, error } = useQuery(GET_LOCATION_HOSTEL_COUNT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading location hostel count: {error.message}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold mb-6">Location Hostel Count</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.locationHostelCount.map((location) => (
          <div
            key={location.id}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={location.image}
              alt={location.name}
              className="w-32 h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-medium text-gray-800">{location.name}</h3>
            <p className="text-lg text-gray-600 mt-2">Hostel Count: {location.hostelCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
