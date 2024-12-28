import Image from "next/image";
import Link from "next/link";

export default function Listing2() {
  return (
    <div className="w-full bg-white px-6 lg:px-20 py-16 min-h-[100vh]">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="font-ClashDisplay text-[#2A254B] text-[24px] lg:text-[32px] font-normal">
          Our popular products
        </h1>
      </div>

      {/* Responsive grid */}
      <div className="max-w-[1308px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Column 1 (spans 2 columns on large screens) */}
        <div className="lg:col-span-2 hover:scale-105 transition-all duration-300">
          <div className="bg-[#F5F5F5] flex justify-center items-center">
            <div className="relative w-full h-[375px]">
              <Image
                src="/Sofa.jpg"
                alt="The Poplar suede sofa"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4">
            <h1 className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              The Poplar suede sofa
            </h1>
            <p className="text-[18px] text-gray-600 leading-[150%] font-satoshi">
              £980
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <Link href={"/ProductListing"}>
        <div>
          <div className="bg-[#F5F5F5] flex justify-center items-center hover:scale-105 transition-all duration-300">
            <div className="relative w-full h-[375px]">
              <Image
                src="/Right Image.png"
                alt="The Dandy Chair"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4">
            <h1 className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              The Dandy Chair
            </h1>
            <p className="text-[18px] text-gray-600 leading-[150%] font-satoshi">
              £250
            </p>
          </div>
        </div>
        </Link>
        {/* Column 3 */}
        <Link href={"/ProductListing"}>
        <div>
          <div className="bg-[#F5F5F5] flex justify-center items-center hover:scale-105 transition-all duration-300">
            <div className="relative w-full h-[375px]">
              <Image
                src="/Chair.png"
                alt="The Silky Chair"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text below the image */}
          <div className="mt-4">
            <h1 className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              The Silky Chair
            </h1>
            <p className="text-[18px] text-gray-600 leading-[150%] font-satoshi">
              £250
            </p>
          </div>
        </div>
        </Link>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <Link href="ProductListingBlog">
          <button className="bg-[#F9F9F9] h-[56px] w-[200px] flex justify-center items-center text-[#2A254B] hover:bg-slate-300 transition-all">
            View Collection
          </button>
        </Link>
      </div>
    </div>
  );
}
