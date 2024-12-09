import Link from "next/link"
export default function Navbar(){
    return(
        <div className="w-[1440px] h-[132px] bg-white flex-none order-0 flex-grow-0 relative">
   <div className="absolute w-[65px] h-[30px] left-[687px] top-[20px] font-clash-display text-[24px] leading-[30px] font-normal text-[#22202E]">
   <Link href={"/"}>Avion</Link>
</div><div className="absolute flex flex-row items-start gap-[44px] w-[675px] h-[22px] left-[382px] top-[90px]">
  <div className="w-[70px] h-[22px] font-satoshi text-[16px] leading-[22px] text-[#726E8D]">PlantPots</div>
  <div className="w-[66px] h-[22px] font-satoshi text-[16px] leading-[22px] text-[#726E8D]">Ceramics</div>
  <div className="w-[44px] h-[22px] font-satoshi text-[16px] leading-[22px] text-[#726E8D]">Tables</div>
  <div className="w-[45px] h-[22px] font-satoshi text-[16px] leading-[22px] text-[#726E8D]">Chairs</div>
  <div className="w-[64px] h-[22px] font-satoshi text-[16px] leading-[22px] text-[#726E8D]">Crockery</div>
  <div className="w-[71px] h-[22px] font-satoshi text-[16px] leading-[22px] text-[#726E8D]">Tableware</div>
  <div className="w-[51px] h-[22px] font-satoshi text-[16px] leading-[22px] text-[#726E8D]">Cutlery</div>
</div>
<div className="absolute left-[1.94%] right-[1.81%] top-[70px] border border-[rgba(0,0,0,0.1)]"></div>
{/* User Avatar */}
<div className="absolute w-[16px] h-[16px] left-[1396px] top-[26px] bg-white mix-blend-multiply">
  <img className="absolute inset-[6.25%] bg-[#2A254B]" src="User--avatar.png" alt="user-avatar"></img>
</div>

{/* Shopping Cart*/}
<div className="absolute w-[16px] h-[16px] left-[1364px] top-[26px] bg-white mix-blend-multiply">
<Link href={"Cart"}><img className="absolute left-0 right-[9.3%] top-[6.25%] bottom-[625%] bg-[#2A254B]" src="Cart.png" alt="cart-logo"></img></Link>
</div>
{/* Search */}
<div className = "absolute w-[16px] h-[16px] left-[28px] top-[26px] bg-white mix-blend-multiply">
  <img className="absolute left-[6.14%] right-[9.37%] top-[6.14%] bottom-[9.38%] bg-[#2A254B]" src="Search.png" alt="search-logo"></img>
</div>
</div>
    )
}