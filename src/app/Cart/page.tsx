"use client";
import { useEffect, useState } from "react";
import ItemCard from "./productCard";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "../(store)/component/header";

const UserCartComponent = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const CheckoutModal = dynamic(() => import("../OrderSystem/CheckoutModel"));

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const removeItemFromCart = (productId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productId: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (productId: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleOpenModal = () => {
    if (cartItems.length === 0 || calculateSubtotal() === 0) {
      alert("Please add items to your cart before proceeding to checkout.");
      return;
    }
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmitForm = (formData: any) => {
    console.log(formData);
    localStorage.removeItem("cart");
    setCartItems([]);
    
    handleCloseModal();
  };

  return (
    <div>
        <Navbar /> 
        <div className="w-full bg-[#F9F9F9] py-8 ">
      <CheckoutModal isOpen={isModalOpen} closeModal={handleCloseModal} onSubmit={handleSubmitForm} />
      <div className="max-w-[1440px] mx-auto px-8">
      <h1 className=" text-2xl font-['Clash Display'] text-[#2A254B]">
        Your shopping cart
      </h1>

      <div className="hidden lg:block md:m-[2rem]">
        <div className="flex relative">
          <p className="pl-[1rem] text-lg font-clash font-normal leading-[19.6px] text-darkPrimary">Product</p>
          <p className="pl-[23.5rem] font-clash font-normal text-lg leading-[19.6px] text-darkPrimary">Total</p>
        </div>
        <hr className="bg-lightGray" />
      </div>

      <div className="mx-auto md:mx-4 flex md:flex-row flex-col md:justify-between mt-8 gap-4">
        {/* Cart Products List */}
        <div className="w-full md:w-2/3">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <ItemCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onIncrease={() => increaseQuantity(item.id)}
                    onDecrease={() => decreaseQuantity(item.id)}
                    onRemove={() => removeItemFromCart(item.id)} id={0} description={""} link={""} features={[]} dimensions={{
                        height: "",
                        width: "",
                        depth: ""
                    }}              />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
          )}
        </div>

        {/* Subtotal & Summary */}
        <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md mx-auto md:mx-4">
          <h4 className="font-clash text-darkPrimary text-xl mb-4">Summary</h4>
          <div className="space-y-4">
            {/* List products and their prices */}
            {cartItems.map((item) => (
              <div className="flex justify-between" key={item.id}>
                <p className="font-satoshi text-lg text-darkPrimary">
                  {item.quantity} x {item.name}
                </p>
                <p className="font-satoshi text-lg text-darkPrimary">
                  £{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Total and other details */}
          <div className="flex justify-between mt-6">
            <p className="font-satoshi text-lg text-darkPrimary">Subtotal</p>
            <p className="font-satoshi text-lg text-darkPrimary">£{calculateSubtotal().toFixed(2)}</p>
          </div>

          <div className="flex justify-between lg:items-center mt-6 lg:flex-row flex-col lg:gap-0 gap-4">
            <button onClick={handleOpenModal} className="px-6 py-2  mt-4 bg-[#2A254B] text-white rounded hover:bg-[#1d1a38]">
              Go to checkout
            </button>
            <button className="px-6 py-2 mt-4 bg-[#2A254B] text-white rounded hover:bg-[#1d1a38]">
              <Link href="./ProductListingBlog">Continue Shopping</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default UserCartComponent;