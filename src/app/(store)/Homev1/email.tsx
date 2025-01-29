export default function Email() {
  return (
    // <!-- Email Sign-Up Section -->
    (<div className="w-full h-auto bg-[#F9F9F9] flex justify-center items-center py-10 px-4">
      {/* <!-- Container --> */}
      <div className="w-full max-w-[1273px] bg-white flex flex-col justify-center items-center p-6 md:p-10">
        {/* <!-- Text Content --> */}
        <div className="w-full max-w-[571px] text-center mb-6">
          {/* <!-- Heading --> */}
          <h1 className="font-clash-display text-[24px] md:text-[36px] leading-[140%] text-[#2A254B]">
            Join the club and get the benefits
          </h1>
          {/* <!-- Subheading --> */}
          <p className="font-satoshi text-[14px] md:text-[16px] leading-[150%] text-[#2A254B] mt-4">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
        </div>

        {/* <!-- Text Input & Button --> */}
        <div className="w-full max-w-[472px] flex flex-col sm:flex-row gap-4">
          {/* <!-- Email Input Field --> */}
          <div className="flex-1 bg-[#F9F9F9] flex items-center px-4 py-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-transparent font-satoshi text-[14px] md:text-[16px] leading-[22px] text-[#2A254B] placeholder-opacity-50 outline-none"
            />
          </div>

          {/* <!-- Submit Button --> */}
          <button className="w-full sm:w-auto px-6 py-2 bg-[#2A254B] text-white font-satoshi text-[14px] md:text-[16px] leading-[150%] flex items-center justify-center">
            Sign Up
          </button>
        </div>
      </div>
    </div>)
  );
}
