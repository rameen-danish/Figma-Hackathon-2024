"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href={"/"} className="font-clash-display text-[24px] text-[#22202E]">
            Avion
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="sm:hidden flex items-center justify-center w-8 h-8 text-xl text-[#22202E]"
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu Links */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Plant Pots
          </Link>
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Ceramics
          </Link>
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Tables
          </Link>
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Chairs
          </Link>
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Crockery
          </Link>
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Tableware
          </Link>
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Cutlery
          </Link>
        </div>

        {/* Icons Section */}
        <div className="hidden sm:flex items-center gap-4">

          {/* Search bar start */}
          <div className="flex px-4 py-3 rounded-md border-2  overflow-hidden max-w-md mx-auto font-[sans-serif]">
            <input type="input" className="w-full outline-none bg-transparent text-gray-600 text-sm" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600">
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
              </path>
            </svg>
          </div>
             {/* search bar end */}

          <Link href={`/ProductListingBlog/cart`} className="w-[24px] h-[24px] flex items-center justify-center">
            <img src="Cart.png" alt="Cart" className="w-full h-full object-contain" />
          </Link>
          <button className="w-[24px] h-[24px] flex items-center justify-center">
            <img src="User--avatar.png" alt="User Avatar" className="w-full h-full object-contain" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden flex flex-col items-center bg-white border-t border-gray-200 py-4 transition-transform duration-300 ${isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        {/* Mobile Menu Links */}
        <div className="flex flex-col gap-4">
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Plant Pots
          </Link>
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Ceramics
          </Link>
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Tables
          </Link>
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Chairs
          </Link>
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Crockery
          </Link>
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Tableware
          </Link>
          <Link
            href="#"
            className="font-satoshi text-[16px] text-[#726E8D] hover:text-black transition"
          >
            Cutlery
          </Link>
        </div>
      </div>
    </nav>
  );
}
