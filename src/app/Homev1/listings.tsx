import Image from "next/image";
import Link from "next/link";

export default function Listing1() {
  return (
    // Listings Section
    <div className="w-full h-auto bg-white py-10">
      {/* Title */}
      <div className="text-[#2A254B] text-[24px] lg:text-[32px] leading-[39px] font-clash-display px-6 lg:px-20">
        New ceramics
      </div>

      {/* Product Cards */}
      <div className="mt-10 px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product Card 1 */}
        <Link href={"/ProductListing"}>
        <div className="flex flex-col items-start gap-4 hover:scale-105 transition-all duration-300">
          <Image
            src="/Photo.png"
            alt="The Dandy chair"
            width={305}
            height={375}
            className="w-full object-cover"
          />
          <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
            The Dandy chair
          </div>
          <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">
            £250
          </div>
        </div>
        </Link>

        {/* Product Card 2 */}
        <div className="flex flex-col items-start gap-4 hover:scale-105 transition-all duration-300">
          <Image
            src="/Vase set.png"
            alt="Rustic Vase Set"
            width={305}
            height={375}
            className="w-full object-cover"
          />
          <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
            Rustic Vase Set
          </div>
          <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">
            £155
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col items-start gap-4 hover:scale-105 transition-all duration-300">
          <Image
            src="/Vase.png"
            alt="The Silky Vase"
            width={305}
            height={375}
            className="w-full object-cover"
          />
          <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
            The Silky Vase
          </div>
          <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">
            £125
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="flex flex-col items-start gap-4 hover:scale-105 transition-all duration-300">
          <Image
            src="/Lamp.png"
            alt="The Lucy Lamp"
            width={305}
            height={375}
            className="w-full object-cover"
          />
          <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
            The Lucy Lamp
          </div>
          <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">
            £399
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <Link href="ProductListingBlog">
          <button className="w-[170px] h-[56px] bg-[#F9F9F9] hover:bg-slate-300 flex items-center justify-center text-[#2A254B] text-[16px] font-satoshi font-normal transition-all">
            View Collection
          </button>
        </Link>
      </div>
    </div>
  );
}
