import Link from "next/link";
import Image from "next/image";

export default function Homev1() {
  return (
    <div className="w-full lg:h-[584px] h-auto bg-white relative lg:py-10">
      {/* Container */}
      <div className="mx-auto w-full max-w-[1280px] bg-[#2A254B] flex flex-col lg:flex-row lg:items-start lg:h-[584px] py-10 px-6 lg:py-0">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 lg:gap-10 lg:w-1/2">
          {/* Heading */}
          <h2 className="text-[24px] lg:text-[32px] leading-[140%] font-normal text-white lg:py-10">
            The furniture brand for the future, with timeless designs
          </h2>

          {/* Button */}
          <Link href={"ProductListingBlog"}>
            <button className="px-6 py-3 bg-[rgba(249,249,249,0.15)] hover:bg-slate-500 transition-all">
              <span className="text-[16px] leading-[150%] text-white font-normal">
                View Collection
              </span>
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="mt-6 lg:mt-0 lg:absolute lg:left-[890px]">
          <Image
            className=""
            src="/Right Image.png"
            alt="Chair-pic"
            width={520}
            height={584}
          />
        </div>
      

      {/* Description Text */}
      <p className="max-w-[90%] lg:max-w-[602px] mx-auto mt-8 lg:absolute lg:bottom-10 lg:left-[140px] text-[16px] lg:text-[18px] leading-[150%] font-normal text-[#ffffff] bg-[#2A254B]">
        A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
      </p>
    </div>
    </div>
  );
}
