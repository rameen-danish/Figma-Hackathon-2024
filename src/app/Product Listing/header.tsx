import Image from "next/image"
export default function Navbar(){
    return(
        <div className="w-full h-20 bg-white flex-none order-1 grow-0 relative">
   <div className="absolute left-20 top-6 w-16 h-7 text-[24px] leading-[30px] font-[Clash Display] text-[#22202E]">
  Avion
</div>
<div className="absolute left-[297px] top-[29px] flex flex-row items-start gap-11">
    <span className="text-[16px] leading-[22px] text-[#726E8D]">Plant pots</span>
    <span className="text-[16px] leading-[22px] text-[#726E8D]">Ceramics</span>
    <span className="text-[16px] leading-[22px] text-[#726E8D]">Tables</span>
    <span className="text-[16px] leading-[22px] text-[#726E8D]">Chairs</span>
    <span className="text-[16px] leading-[22px] text-[#726E8D]">Crockery</span>
    <span className="text-[16px] leading-[22px] text-[#726E8D]">Tableware</span>
    <span className="text-[16px] leading-[22px] text-[#726E8D]">Cutlery</span>
  </div>
<div className="absolute left-[1.94%] right-[1.81%] top-[70px] border border-[rgba(0,0,0,0.1)]"></div>

{/* <!-- Side Actions --> */}
<div className="relative left-[1280px] top-[30px] flex flex-row items-start gap-4 w-20 h-4">
    {/* Search */}
<div className = "absolute left-[28px] top-[5px] bg-white mix-blend-multiply">
  <Image  src={"/Search.png"} alt="search-logo" width={16} height={16}/>
</div>

{/* Shopping Cart*/}
<div className="absolute left-[58px] top-[5px] bg-white mix-blend-multiply">
  <Image src={"/Cart.png"} alt="cart-logo" width={16} height={16} />
</div>

  {/* User Avatar */}
<div className="absolute w-[16px] h-[16px] left-[88px] top-[5px] bg-white mix-blend-multiply">
  <img  className="absolute inset-[6.25%]" src={"/User--avatar.png"} alt="user-avatar"/>
</div>



</div>

    
</div>
    )
}