import Image from "next/image";

export default function Filter(){
    return(
        // <!-- Filters Container -->
<div className="w-[1440px] h-[64px] bg-white flex items-center justify-between px-6">

    {/* <!-- Filters Section --> */}
    <div className="flex gap-3 relative left-6 top-[calc(50%-48px/2)]">

        {/* <!-- Filter Button 1 --> */}
        <div className="flex items-center gap-2 p-3 w-[137px] h-[48px] ">
            <span className="text-[#2A254B] font-satoshi text-[16px] leading-[150%]">Category</span>
            <Image src={"/Caret--down.png"} alt="" width={16} height={16} />
        </div>

        {/* <!-- Filter Button 2 --> */}
        <div className="flex items-center gap-2 p-3 w-[162px] h-[48px] ">
            <span className="text-[#2A254B] font-satoshi text-[16px] leading-[150%]">Product Type</span>
            <Image src={"/Caret--down.png"} alt="" width={16} height={16} />
        </div>

        {/* <!-- Filter Button 3 --> */}
        <div className="flex items-center gap-2 p-3 w-[108px] h-[48px] ">
            <span className="text-[#2A254B] font-satoshi text-[16px] leading-[150%]">Price</span>
            <Image src={"/Caret--down.png"} alt="" width={16} height={16} />
        </div>

{/* <!-- Filter Button 4 --> */}
        <div className="flex items-center gap-2 p-3 w-[114px] h-[48px] ">
            <span className="text-[#2A254B] font-satoshi text-[16px] leading-[150%]">Brand</span>
            <Image src={"/Caret--down.png"} alt="" width={16} height={16} />
        </div>
    </div>

    {/* <!-- Sorting Section --> */}
    <div className="flex items-center gap-4 relative right-6 top-[calc(50%-48px/2)]">
        <span className="text-[#2A254B] font-satoshi text-[16px] leading-[150%]">Sorting by:</span>
        
        <div className="flex items-center gap-2 p-3 w-[154px] h-[48px] ">
            <span className="text-[#2A254B] font-satoshi text-[16px] leading-[150%]">Date Added</span>
            <Image src={"/Caret--down.png"} alt="" width={16} height={16} />
        </div>
    </div>

</div>

    )
}