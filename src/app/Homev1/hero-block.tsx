
import Link from "next/link"
import Image from "next/image"
export default function Homev1() {
    return (
        <div className="w-[1540px] h-[704px] bg-white relative">
            {/* <!-- Container --> */}
            <div className="absolute w-[1280px] h-[584px] left-[80px] top-[60px] bg-[#2A254B]">

                {/* <!-- Top Content --> */}
                <div className="absolute w-[513px] h-[187px] left-[60px] top-[60px] flex flex-col items-start gap-[41px]">

                    {/* <!-- Heading --> */}
                    <h2 className="w-[513px] h-[90px] font-Clash_Display text-[32px] leading-[140%] font-normal text-white">
                        The furniture brand for the future, with timeless designs
                    </h2>

                    {/* <!-- Button Medium --> */}
                    <Link href={"ProductListingBlog"}>
                    <button className="flex flex-row items-start px-8 py-4 gap-[10px] w-[170px] h-[56px] bg-[rgba(249,249,249,0.15)] hover:bg-slate-500">
                        <span className="w-[106px] h-[24px] font-['Satoshi'] text-white text-[16px] leading-[150%] font-normal ">
                        View Collection
                        </span>
                    </button>
                    </Link>
                    
                </div>

                {/* <!-- Right Image --> */}
                <Image className="absolute w-[520px] h-[584px] left-[760px] top-0 bg-cover bg-center" src="/Right Image.png" alt="Chair-pic" width={520} height={584} />

                {/* <!-- Description Text --> */}
                <p className="absolute w-[602px] h-[81px] left-[60px] top-[443px] font-Satoshi text-[18px] leading-[150%] font-normal text-white">
                    A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
                </p>
            </div>
        </div>


    )
}