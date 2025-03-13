'use client';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); 

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-6">
            {cart.map((hostel) => (
              <li
                key={hostel.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={hostel.image}
                    alt={hostel.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <h3 className="text-xl font-medium text-gray-800">{hostel.name}</h3>
                </div>
                <button
                  onClick={() => handleRemove(hostel.id)}
                  className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <button
              onClick={handleClearCart}
              className="bg-blue-500 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
