import Image from "next/image"
export default function Listing1() {
    return (
        // <!-- Listings -->
<div className="w-[1540px] h-[761px] bg-white relative">
  {/* <!-- New ceramics --> */}
  <div className="absolute w-[217px] h-[39px] left-[80px] top-[80px] text-[#2A254B] text-[32px] leading-[39px] font-clash-display">
    New ceramics
  </div>

  {/* <!-- Product Card 1 --> */}
  <div className="absolute w-[305px] h-[462px] left-[calc(50%-305px/2-487.5px)] top-[calc(50%-462px/2+2.5px)] flex flex-col items-start gap-[24px]">
    <div className="relative w-full h-full"></div>
    <Image className="flex flex-col items-start gap-[8px]" src={"/Photo.png"} alt="" width={305} height={375} />
      <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
        The Dandy chair
      </div>
      <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">
        £250
      </div>
    </div>
  {/* <!-- Product Card 2 --> */}
  <div className="absolute w-[305px] h-[462px] left-[calc(50%-305px/2-162.5px)] top-[calc(50%-462px/2+2.5px)] flex flex-col items-start gap-[24px]">
    <div className="relative w-full h-full"></div>
    <Image className="flex flex-col items-start gap-[8px]" src={"/Vase set.png"} alt="" width={305} height={375} />
      <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
        Rustic Vase Set
      </div>
      <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">
        £155
      </div>
    </div>
  

  {/* <!-- Product Card 3 --> */}
  <div className="absolute w-[305px] h-[462px] left-[calc(50%-305px/2+162.5px)] top-[calc(50%-462px/2+2.5px)] flex flex-col items-start gap-[24px]">
    <div className="relative w-full h-full"></div>
    <Image className="flex flex-col items-start gap-[8px]" src={"/Vase.png"} alt="" width={305} height={375} />
      <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
        The Silky Vase
      </div>
      <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">
        £125
      </div>
    </div>
  

  {/* <!-- Product Card 4 --> */}
  <div className="absolute w-[305px] h-[462px] left-[calc(50%-305px/2+487.5px)] top-[calc(50%-462px/2+2.5px)] flex flex-col items-start gap-[24px]">
    <div className="relative w-full h-full "></div>
    <Image className="flex flex-col items-start gap-[8px]" src={"/Lamp.png"} alt="" width={305} height={375} />
      <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
        The Lucy Lamp
      </div>
      <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">
        £399
      </div>
    </div>
 

  {/* <!-- Button --> */}
  <button className="absolute w-[170px] h-[56px] left-[635px] top-[689px] bg-[#F9F9F9] flex flex-row items-start px-[32px] py-[16px] gap-[10px] box-border hover:bg-slate-500">
    <span className="w-[106px] h-[24px] text-[#2A254B] text-[16px] leading-[150%] font-['Satoshi'] font-normal">
      View Collection
    </span>
  </button>
</div>

    )
}