import Link from "next/link";
import Image from "next/image";
interface ProductCardProps{
  image: string;
  title: string;
  price: number;
}

function ProductCard({ image, title, price}:ProductCardProps) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="bg-gray-200 w-full h-[375px] relative">
        <Image src={image} alt={title} layout="fill" className="object-cover" />
      </div>
      <h2 className="text-[#2A254B] text-[20px] leading-[140%] font-clash-display">
        {title}
      </h2>
      <p className="text-[#2A254B] text-[18px] leading-[150%] font-satoshi">
        £{price}
      </p>
    </div>
  );
}

export default function Listing1() {
  const products = [
    { image: "/Photo.png", title: "The Dandy Chair", price: 250 },
    { image: "/Vase set.png", title: "Rustic Vase Set", price: 155 },
    { image: "/Vase.png", title: "The Silky Vase", price: 125 },
    { image: "/Lamp.png", title: "The Lucy Lamp", price: 399 },
  ];

  return (
    <div className="bg-white py-10 px-4 md:px-20">
      {/* Heading */}
      <h1 className="text-[#2A254B] text-[32px] font-clash-display text-center mb-10">
        You might also like
      </h1>

      {/* Product Grid */}
      <Link href={"/ProductListing"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      </Link>
      {/* Button */}
      <div className="flex justify-center mt-10">
        <Link href={"/ProductListingBlog"}><button className="bg-[#F9F9F9] hover:bg-slate-500 text-[#2A254B] text-[16px] font-satoshi font-normal py-3 px-6 rounded transition-all">
          View Collection
        </button></Link>
      </div>
    </div>
  );
}
