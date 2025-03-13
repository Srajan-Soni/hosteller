'use client';
import HostelCard from '@/components/HostelCard';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'next/navigation';


const GET_HOSTELS = gql`
  query GetHostels($locationId: ID!) {
    hostels(locationId: $locationId) {
      id
      name
      image
    }
  }
`;

export default function LocationPage() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_HOSTELS, { variables: { locationId: id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {data.hostels.map(hostel => (
        <HostelCard key={hostel.id} hostel={hostel} />
      ))}
    </div>
  );
}
