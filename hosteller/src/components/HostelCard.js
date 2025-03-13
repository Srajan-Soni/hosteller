import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';

export default function HostelCard({ hostel }) {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg'>

      <img src={hostel.image} height={300} width={300} alt={hostel.name} />
      <h3 className="text-xl font-bold mb-2 p-2">{hostel.name}</h3>
      <button className="px-4 py-2 bg-blue-600 text-white text-center rounded-lg shadow-md transition hover:bg-blue-700 "  onClick={() => dispatch(addToCart(hostel))}>Add to Cart</button>
    </div>
  );
}
