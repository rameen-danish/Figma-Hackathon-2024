import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { AiFillSkype } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2A254B] py-8 px-6">
      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Menu */}
        <div>
          <h2 className="text-white font-['Clash Display'] text-[16px] leading-[20px] mb-4">Menu</h2>
          <ul className="space-y-2">
            <li><Link href={"ProductListingBlog"}><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">New arrivals</p></Link></li>
            <li><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Best sellers</p></li>
            <li><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Recently viewed</p></li>
            <li><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Popular this week</p></li>
            <li><Link href={"ProductListingBlog"}><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">All products</p></Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-white font-['Clash Display'] text-[16px] leading-[20px] mb-4">Categories</h2>
          <ul className="space-y-2">
            <li><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Crockery</p></li>
            <li><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Furniture</p></li>
            <li><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Homeware</p></li>
            <li><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Plant pots</p></li>
            <li><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Chairs</p></li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h2 className="text-white font-['Clash Display'] text-[16px] leading-[20px] mb-4">Our Company</h2>
          <ul className="space-y-2">
            <li><Link href={"About"}><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">About us</p></Link></li>
            <li><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Vacancies</p></li>
            <li><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Contact us</p></li>
            <li><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Privacy</p></li>
            <li><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Returns policy</p></li>
          </ul>
        </div>

        {/* Mailing Section */}
        <div>
          <h2 className="text-white font-['Clash Display'] text-[16px] leading-[20px] mb-4">Join our mailing list</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              className="w-full sm:flex-1 px-4 py-2 text-white bg-white/15 font-['Satoshi'] text-[16px] leading-[22px] placeholder-white placeholder-opacity-50 focus:outline-none"
              placeholder="your@email.com"
            />
            <button className="px-6 py-2 bg-white text-[#2A254B] font-['Satoshi'] text-[16px] leading-[24px]">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-[#4E4D93] my-6" />

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        {/* Copyright Text */}
        <p className="text-white font-['Satoshi'] text-[14px] leading-[19px] mb-4 lg:mb-0">
          Copyright 2022 Avion LTD
        </p>
        {/* Social Links */}
        <div className="flex gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <CiLinkedin className="w-6 h-6 text-white" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <CiFacebook className="w-6 h-6 text-white" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <FaInstagramSquare className="w-6 h-6 text-white" />
          </a>
          <a href="https://skype.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <AiFillSkype className="w-6 h-6 text-white" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
            <FaTwitter className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
