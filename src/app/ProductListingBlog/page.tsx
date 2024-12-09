import Navbar from "../component/header";
import Footer from "../component/footer";
import Image from "next/image";
import Filter from "./filter";
import Listing1 from "./listing";

export default function ProductListingBlog() {
    return (
        <div>
            <Navbar />
            {/* Frame  */}
            <div className="flex-none order-1 flex-grow-0 relative">
                <Image src={"/Frame143.png"} alt="products farme" width={1440} height={209}/>
            </div>
           <Filter/>
            <Listing1/>
            <Footer />
        </div>
    )
}