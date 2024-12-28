import Image from "next/image";
import Link from "next/link";

export default function Listing1() {
  return (
    <div>
      {/* Listing 1 */}
      <div className="w-full h-auto bg-white relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] p-[28px]">
          {/* Product Card 1 */}
          <Link href={"/ProductListing"}>
          <div className="flex flex-col items-center gap-[16px] hover:scale-105 transition-all duration-300">
            <Image className="w-full" src={"/Photo.png"} alt="Dandy Chair" width={305} height={375} />
            <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              The Dandy chair
            </div>
            <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">£250</div>
          </div>
          </Link>
          {/* Product Card 2 */}
          <div className="flex flex-col items-center gap-[16px] hover:scale-105 transition-all duration-300">
            <Image className="w-full" src={"/Vase set.png"} alt="Rustic Vase Set" width={305} height={375} />
            <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              Rustic Vase Set
            </div>
            <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">£155</div>
          </div>

          {/* Product Card 3 */}
          <div className="flex flex-col items-center gap-[16px] hover:scale-105 transition-all duration-300">
            <Image className="w-full" src={"/Vase.png"} alt="Silky Vase" width={305} height={375} />
            <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              The Silky Vase
            </div>
            <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">£125</div>
          </div>

          {/* Product Card 4 */}
          <div className="flex flex-col items-center gap-[16px] hover:scale-105 transition-all duration-300">
            <Image className="w-full" src={"/Lamp.png"} alt="Lucy Lamp" width={305} height={375} />
            <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              The Lucy Lamp
            </div>
            <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">£399</div>
          </div>
        </div>
      </div>

      {/* Listing 2 */}
      <div className="w-full h-auto bg-white relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] p-[28px]">
          {/* Product Card 1 */}
          <div className="flex flex-col items-center gap-[16px] hover:scale-105 transition-all duration-300">
            <Image className="w-full" src={"/pic1.png"} alt="Dandy Chair" width={305} height={375} />
            <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              The Dandy chair
            </div>
            <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">£250</div>
          </div>

          {/* Product Card 2 */}
          <div className="flex flex-col items-center gap-[16px] hover:scale-105 transition-all duration-300">
            <Image className="w-full" src={"/pic2.png"} alt="Rustic Vase Set" width={305} height={375} />
            <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              Rustic Vase Set
            </div>
            <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">£155</div>
          </div>

          {/* Product Card 3 */}
          <div className="flex flex-col items-center gap-[16px] hover:scale-105 transition-all duration-300">
            <Image className="w-full" src={"/pic3.png"} alt="Silky Vase" width={305} height={375} />
            <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              The Silky Vase
            </div>
            <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">£125</div>
          </div>

          {/* Product Card 4 */}
          <div className="flex flex-col items-center gap-[16px] hover:scale-105 transition-all duration-300">
            <Image className="w-full" src={"/pic4.png"} alt="Lucy Lamp" width={305} height={375} />
            <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              The Lucy Lamp
            </div>
            <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">£399</div>
          </div>
        </div>
      </div>

      {/* Listing 3 */}
      <div className="w-full h-auto bg-white relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] p-[28px]">
          {/* Product Card 1 */}
          <div className="flex flex-col items-center gap-[16px] hover:scale-105 transition-all duration-300">
            <Image className="w-full" src={"/Photo.png"} alt="Dandy Chair" width={305} height={375} />
            <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              The Dandy chair
            </div>
            <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">£250</div>
          </div>

          {/* Product Card 2 */}
          <div className="flex flex-col items-center gap-[16px] hover:scale-105 transition-all duration-300">
            <Image className="w-full" src={"/Vase set.png"} alt="Rustic Vase Set" width={305} height={375} />
            <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              Rustic Vase Set
            </div>
            <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">£155</div>
          </div>

          {/* Product Card 3 */}
          <div className="flex flex-col items-center gap-[16px] hover:scale-105 transition-all duration-300">
            <Image className="w-full" src={"/Vase.png"} alt="Silky Vase" width={305} height={375} />
            <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              The Silky Vase
            </div>
            <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">£125</div>
          </div>

          {/* Product Card 4 */}
          <div className="flex flex-col items-center gap-[16px] hover:scale-105 transition-all duration-300">
            <Image className="w-full" src={"/Lamp.png"} alt="Lucy Lamp" width={305} height={375} />
            <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
              The Lucy Lamp
            </div>
            <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">£399</div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center py-8">
          <button className="w-[170px] h-[56px] bg-[#F9F9F9] flex items-center justify-center gap-[10px] box-border hover:bg-slate-300">
            <span className="text-[#2A254B] text-[16px] leading-[150%] font-satoshi">
              View Collection
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
