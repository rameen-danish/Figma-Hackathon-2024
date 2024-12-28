import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-white flex flex-col sm:flex-row sm:items-center py-4 px-6 border-b border-gray-200">
      {/* Logo */}
      <div className="flex justify-center sm:justify-start sm:w-auto w-full mb-4 sm:mb-0">
        <Link href={"/"} className="font-clash-display text-[24px] text-[#22202E]">
          Avion
        </Link>
      </div>

      {/* Menu Links */}
      <div className="flex justify-center flex-wrap gap-6 sm:ml-auto">
        <Link href="#" className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition">
         Plant Pots
        </Link>
        <Link href="#" className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition">
          Ceramics
        </Link>
        <Link href="#" className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition">
          Tables
        </Link>
        <Link href="#" className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition">
          Chairs
        </Link>
        <Link href="#" className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition">
          Crockery
        </Link>
        <Link href="#" className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition">
          Tableware
        </Link>
        <Link href="#" className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition">
          Cutlery
        </Link>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Search Icon */}
        <button className="w-[24px] h-[24px] flex items-center justify-center">
          <img src="Search.png" alt="Search" className="w-full h-full object-contain" />
        </button>

        {/* Cart Icon */}
        <Link href={"Cart"} className="w-[24px] h-[24px] flex items-center justify-center">

            <img src="Cart.png" alt="Cart" className="w-full h-full object-contain" />
          
        </Link>

        {/* User Avatar */}
        <button className="w-[24px] h-[24px] flex items-center justify-center">
          <img src="User--avatar.png" alt="User Avatar" className="w-full h-full object-contain" />
        </button>
      </div>
    </div>
  );
}
