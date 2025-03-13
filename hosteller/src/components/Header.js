import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-yellow-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
   
        <Link href="/" className="text-xl font-bold text-black">
          Hosteller
        </Link>

   
        <nav className="space-x-6">
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
         
          <Link href="/cart" className="hover:text-gray-200 transition">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
