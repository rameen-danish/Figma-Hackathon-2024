import Navbar from "./header";
import Image from "next/image";
import Listing1 from "./listing";
import Email from "../Homev1/email";
import Footer from "../component/footer";
import Features from "../Homev1/features";

export default function ProductListing(){
    return(
    <div>
        <div className="relative w-[1440] h-[41px] bg-[#2A254B] flex items-center justify-center">
  {/* Close Button */}
  <button className="absolute right-4 top-2 hover:opacity-80 flex items-center justify-center">
    <Image src={"/close.png"} alt="cart" width={30} height={30} />
  </button>
  {/* Banner Content */}
  <div className="flex flex-row items-center gap-2">
    <div className="flex items-center justify-center">
      <Image src={"/Delivery2.png"} alt="delivery icon" width={30} height={30}/>
    </div>
    <p className="text-white font-satoshi font-normal text-sm leading-[19px]">
      Free delivery on all orders over £50 with code easter checkout
    </p>
  </div>
</div>

{/* navbar */}
<Navbar/>

{/* Product Details */}
<div className="w-[1440px] h-[759px] bg-white relative">
  {/* <!-- Image Left --> */}
  <Image className="absolute left-0 top-0 bg-cover]" src={"/Image Left.png"} alt="" width={721} height={759}/>
  
  {/* <!-- Wrapper --> */}
  <div className="absolute w-[602px] h-[657px] left-[783px] top-[51px] bg-white">

     {/* <!-- Frame 154 (Product Title and Price) --> */}
  <div className="relative w-[281px] h-[89px] left-[40px] top-[40px] flex flex-col items-start gap-[13px]">
    <div className="text-[#2A254B] text-[36px] leading-[140%] font-clash-display">The Dandy chair</div>
      <div className="text-[#2A254B] text-[24px] leading-[150%] font-satoshi">£250</div>
  </div>
    
    {/* <!-- Description --> */}
    <div className="absolute w-[602px] h-[251px] top-[143px] flex flex-col items-start p-[40px] gap-[16px]">
      
      {/* <!-- Description Text --> */}
      <div className="flex flex-col items-start gap-[16px] w-[522px] h-[188px]">
        
        {/* <!-- Description Title --> */}
        <div className="w-[88px] h-[20px] text-[#2A254B] text-[16px] leading-[20px] font-normal font-[Clash Display]">Description</div>
        
        {/* <!-- Frame 51 --> */}
        <div className="flex flex-col items-start gap-[12px] w-[522px] h-[152px]">
          
          {/* <!-- Frame 50 --> */}
          <div className="flex flex-col items-start gap-[20px] w-[498px] h-[152px]">
            
            {/* <!-- Dandy Chair Description --> */}
            <div className="w-[498px] h-[66px] text-[#505977] text-[16px] leading-[22px] font-normal font-[Satoshi]">
              A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
            </div>

            {/* <!-- Premium material --> */}
            <div className="w-[498px] h-[66px] text-[#505977] text-[16px] leading-[22px] font-normal font-[Satoshi]">
               <ul className="list-disc pl-5">
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
               </ul>

            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Dimensions Section --> */}
    <div className="absolute w-[602px] h-[134px] top-[401px] left-[49px]">
      <div className="flex flex-col items-start gap-[28px] w-[241px] h-[99px] left-[40px] top-[20px]">
        
        {/* <!-- Dimensions Title --> */}
        <div className="w-[89px] h-[20px] text-[#2A254B] text-[16px] leading-[20px] font-normal font-[Clash Display]">Dimensions</div>
        
        {/* <!-- Metrics --> */}
        <div className="flex gap-[57px] w-[241px] h-[51px]">
          
          {/* <!-- Height --> */}
          <div className="flex flex-col items-start gap-[12px] w-[44px] h-[51px]">
            <div className="w-[43px] h-[17px] text-[#2A254B] text-[14px] leading-[17px] font-normal font-[Clash Display]">Height</div>
            <div className="w-[44px] h-[22px] text-[#505977] text-[16px] leading-[22px] font-normal font-[Satoshi]">110cm</div>
          </div>
          
          {/* <!-- Width --> */}
          <div className="flex flex-col items-start gap-[12px] w-[40px] h-[51px]">
            <div className="w-[40px] h-[17px] text-[#2A254B] text-[14px] leading-[17px] font-normal font-[Clash Display]">Width</div>
            <div className="w-[39px] h-[22px] text-[#505977] text-[16px] leading-[22px] font-normal font-[Satoshi]">75cm</div>
          </div>
          
          {/* <!-- Depth --> */}
          <div className="flex flex-col items-start gap-[12px] w-[43px] h-[51px]">
            <div className="w-[41px] h-[17px] text-[#2A254B] text-[14px] leading-[17px] font-normal font-[Clash Display]">Depth</div>
            <div className="w-[43px] h-[22px] text-[#505977] text-[16px] leading-[22px] font-normal font-[Satoshi]">50cm</div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Amount Section --> */}
    <div className="absolute w-[602px] h-[115px] top-[542px] left-[49px]">
      <div className="flex gap-[22px] w-[209px] h-[46px] left-[40px] top-[27px]">
        
        {/* <!-- Amount Text --> */}
        <div className="w-[65px] h-[20px] text-[#2A254B] text-[16px] leading-[20px] font-normal font-[Clash Display]">Amount:</div>
        
        {/* <!-- Stepper --> */}
        <div className="flex justify-between items-center p-[12px] px-[16px] gap-[33px] w-[122px] h-[46px] bg-[#F9F9F9]">
          <div className="w-[7px] h-[22px] text-[#CAC6DA] text-[16px] leading-[22px] font-normal font-[Satoshi]">-</div>
          <div className="w-[6px] h-[22px] text-[#2A254B] text-[16px] leading-[22px] font-normal font-[Satoshi]">1</div>
          <div className="w-[11px] h-[22px] text-[#CAC6DA] text-[16px] leading-[22px] font-normal font-[Satoshi]">+</div>
        </div>
      </div>
    </div>

    {/* <!-- Button --> */}
    <button className=" absolute w-[143px] h-[56px] left-[419px] top-[542px] bg-[#2A254B] flex items-center justify-center">
  <span className="text-white font-satoshi font-normal text-[16px] whitespace-nowrap text-ellipsis leading-[150%]">
    Add to cart
  </span>
</button>

</div>
</div>

<Listing1/>
<Features/>
<Email/>
<Footer/>
</div>
    )
}