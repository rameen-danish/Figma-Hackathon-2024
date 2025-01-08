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
          <button className="w-[24px] h-[24px] flex items-center justify-center">
            <img src="Search.png" alt="Search" className="w-full h-full object-contain" />
          </button>
          <Link href={"Cart"} className="w-[24px] h-[24px] flex items-center justify-center">
            <img src="Cart.png" alt="Cart" className="w-full h-full object-contain" />
          </Link>
          <button className="w-[24px] h-[24px] flex items-center justify-center">
            <img src="User--avatar.png" alt="User Avatar" className="w-full h-full object-contain" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden flex flex-col items-center bg-white border-t border-gray-200 py-4 transition-transform duration-300 ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
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
