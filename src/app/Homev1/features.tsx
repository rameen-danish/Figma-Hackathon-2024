import Image from "next/image";

export default function Features() {
  return (
    // <!-- Features Section -->
    <div className="w-full bg-white px-6 py-10">
      {/* <!-- Section Title --> */}
      <h3 className="text-center text-[20px] sm:text-[24px] font-['Clash_Display'] font-normal text-[#2A254B]">
        What makes our brand different
      </h3>

      {/* <!-- Feature Blocks Container --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-8 max-w-5xl mx-auto ">
        {/* <!-- Feature Block 1 --> */}
        <div className="w-[270px] h-[124px] flex flex-col items-start gap-4 ">
          {/* <!-- Icon --> */}
          <Image src={"/Delivery.png"} alt="delivery icon" width={24} height={24} />
          <h4 className="text-[18px] sm:text-[20px] font-['Clash_Display'] font-normal text-[#2A254B]">
            Next day as standard
          </h4>
          <p className="text-[14px] sm:text-[16px] font-['Satoshi'] text-[#2A254B]">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
       

        {/* <!-- Feature Block 2 --> */}
        <div className="w-[270px] h-[124px] flex flex-col items-start gap-4 ">
          {/* <!-- Icon --> */}
          <Image src={"/Checkmark--outline.png"} alt="delivery icon" width={24} height={24} />
          <h4 className="text-[18px] sm:text-[20px] font-['Clash_Display'] font-normal text-[#2A254B]">
            Made by true artisans
          </h4>
          <p className="text-[14px] sm:text-[16px] font-['Satoshi'] text-[#2A254B]">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        {/* <!-- Feature Block 3 --> */}
        <div className="w-[270px] h-[124px] flex flex-col items-start gap-4 ">
          {/* <!-- Icon --> */}
          <Image src={"/Purchase.png"} alt="delivery icon" width={24} height={24} />
          <h4 className="text-[18px] sm:text-[20px] font-['Clash_Display'] font-normal text-[#2A254B]">
            Unbeatable prices
          </h4>
          <p className="text-[14px] sm:text-[16px] font-['Satoshi'] text-[#2A254B]">
            For our materials and quality, you will not find better prices anywhere
          </p>
        </div>

        {/* <!-- Feature Block 4 --> */}
        <div className="w-[270px] h-[124px] flex flex-col items-start gap-4 ">
          {/* <!-- Icon --> */}
          <Image src={"/Sprout.png"} alt="delivery icon" width={24} height={24} />
          <h4 className="text-[18px] sm:text-[20px] font-['Clash_Display'] font-normal text-[#2A254B]">
            Recycled packaging
          </h4>
          <p className="text-[14px] sm:text-[16px] font-['Satoshi'] text-[#2A254B]">
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
}
