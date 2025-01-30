import Image from "next/legacy/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Footer from "../(store)/component/footer";
import Filter from "./filter";
import Navbar from "../(store)/component/header";

interface Product {
  _id: string | number;
  name: string;
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
  description: string;
  price:number;
  imageUrl: string;
  slug: string;
}

const Products = async () => {
  const query = `*[_type == "product"]{
    _id,
    name,
    dimensions,
    description,
    price,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }`;
  const products: Product[] = await client.fetch(query);
    return (
      <div>
            <Navbar /> 
            {/* Frame */}
            <div className="relative w-full ">
              <Image
                src={"/Frame143.png"}
                alt="Products Frame"
                width={1440}
                height={209}
                layout="responsive"
              />
            </div>  
            <Filter />    
            {/* Show All products fetch from sanity */}
      <div className="w-full h-auto bg-white relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] p-[28px]">
          {products.map((product) => (
            <Link key={product._id} href={`ProductListingBlog/${product._id}`}
            >
              <div className="flex flex-col items-center gap-[16px] hover:scale-105 transition-all duration-300">
                <Image
                  className="w-full  h-80 object-cover mb-4"
                  src={product.imageUrl}
                  alt={product.name}
                  width={500}
                  height={500}
                />
                <div className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
                  {product.name}
                </div>
                <div className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">
                £{product.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center py-8">
          <Link href={"/ProductListingBlog"}>
          <button className="w-[170px] h-[56px] bg-[#2A254B] flex items-center justify-center gap-[10px] box-border rounded-md hover:bg-[#1d1a38]">
            <span className="text-white text-[16px] leading-[150%] font-satoshi">
              View Collection
            </span>
          </button>
          </Link>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
  export default Products;
  