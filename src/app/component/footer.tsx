import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillSkype } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
export default function Footer(){
    return (
        <footer className="w-[1440px] h-[380px] bg-[#2A254B] relative">
            {/* Menu */}
            <div className="absolute left-[82px] top-[58px] flex flex-col gap-[12px]">
            <Link href={"ProductListingBlog"}><h2 className="text-white font-['Clash Display'] text-[16px] leading-[20px]">Menu</h2></Link>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">New arrivals</p>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Best sellers</p>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Recently viewed</p>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Popular this week</p>
  <Link href={"ProductListingBlog"}><p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">All products</p></Link>
</div>

{/* categories */}
<div className="absolute left-[299px] top-[58px] flex flex-col gap-[12px]">
  <h2 className="text-white font-['Clash Display'] text-[16px] leading-[20px]">Categories</h2>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Crockery</p>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Furniture</p>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Homeware</p>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Plant pots</p>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Chairs</p>
</div>

{/* our company */}
<div className="absolute left-[516px] top-[58px] flex flex-col gap-[12px]">
  <h2 className="text-white font-['Clash Display'] text-[16px] leading-[20px]">Our Company</h2>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">About us</p>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Vacancies</p>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Contact us</p>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Privacy</p>
  <p className="text-white font-['Satoshi'] text-[14px] leading-[19px]">Returns policy</p>
</div>
{/* Mailing Section */}
<div className="absolute left-[730px] top-[58px]">
  <h2 className="text-white font-['Clash Display'] text-[16px] leading-[20px]">Join our mailing list</h2>
  <div className="flex items-center gap-[10px] mt-[36px]">
    <input className="w-[509px] h-[56px] px-[32px] text-white bg-white/15 font-['Satoshi'] text-[16px] leading-[22px]" placeholder="your@email.com" />
    <button className="w-[118px] h-[56px] px-[32px] py-[16px] bg-white text-[#2A254B] font-['Satoshi'] text-[16px] leading-[24px]">Submit</button>
  </div>
</div>
{/* social section */}
<div className="absolute left-[1093px] top-[334px] flex flex-row items-start gap-6">
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-[#2A254B] hover:opacity-80">
    <CiLinkedin className="w-6 h-6 text-white" />
  </a>

  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-[#2A254B] hover:opacity-80">
    <CiFacebook className="w-full h-full text-white" />
  </a>

  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-[#2A254B] hover:opacity-80">
    <FaInstagramSquare className="w-full h-full text-white" />
  </a>

  <a href="https://skype.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-[#2A254B] hover:opacity-80">
    <AiFillSkype className="w-full h-full text-white" />
  </a>

  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-[#2A254B] hover:opacity-80">
    <FaTwitter className="w-full h-full text-white" />
  </a>
</div>

{/* copy right text */}
<p className="absolute left-[80px] top-[336px] text-white font-['Satoshi'] text-[14px] leading-[19px]">
  Copyright 2022 Avion LTD
</p>


<hr className="absolute left-[80px] top-[312px] w-[1277px] border-t border-[#4E4D93]" />



</footer>
    )
}