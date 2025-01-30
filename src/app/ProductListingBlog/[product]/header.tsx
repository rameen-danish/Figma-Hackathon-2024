import Image from "next/legacy/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-b border-gray-200">
      {/* Logo */}
      <div className="text-[24px] leading-[30px] font-[Clash Display] text-[#22202E]">
        <Link href={"/"}>Avion</Link>
      </div>
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 mt-4 sm:mt-0">
        <Link href="#" className="text-[16px] leading-[22px] text-[#726E8D] hover:text-black transition">
            Plant pots
        </Link>
        <Link href="#" className="text-[16px] leading-[22px] text-[#726E8D] hover:text-black transition">
            Ceramics
        </Link>
        <Link href="#" className="text-[16px] leading-[22px] text-[#726E8D] hover:text-black transition">
            Tables
        </Link>
        <Link href="#" className="text-[16px] leading-[22px] text-[#726E8D] hover:text-black transition">
            Chairs
        </Link>
        <Link href="#" className="text-[16px] leading-[22px] text-[#726E8D] hover:text-black transition">
            Crockery
        </Link>
        <Link href="#" className="text-[16px] leading-[22px] text-[#726E8D] hover:text-black transition">
            Tableware
        </Link>
        <Link href="#" className="text-[16px] leading-[22px] text-[#726E8D] hover:text-black transition">
            Cutlery
        </Link>
      </div>

      {/* Side Actions */}
      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        {/* Search */}
        <button className="w-5 h-5 flex items-center justify-center">
          <Image src={"/Search.png"} alt="Search" width={16} height={16} />
        </button>

        {/* Shopping Cart */}
        <Link href={"/cart"}>
        <button className="w-5 h-5 flex items-center justify-center">
          <Image src={"/Cart.png"} alt="Cart" width={16} height={16} />
        </button></Link>

        {/* User Avatar */}
        <button className="w-5 h-5 flex items-center justify-center">
          <Image src={"/User--avatar.png"} alt="User Avatar" width={16} height={16} />
        </button>
      </div>
    </nav>
  );
}
