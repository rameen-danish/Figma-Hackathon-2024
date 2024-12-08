import Image from "next/image"
export default function Features(){
    return(
    // <!-- Features Section -->
<div className="w-[1540px] h-[355px] bg-white relative">
  
  {/* <!-- Section Title --> */}
  <h3 className="absolute w-[366px] h-[34px] left-[529px] top-[60px] font-['Clash_Display'] text-[24px] leading-[140%] font-normal text-[#2A254B]">
    What makes our brand different
  </h3>

  {/* <!-- Feature Blocks Container --> */}
  <div className="absolute left-[86px] top-[145px] flex flex-row gap-[60px]">

    {/* <!-- Feature Block 1 --> */}
    <div className="w-[270px] h-[124px] flex flex-col gap-[16px]">
       {/* <!-- Icon --> */} <Image src={"/Delivery.png"} alt="delivery icon" width={24} height={24} />
      <div className="w-[24px] h-[24px] bg-white"></div>
      <div className="flex flex-col gap-[8px]">
        <h4 className="font-['Clash_Display'] text-[20px] leading-[140%] font-normal text-[#2A254B]">
          Next day as standard
        </h4>
        <p className="font-['Satoshi'] text-[16px] leading-[150%] text-[#2A254B]">
          Order before 3pm and get your order the next day as standard
        </p>
      </div>
    </div>

    {/* <!-- Feature Block 2 --> */}
    <div className="w-[266px] h-[124px] flex flex-col gap-[16px]">
      {/* <!-- Icon --> */} <Image src={"/Checkmark--outline.png"} alt="delivery icon" width={24} height={24} />
      <div className="w-[24px] h-[24px] bg-white"></div>
      <div className="flex flex-col gap-[8px]">
        <h4 className="font-['Clash_Display'] text-[20px] leading-[140%] font-normal text-[#2A254B]">
          Made by true artisans
        </h4>
        <p className="font-['Satoshi'] text-[16px] leading-[150%] text-[#2A254B]">
          Handmade crafted goods made with real passion and craftsmanship
        </p>
      </div>
    </div>

    {/* <!-- Feature Block 3 --> */}
    <div className="w-[235px] h-[124px] flex flex-col gap-[16px]">
      {/* <!-- Icon --> */} <Image src={"/Purchase.png"} alt="delivery icon" width={24} height={24} />
      <div className="w-[24px] h-[24px] bg-white"></div>
      <div className="flex flex-col gap-[8px]">
        <h4 className="font-['Clash_Display'] text-[20px] leading-[140%] font-normal text-[#2A254B]">
          Unbeatable prices
        </h4>
        <p className="font-['Satoshi'] text-[16px] leading-[150%] text-[#2A254B]">
          For our materials and quality, you will not find better prices anywhere
        </p>
      </div>
    </div>

    {/* <!-- Feature Block 4 --> */}
    <div className="w-[265px] h-[124px] flex flex-col gap-[16px]">
      {/* <!-- Icon --> */} <Image src={"/Sprout.png"} alt="delivery icon" width={24} height={24} />
      <div className="w-[24px] h-[24px] bg-white"></div>
      <div className="flex flex-col gap-[8px]">
        <h4 className="font-['Clash_Display'] text-[20px] leading-[140%] font-normal text-[#2A254B]">
          Recycled packaging
        </h4>
        <p className="font-['Satoshi'] text-[16px] leading-[150%] text-[#2A254B]">
          We use 100% recycled packaging to ensure our footprint is manageable
        </p>
      </div>
    </div>

  </div>
</div>
    )
}