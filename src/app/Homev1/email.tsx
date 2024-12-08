export default function Email(){
    return(
        // <!-- Email Sign-Up Section -->
<div className="w-[1540px] h-[481px] bg-[#F9F9F9] flex-none order-5 flex-grow-0 flex justify-center items-center">
  
  {/* <!-- Container --> */}
  <div className="relative w-[1273px] h-[364px] bg-white flex justify-center items-center">
    
    {/* <!-- Text Content --> */}
    <div className="absolute w-[571px] h-[114px] left-[351px] top-[68px] flex flex-col items-center gap-[16px]">
      
      {/* <!-- Heading --> */}
      <h1 className="font-clash-display text-[36px] leading-[140%] text-center text-[#2A254B]">
        Join the club and get the benefits
      </h1>
      
      {/* <!-- Subheading --> */}
      <p className="font-satoshi text-[16px] leading-[150%] text-center text-[#2A254B]">
        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
      </p>
      
    </div>

    {/* <!-- Text Input & Button --> */}
    <div className="absolute w-[472px] h-[56px] left-[400px] top-[254px] flex">
      
      {/* <!-- Email Input Field --> */}
      <div className="w-[354px] h-[56px] bg-[#F9F9F9] flex items-center pl-[32px]">
        <input type="email" placeholder="your@email.com" 
               className="w-full h-full font-satoshi text-[16px] leading-[22px] text-[#2A254B] opacity-20 bg-transparent outline-none" />
      </div>

      {/* <!-- Submit Button --> */}
      <button className="w-[118px] h-[56px] bg-[#2A254B] flex items-center justify-center">
        <span className="font-satoshi text-[16px] leading-[150%] text-white">Sign Up</span>
      </button>

    </div>
  </div>
</div>

    )
}