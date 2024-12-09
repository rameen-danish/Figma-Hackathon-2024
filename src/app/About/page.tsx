import Image from "next/image";
import Link from "next/link";
import Navbar from "../ProductListing/header";
import Footer from "../component/footer";
import Features from "../Homev1/features";
import Email from "../Homev1/email";

export default function About() {
    return (
        <div>
            <div className="relative w-[1440] h-[41px] bg-[#2A254B] flex items-center justify-center">
                <button className="absolute right-4 top-2 hover:opacity-80 flex items-center justify-center">
                    <Image src={"/close.png"} alt="cart" width={30} height={30} />
                </button>
                <div className="flex flex-row items-center gap-2">
                    <div className="flex items-center justify-center">
                        <Image src={"/Delivery2.png"} alt="delivery icon" width={30} height={30} />
                    </div>
                    <p className="text-white font-satoshi font-normal text-sm leading-[19px]">
                        Free delivery on all orders over £50 with code easter checkout
                    </p>
                </div>
            </div>
            <Navbar />

            {/* Page header */}
            <div className="w-[1440px] h-[277px] bg-white flex items-start justify-between px-[128px] py-[88px]">
                <h1 className="w-[704px] h-[100px] font-clash-display font-normal text-[36px] leading-[140%] text-[#2A254B]">
                    <span className="whitespace-nowrap text-ellipsis">A brand built on the love of craftsmanship,</span><br></br> quality and outstanding customer service
                </h1>
                <button className="flex items-center gap-2 p-4 w-[192px] h-[56px] bg-[#F9F9F9]">
                    <span className="w-[128px] h-[24px] font-satoshi font-normal text-[16px] leading-[150%] text-[#2A254B]">
                        View our products
                    </span>
                </button>

            </div>

            {/* Feature */}
            <div className="flex flex-row items-start px-20 py-15 gap-4 w-[1440] h-[598px] bg-white">
  <div className="w-[634px] h-[478px] bg-[#2A254B] relative">
    <div className="absolute top-16 left-16 flex flex-col gap-3 w-[495px] h-[99px]">
      <h2 className="font-clash text-white text-[32px] leading-[39px]">
        It started with a small idea
      </h2>
      <p className="font-satoshi text-white text-[18px] leading-[24px]">
        A global brand with local beginnings, our story began in a small studio in South London in early 2014.
      </p>
    </div>
    <button className="absolute left-16 top-[368px] flex items-center px-8 py-4 gap-2 w-[170px] h-[56px] bg-white/15">
      <span className="font-satoshi text-white text-[16px]">View collection</span>
    </button>
  </div>
  <Image src={"/Image Block.png"} alt="image-sofa" width={630} height={478}/>
</div>



            <Features />
            <Email />
            <Footer />
        </div>
    )
}