"use client"
import Navbar from "./header";
import Image from "next/image";
import Listing1 from "./listing";
import Email from "@/app/(store)/Homev1/email";
import Footer from "@/app/(store)/component/footer";
import Features from "@/app/(store)/Homev1/features";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import {useSelector, useDispatch } from "react-redux";
import { add } from "@/app/cart/redux/cartslice";
import { increment , decrement } from "@/app/cart/redux/cartslice";import { products } from "@/app/Data";
import Products from "../page";
;
interface Product {
  id: any;
  stock: number;
  _id: number | string;
  name: string;
  price: string;
  description: string;
  image: string;
  dimensions: {
    depth: string;
    height: string;
    width: string;
  };
  slug: string;
}

const Page = ({ params }: { params: { product: string } }) => {

  const { product } = params;
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [data, setData] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // Default quantity set to 1
  const dispatch = useDispatch();
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState();
  // const count = useSelector((state) => state.counter.value);

  //product quantity increment / decrement
  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1); // Prevent going below 1
  };

  function setIsModalOpen(arg0: boolean) {
    throw new Error("Function not implemented.");
  }
   // Initialize Wishlist from localStorage
   useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Add/Remove Item from Wishlist
  const handleAddToWishList = (id: string) => {
    if (wishlist.includes(id)) {
      const updatedWishlist = wishlist.filter((itemId) => itemId !== id);
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      const updatedWishlist = [...wishlist, id];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };// Fetch Product Details
  useEffect(() => {
    const fetchProduct = async () => {
      try { 
        const query = `*[_type=="product" && _id == $ids] {
          _id,
          name,
          price,
          description,
          "image": image.asset->url,
          dimensions,
          slug
        }`;
        const productData = await client.fetch(query, {ids: params.product})
        console.log(productData);
        setData(productData[0]);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
 }, [product]);
 if (!data) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* <Loader /> */}
    </div>
  );
}

 // Add to Cart Functionality
//  const handleAddToCart = async () => {
//   const productId = productData.id ?? "default-id"; // Provide a fallback ID if undefined
  
//     const stock = productData.stock ?? 0;
  
//     if (stock <= 0) {
//       alert("Product is out of stock!");
//       return;
//     }
// const handleAddToCart = () => {
//   if (!data) return;

//   if (data.stock && data.stock <= 0) {
//     alert("Product is out of stock!");
//     return;
//   }
//   const cartItem = {
//     _id: data.slug,
//     title: data.name,
//     price: data.price,
//     image: data.image,
//     quantity: 1,
//     name: data.name,
//     description: data.description,
//   };

//   dispatch(add(cartItem));
//   alert("Item successfully added to cart!");

// };
const handleAddToCart = () => {
  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

  // Check if the product already exists in the cart
  const existingProductIndex = existingCart.findIndex(
    (item: any) => item.id === data._id
  );

  if (existingProductIndex !== -1) {
    // Update the quantity of the existing product
    existingCart[existingProductIndex].quantity += quantity;
  } else {
    // Add the new product with the selected quantity
    existingCart.push({
      id: data._id,
      name : data?.name,
      price: data?.price,
      quantity,
      image: data?.image,
    });
  }

  // Save the updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(existingCart));

  // Show the modal for the product added to cart
  setIsModalOpen(true);

  // Close the modal after 3 seconds
  setTimeout(() => {
    setIsModalOpen(false);
  }, 3000);
};
const addItemToCart = (cartItem: any) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  // Check if the product already exists in the cart
  const existingItem = cart.find((item: any) => item.id === cartItem.id);

  if (existingItem) {
    // If it exists, update the quantity
    existingItem.quantity += 1;
  } else {
    // If not, add the new item
    cart.push({ ...cartItem, quantity: 1 });
  }

  // Update the cart in the state and localStorage
  setCartItems(cart);
  localStorage.setItem("cart", JSON.stringify(cart));

  setPopupMessage(`${cartItem.name} has been added to your cart! ✅✨`);
  setTimeout(() => setPopupMessage(null), 2000);
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
        <div className="flex justify-center w-full lg:w-1/2">
          <Image
            src={data.image}
            alt={data.name}
            width={721}
            height={759}
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-10 lg:w-1/2">
          <h1 className="text-2xl font-clash-display text-[#2A254B] mb-4 ">{data.name}</h1>
          <p className="text-xl font-satoshi text-[#2A254B] mb-6 lg:mb-10">£{data.price}</p>

          <h2 className="text-lg font-clash-display text-[#2A254B] mb-2 lg:mb-4">Description</h2>
          <p className="text-sm text-[#505977] mb-4">{data.description}</p>

          <ul className="list-disc pl-5 text-sm text-[#505977] lg:mb-10">
          <li className="text-[#2A254B]">Premium material</li>
            <li className="text-[#2A254B]">Handmade upholstery</li>
            <li className="text-[#2A254B]">Quality timeless classic</li>
          </ul>

          <div className="mt-8">
            <h3 className="text-lg font-clash-display text-[#2A254B] mb-2 lg:mb-6">Dimensions</h3>
            <div className="grid grid-cols-3 gap-3"> 
              <div>
                <p className="text-sm font-clash-display text-[#2A254B] lg:mb-4">Height</p>
                <p className="text-sm text-[#505977]">{data.dimensions.height}</p>
              </div>
              <div>
                <p className="text-sm font-clash-display text-[#2A254B] lg:mb-4">Width</p>
                <p className="text-sm text-[#505977]">{data.dimensions.width}</p>
              </div>
              <div>
                <p className="text-sm font-clash-display text-[#2A254B] lg:mb-4">Depth</p>
                <p className="text-sm text-[#505977]">{data.dimensions.depth}</p>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mt-8">
            <label className="mr-4 text-sm font-clash-display text-[#2A254B]">Amount:</label>
            <div className="flex items-center border bg-[#F9F9F9] px-4 py-2">
              <button onClick={decrease} className="text-gray-400">-</button>
              <p className="mx-2 text-[#2A254B]">{quantity}</p>
              <button   onClick={increase} className="text-gray-400">+</button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button  onClick={handleAddToCart}
           className="bg-[#2A254B] text-white py-3 px-6 mt-8 rounded hover:bg-[#1d1a38]">
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
export default Page;


