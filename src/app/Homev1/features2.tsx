import Image from "next/image"
export default function Features2(){
    return(
        // <!-- Features Section -->
<div className="w-[1440px] h-[603px] flex-none order-6 flex-grow-0 flex">

  {/* <!-- Left Content --> */}
  <div className="w-[720px] h-[603px] bg-white relative">

    {/* <!-- Top Content --> */}
    <div className="absolute w-[536px] h-[225px] left-[134px] top-[72px] flex flex-col gap-[25px]">

      {/* <!-- Heading --> */}
      <h2 className="font-clash-display text-[24px] leading-[140%] text-[#2A254B] w-[514px] h-[68px]">
        From a studio in London to a global brand with over 400 outlets
      </h2>

      {/* <!-- Description --> */}
      <p className="font-satoshi text-[16px] leading-[22px] text-[#505977] w-[536px] h-[132px]">
        When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.<br></br>
        <br></br>
         Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
      </p>
    </div>

    {/* <!-- Button --> */}
    <button className="absolute left-[134px] top-[493px] w-[150px] h-[56px] bg-[#F9F9F9] flex items-center justify-center">
      <span className="font-satoshi text-[16px] leading-[150%] text-[#2A254B]">Get in Touch</span>
    </button>

  </div>

  {/* <!-- Right Content (Image) --> */}
  <Image className="bg-white bg-cover" src={"/feature2.png"}alt="Right content image" width={850} height={603}/>

</div>

    )
}