import Image from "next/image";
import Link from "next/link";
import Navbar from "../ProductListing/header";
import Footer from "../component/footer";
import Features from "../Homev1/features";
import Email from "../Homev1/email";

export default function About() {
    return (
        <div className="font-sans">
            {/* Banner */}
            <div className="relative w-full bg-[#2A254B] flex items-center justify-center px-4 py-2">
                <div className="flex flex-row items-center gap-2">
                    <Image src={"/Delivery2.png"} alt="delivery icon" width={30} height={30} />
                    <p className="text-white font-satoshi font-normal text-sm">
                        Free delivery on all orders over £50 with code easter checkout
                    </p>
                </div>
                <button className="flex flex-row items-center gap-2 lg:right-4 lg:absolute">
                    <Image src={"/close.png"} alt="cart" width={30} height={30} />
                </button>
            </div>

            <Navbar />

            {/* Page header */}
            <div className="w-full bg-white flex flex-col lg:flex-row items-start justify-between px-8 lg:px-32 py-12 text-left">
                <h1 className="text-2xl lg:text-4xl font-clash-display font-normal leading-relaxed text-[#2A254B]">
                    A brand built on the love of craftsmanship, <br />
                    quality and outstanding customer service
                </h1>
                <Link href={"ProductListingBlog"}>
                    <button className=" w-full flex flex-row justify-center items-center px-8 py-4 gap-2 mt-4 lg:w-[192px] lg:h-[56px] bg-[#F9F9F9]">
                        <span className="font-satoshi text-base text-center text-[#2A254B]">
                            View our products
                        </span>
                    </button>
                </Link>
            </div>

            {/* Feature Section */}
            <div className="w-full bg-white flex flex-col lg:flex-row items-start px-6 lg:px-20 py-8 gap-4">
                <div className="w-full lg:w-1/2 lg:h-[478px]  bg-[#2A254B] relative p-6 lg:p-12">
                    <div className=" flex flex-col gap-3">
                        <h2 className="text-white text-xl lg:text-2xl leading-snug font-clash-display">
                            It started with a small idea
                        </h2>
                        <p className="text-white text-sm lg:text-base font-satoshi ">
                            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
                        </p>
                    </div>
                    <Link href={"ProductListingBlog"}>
                        <button className=" lg:mt-40 mt-7 w-full lg:w-[172px] lg:h-[56px] flex flex-row justify-center items-center px-6 py-3 bg-white/15 text-white text-sm">
                        <span className="font-satoshi text-center ">
                            View collection
                        </span>
                        </button>
                    </Link>
                </div>
                <div className="w-full lg:w-1/2">
                    <Image src={"/Image Block.png"} alt="image-sofa" layout="responsive" width={630} height={478} />
                </div>
            </div>

            <Features />
            <Email />
            <Footer />
        </div>
    );
}
