import Image from "next/image";

export default function Features2() {
  return (
    <section className="flex flex-col lg:flex-row items-center  w-full  bg-white">
      {/* Left Content */}
      <div className="flex flex-col  justify-center items-center px-6 py-8 lg:w-1/2">
        {/* Top Content */}
        <div className="flex flex-col gap-6 max-w-xl">
          {/* Heading */}
          <h2 className="font-clash-display text-[24px] leading-[140%] text-[#2A254B]">
            From a studio in London to a global brand with over 400 outlets
          </h2>

          {/* Description */}
          <p className="font-satoshi text-[16px] leading-[22px] text-[#505977]">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
            <br />
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
        </div>

        {/* Button */}
        
        <button className=" mt-8 w-[150px] h-[56px] bg-[#F9F9F9] ">
          <span className="font-satoshi text-[16px] leading-[150%] text-[#2A254B]">Get in Touch</span>
        </button>
      </div>
      
      {/* Right Content (Image) */}
      <div className="w-full lg:w-1/2">
        <Image
          className="object-cover"
          src={"/feature2.png"}
          alt="Right content image"
          width={850}
          height={603}
          layout="responsive"
        />
      </div>
    </section>
  );
}
