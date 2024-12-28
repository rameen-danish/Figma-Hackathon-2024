import Navbar from "./header";
import Image from "next/image";
import Listing1 from "./listing";
import Email from "../Homev1/email";
import Footer from "../component/footer";
import Features from "../Homev1/features";

export default function ProductListing() {
  const product = {
    name: "The Dandy Chair",
    price: 250,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    features: ["Premium material", "Handmade upholstery", "Quality timeless classic"],
    dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
    image: "/Image Left.png",
  };

  return (
    <div>
      {/* Promo Banner */}
      <div className="relative bg-[#2A254B] flex items-center justify-center py-2">
        {/* Close Button */}
        <button
          className="absolute top-2 right-4 hover:opacity-80"
          aria-label="Close promo banner"
        >
          <Image src="/close.png" alt="close" width={30} height={30} />
        </button>
        {/* Banner Content */}
        <div className="flex items-center gap-2">
          <Image src="/Delivery2.png" alt="delivery icon" width={30} height={30} />
          <p className="text-white font-satoshi text-sm">
            Free delivery on all orders over £50 with code <b>EASTER</b> at checkout
          </p>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Product Details */}
      <div className="flex flex-col lg:flex-row bg-white">
        {/* Product Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={721}
            height={759}
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-10 lg:w-1/2">
          <h1 className="text-2xl font-clash-display text-[#2A254B] mb-4 ">{product.name}</h1>
          <p className="text-xl font-satoshi text-[#2A254B] mb-6 lg:mb-10">£{product.price}</p>

          <h2 className="text-lg font-clash-display text-[#2A254B] mb-2 lg:mb-4">Description</h2>
          <p className="text-sm text-[#505977] mb-4">{product.description}</p>

          <ul className="list-disc pl-5 text-sm text-[#505977] lg:mb-10">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="mt-8">
            <h3 className="text-lg font-clash-display text-[#2A254B] mb-2 lg:mb-6">Dimensions</h3>
            <div className="grid grid-cols-3 gap-3"> 
              <div>
                <p className="text-sm font-clash-display text-[#2A254B] lg:mb-4">Height</p>
                <p className="text-sm text-[#505977]">{product.dimensions.height}</p>
              </div>
              <div>
                <p className="text-sm font-clash-display text-[#2A254B] lg:mb-4">Width</p>
                <p className="text-sm text-[#505977]">{product.dimensions.width}</p>
              </div>
              <div>
                <p className="text-sm font-clash-display text-[#2A254B] lg:mb-4">Depth</p>
                <p className="text-sm text-[#505977]">{product.dimensions.depth}</p>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mt-8">
            <label className="mr-4 text-sm font-clash-display text-[#2A254B]">Amount:</label>
            <div className="flex items-center border bg-[#F9F9F9] px-4 py-2">
              <button className="text-gray-400">-</button>
              <p className="mx-2 text-[#2A254B]">1</p>
              <button className="text-gray-400">+</button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-[#2A254B] text-white py-3 px-6 mt-8 rounded hover:bg-[#1d1a38]">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Additional Sections */}
      <Listing1 />
      <Features />
      <Email />
      <Footer />
    </div>
  );
}
