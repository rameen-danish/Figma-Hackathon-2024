import React from "react";
import Image from "next/image";
import Navbar from "../component/header";
import Footer from "../component/footer";

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      image: "/ProductImage.png",
      title: "Graystone vase",
      description: "A timeless ceramic vase with a tri-color grey glaze.",
      price: 85,
      quantity: 1,
    },
    {
      id: 2,
      image: "/ProductImage1.png",
      title: "Basic white vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 125,
      quantity: 1,
    },
  ];

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      {/* Shopping Basket Container */}
      <div className="w-full bg-[#F9F9F9] py-8">
        {/* Shopping Cart Title */}
        <div className="max-w-[1440px] mx-auto px-8">
          <h1 className="text-2xl font-['Clash Display'] text-[#2A254B]">
            Your shopping cart
          </h1>

          {/* Table Headers */}
          <div className="grid grid-cols-3 mt-6 pb-2 border-b border-[#EBE8F4]">
            <h6 className="text-sm text-[#2A254B]">Product</h6>
            <h6 className="text-sm text-[#2A254B] text-center">Quantity</h6>
            <h6 className="text-sm text-[#2A254B] text-right">Total</h6>
          </div>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 items-center py-6 border-b border-[#EBE8F4]"
            >
              {/* Product Details */}
              <div className="flex items-center gap-4">
                <Image src={item.image} alt={item.title} width={133} height={164} />
                <div>
                  <h4 className="text-lg text-[#2A254B] font-['Clash Display']">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#2A254B] font-['Satoshi'] leading-[150%]">
                    {item.description}
                  </p>
                  <span className="text-md text-[#2A254B] font-['Satoshi']">
                    £{item.price}
                  </span>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-center">
                <div className="flex items-center bg-[#F9F9F9] px-4 py-2 gap-4">
                  <button className="text-[#EBE8F4]">-</button>
                  <span className="text-[#2A254B]">{item.quantity}</span>
                  <button className="text-[#EBE8F4]">+</button>
                </div>
              </div>

              {/* Total Price */}
              <div className="text-right text-[#2A254B] font-['Satoshi']">
                £{item.price * item.quantity}
              </div>
            </div>
          ))}

          {/* Price Summary Section */}
          <div className="mt-8 flex flex-col items-end gap-4">
            <div className="flex justify-between items-center gap-8">
              <span className="text-lg font-['Clash Display'] text-[#4E4D93]">
                Subtotal
              </span>
              <span className="text-xl font-['Clash Display'] text-[#2A254B]">
                £{calculateTotal()}
              </span>
            </div>
            <p className="text-sm text-[#4E4D93] font-['Satoshi']">
              Taxes and shipping are calculated at checkout.
            </p>
            <button className="bg-[#2A254B] text-white px-6 py-3 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
