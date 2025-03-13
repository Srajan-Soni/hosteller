import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';

export default function HostelCard({ hostel }) {
  const dispatch = useDispatch();

  return (
    <div>
      <img src={hostel.image} alt={hostel.name} />
      <h3>{hostel.name}</h3>
      <button onClick={() => dispatch(addToCart(hostel))}>Add to Cart</button>
    </div>
  );
}
