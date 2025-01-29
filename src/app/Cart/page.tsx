// "use client";
// import Image from "next/image";
// import Navbar from "@/app/(store)/component/header"
// import Footer from "@/app/(store)/component/footer";
// import { products } from "@/app/Data";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "./redux/store";
// import { CartItem, remove } from "./redux/cartslice";
// import ItemCard from "../cart/productCard"
// import dynamic from "next/dynamic";
// const UserCartComponent = () => {
//   // const { data: session } = useSession(); // Get session data
//  const [cartItems, setCartItems] = useState<any[]>([]);
//  const [isModalOpen, setIsModalOpen] = useState(false);


//  useEffect(() => {
//    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//    setCartItems(cart);
//  }, []);

//  const removeItemFromCart = (productId: number) => {
//    const updatedCart = cartItems.filter((item) => item.id !== productId);
//    setCartItems(updatedCart);
//    localStorage.setItem("cart", JSON.stringify(updatedCart));
//  };

//  const decreaseQuantity = (productId: number) => {
//    const updatedCart = cartItems.map((item) => {
//      if (item.id === productId && item.quantity > 1) {
//        return { ...item, quantity: item.quantity - 1 };
//      }
//      return item;
//    });
//    setCartItems(updatedCart);
//    localStorage.setItem("cart", JSON.stringify(updatedCart));
//  };

//  const increaseQuantity = (productId: number) => {
//    const updatedCart = cartItems.map((item) => {
//      if (item.id === productId) {
//        return { ...item, quantity: item.quantity + 1 };
//      }
//      return item;
//    });
//    setCartItems(updatedCart);
//    localStorage.setItem("cart", JSON.stringify(updatedCart));
//  };

//  const calculateSubtotal = () =>
//    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

// const Cartpage : React.FC = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state: RootState) => state.cart.items);
//   const [quantity, setQuantity] = useState<number>(1); // Default quantity set to 1
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);
  
//   const handleRemove = (id: number | string) => {
//     console.log("Removing item with ID:", id);
//     dispatch(remove(id)); // Redux action with proper id
//   };

//   // Calculate Total Price
//   const calculateTotal = cartItems.reduce(
//     (total, item) => total + parseFloat(item.price.toString()),
//     0
//   );
//   const increase = () => setQuantity(quantity + 1);
//   const decrease = () => {
//     if (quantity > 1) setQuantity(quantity - 1); // Prevent going below 1
//   };
//   const handleCheckout = () => {
//     console.log("Proceeding to Checkout...");
//     alert(`Total: $${calculateTotal.toFixed(2)}. Proceeding to checkout!`);
//     // Redirect to checkout page if required
//     // router.push("/checkout");
//   };

//   if (!isMounted) {
//     return null; // Prevent server-side rendering issues
//   }
// // export default function Cart() {
 
//   // const calculateTotal = () =>
//   //   products.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div>
//       <Navbar />
//       {/* Shopping Basket Container */}
//       <div className="w-full bg-[#F9F9F9] py-8">
//         {/* Shopping Cart Title */}
//         <div className="max-w-[1440px] mx-auto px-8">
//           <h1 className="text-2xl font-['Clash Display'] text-[#2A254B]">
//             Your shopping cart
//           </h1>

//           {/* Table Headers */}
//           <div className="grid grid-cols-3 mt-6 pb-2 border-b border-[#EBE8F4]">
//             <h6 className="text-sm text-[#2A254B]">Product</h6>
//             <h6 className="text-sm text-[#2A254B] text-center">Quantity</h6>
//             <h6 className="text-sm text-[#2A254B] text-right">Total</h6>
//           </div>
             
//               {/* Product Details */}
//               <div>
//               {cartItems.length > 0 ? (
//              <>
//              {/* Cart Items */}
//              {cartItems.map((item: CartItem) => (
//                <div
//                  key={item._id} className="grid grid-cols-3 items-center py-6 border-b border-[#EBE8F4]"
//                  >
//                   {/* Product detals */}
//               <div className="flex items-center gap-4">
             
