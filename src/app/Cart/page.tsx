import React from "react";
import Image from "next/image";
import Navbar from "../component/header";
import Footer from "../component/footer";

export default function Cart(){
  return (
    <div>
    <Navbar/>
    {/* Shopping Basket Conatiner */}
    <div className="w-[1440px] h-[749px] bg-[#F9F9F9] relative">

      {/* Shopping cart Title */}
    <h1 className="absolute left-[188px] top-[64px] w-[328px] h-[50px] 
           font-['Clash Display'] text-[36px] leading-[140%] text-[#2A254B]">
  Your shopping cart
</h1>
{/* Titles */}
<h6 className="absolute left-[188px] top-[162px] w-[55px] h-[20px] font-[Clash Display] font-normal text-[14px] leading-[140%] text-[#2A254B]">
  Product
</h6>
<h6 className="absolute left-[838px] top-[162px] w-[57px] h-[20px] font-[Clash Display] font-normal text-[14px] leading-[140%] text-[#2A254B]">
  Quantity
</h6>
<h6 className="absolute left-[1212px] top-[162px] w-[34px] h-[20px] font-[Clash Display] font-normal text-[14px] leading-[140%] text-[#2A254B]">
  Total
</h6>



{/* Divider 1 */}
<div className="absolute left-[188px] top-[194px] w-[1064px] border-t border-[#EBE8F4]"></div>


{/* Product Section 1 */}
<div className="absolute left-[188px] top-[214px] flex items-center gap-[21px] w-[309px] h-[134px]">
  <Image src={"/ProductImage.png"} alt="product1" width={109} height={134}/>
  <div className="flex flex-col items-start gap-[8px] w-[179px] h-[110px]">
    <h4 className="font-['Clash Display'] text-[20px] text-[#2A254B]">Graystone vase</h4>
    <p className="font-['Satoshi'] text-[14px] text-[#2A254B] leading-[150%]">
      A timeless ceramic vase with a tri-color grey glaze.
    </p>
    <span className="font-['Satoshi'] text-[16px] text-[#2A254B]">£85</span>
  </div>
</div>

{/* Product section 2 */}
<div className="absolute left-[188px] top-[368px] flex items-center gap-[21px] w-[292px] h-[134px]">
<Image src={"/ProductImage1.png"} alt="product1" width={109} height={134}/>
  <div className="flex flex-col items-start gap-[8px] w-[162px] h-[110px]">
    <h4 className="font-['Clash Display'] text-[20px] leading-[140%] text-[#2A254B]">
      Basic white vase
    </h4>
    <p className="font-['Satoshi'] text-[14px] leading-[150%] text-[#2A254B]">
      Beautiful and simple, this is one for the classics.
    </p>
    <span className="font-['Satoshi'] text-[16px] leading-[150%] text-[#2A254B]">£85</span>
  </div>
</div>


{/* Stepper control */}
<div className="absolute left-[838px] top-[226px] w-[122px] h-[46px] bg-[#F9F9F9] flex items-center justify-between px-4">
  <span className="font-['Satoshi'] text-[16px] text-[#EBE8F4]">-</span>
  <span className="font-['Satoshi'] text-[16px] text-[#2A254B]">1</span>
  <span className="font-['Satoshi'] text-[16px] text-[#EBE8F4]">+</span>
</div>
<div className="absolute left-[838px] top-[380px] w-[122px] h-[46px] bg-[#F9F9F9] flex items-center justify-between px-4">
  <span className="font-['Satoshi'] text-[16px] text-[#EBE8F4]">-</span>
  <span className="font-['Satoshi'] text-[16px] text-[#2A254B]">1</span>
  <span className="font-['Satoshi'] text-[16px] text-[#EBE8F4]">+</span>
</div>

{/* total values */}
<p className="absolute left-[1212px] top-[225px] w-[33px] h-[27px] font-[Satoshi] font-normal text-[18px] leading-[150%] text-[#2A254B]">
  £85
</p>
<p className="absolute left-[1209px] top-[380px] w-[38px] h-[27px] font-[Satoshi] font-normal text-[18px] leading-[150%] text-[#2A254B]">
  £125
</p>



{/* Divider 2 */}
<div className="absolute left-[188px] top-[534px] w-[1064px] border-t border-[#EBE8F4]"></div>


{/* Price summary section */}
<div className="absolute left-[970px] top-[562px] flex flex-col items-end gap-[12px] w-[282px]">
  <div className="flex items-center gap-[16px] w-[150px]">
    <span className="font-['Clash Display'] text-[20px] text-right text-[#4E4D93]">Subtotal</span>
    <span className="font-['Clash Display'] text-[24px] text-right text-[#2A254B]">£210</span>
  </div>
  <p className="font-['Satoshi'] text-[14px] text-right text-[#4E4D93] leading-[150%]">
    Taxes and shipping are calculated at checkout
  </p>
</div>

{/* Checkout button */}
<button className="absolute left-[1080px] top-[645px] w-[172px] h-[56px] bg-[#2A254B] 
                flex items-center justify-center px-[32px] py-[16px] gap-[10px]">
  <span className="font-['Satoshi'] text-[16px] text-white">Checkout</span>
</button>


    </div>
    <Footer/>
    </div>
  );
};