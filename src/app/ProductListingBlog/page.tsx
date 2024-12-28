import Navbar from "../component/header";
import Footer from "../component/footer";
import Image from "next/image";
import Filter from "./filter";
import Listing1 from "./listing";

export default function ProductListingBlog() {
  return (
    <div>
      <Navbar />

      {/* Frame */}
      <div className="relative w-full">
        <Image
          src={"/Frame143.png"}
          alt="Products Frame"
          width={1440}
          height={209}
          layout="responsive"
        />
      </div>     
        <Filter />    
        <Listing1 />
      <Footer />
    </div>
  );
}