//                 <Image src={item.image} alt={item.title} width={133} height={164} />
//                 <div>
//                   <h4 className="text-lg text-[#2A254B] font-['Clash Display']">
//                     {item.title}
//                   </h4>
//                   <p className="text-sm text-[#2A254B] font-['Satoshi'] leading-[150%]">
//                     {item.description}
//                   </p>
//                   <span className="text-md text-[#2A254B] font-['Satoshi']">
//                     £{item.price}
//                   </span>
//                 </div>
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors text-sm md:text-base"
//                   onClick={() => handleRemove(item._id)}
//                 >
//                   Remove
//                 </button>
//               </div>

//               {/* Quantity Controls */}
//               {/* <div className="flex items-center justify-center">
//                 <button  onClick={increase} className="flex items-center bg-[#F9F9F9] px-4 py-2 gap-4">
//                 <p className="text-xl md:pr-0 pr-[4rem] py-1.5">+</p>
//                 </button>
//               </div> */}

// <div className="relative lg:top-5 mt-4 lg:mt-4 md:mt-10 flex items-center lg:justify-center space-x-4 md:space-x-0 bg-lightGray md:w-32 w-full quantity-btn">
//                 <button
//                   onClick={decrease}
//                   className="bg-lightGray text-darkPrimary hover:bg-darkPrimary hover:text-white p-2 rounded w-full md:w-[50px] "
//                 >
//                   <p className="text-xl md:pl-0 pl-[4rem] pb-3">_</p>
//                 </button>

//                 <div className="text-xl text-darkPrimary px-2">{quantity}</div>

//                 <button
//                   onClick={increase}
//                   className="bg-lightGray text-darkPrimary hover:bg-darkPrimary hover:text-white p-2 rounded w-full md:w-[50px]"
//                 >
//                   <p className="text-xl md:pr-0 pr-[4rem] py-1.5">+</p>
//                 </button>
//               </div>
//               {/* Total Price */}
//               <div className="text-right text-[#2A254B] font-['Satoshi']">
             
//               </div>
//             </div>
//           ))}

//           {/* Price Summary Section */}
//           <div className="mt-8 flex flex-col items-end gap-4">
//             <div className="flex justify-between items-center gap-8">
//               <span className="text-lg font-['Clash Display'] text-[#4E4D93]">
//                 Subtotal
//               </span>
//               <span className="text-xl font-['Clash Display'] text-[#2A254B]">
//               $ {calculateTotal.toFixed(2)}
//               </span>
//             </div>
//             <p className="text-sm text-[#4E4D93] font-['Satoshi']">
//               Taxes and shipping are calculated at checkout.
//             </p>
//             <button onClick={handleCheckout} className="bg-[#2A254B] text-white px-6 py-3 rounded-md">
//               Checkout
//             </button>
//           </div>
//           </>
//           ) : (
//             // Empty Cart Message
//             <div className="text-center text-gray-600">
//               <h4 className="text-xl md:text-2xl font-semibold">
//                 Your cart is empty!
//               </h4>
//               <p className="mt-2">Add items to your cart to see them here.</p>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//     </div>
//   );
// }
// }
// export default UserCartComponent 
//     ;
"use client";
import { useEffect, useState } from "react";
import ItemCard from "./productCard";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "../(store)/component/header";
//import { useSession, signIn } from "next-auth/react";


const UserCartComponent = () => {
   // const { data: session } = useSession(); // Get session data
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
   /* if (!session) {
      // Redirect to the sign-in page
      signIn();
      return;
    } */
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
        {/* Left side: Products List */}
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

        {/* Right side: Subtotal & Summary */}
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
          <div className="flex justify-between">
            <p className="font-satoshi text-lg text-darkPrimary">Taxes & Shipping</p>
            <p className="font-satoshi text-lg text-green-500">(Free)</p>
          </div>

          <div className="flex justify-between lg:items-center mt-6 lg:flex-row flex-col lg:gap-0 gap-4">
            <button onClick={handleOpenModal} className="px-6 py-2 bg-darkPrimary text-white rounded-md hover:bg-navbarColor">
              Go to checkout
            </button>
            <button className="px-6 py-2 bg-darkPrimary text-white rounded-md hover:bg-navbarColor">
              <Link href="/products">Continue Shopping</Link>
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