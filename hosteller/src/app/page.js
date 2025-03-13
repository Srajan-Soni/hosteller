'use client'
import LocationCard from '@/components/LocationCard';
import { useQuery, gql } from '@apollo/client';

export default function Home() {
  
const GET_LOCATIONS = gql`
query {
  locations {
    id
    name
    image
  }
}
`;

const { data, loading, error } = useQuery(GET_LOCATIONS);

if (loading) return <h1>Loading...</h1>;
if (error) return <h1>Error: {error.message
}</h1>;

  return (
    <div className="container">
      {/* <h1>See Locations </h1> */}
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'> 
         {data.locations.map(location => (
        <LocationCard key={location.id} location={location} />
      ))}  
      </div>
     
       </div>
  );
}
