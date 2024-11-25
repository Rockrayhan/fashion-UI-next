import Image from "next/image";
import React from "react";

const BigDealBanner = () => {
  return (
    <div style={{ height: "450px" }}>
      {/* Static Banner */}
      <div className="bg-accent grid grid-cols-1 lg:grid-cols-3">
        {/* Left Grid: Vertically Centered */}
        <div className="col-span-2 flex flex-col justify-center py-10 px-6">
          <h6 className="italic font-bold text-primary">Big Deals</h6>
          <h1 className="text-3xl font-semibold mb-4">
            <span className="text-primary">30%</span> Off for New Customers
          </h1>
          <div className="flex">
            <button className="btn btn-primary text-white rounded-2xl">
              Shop Now
            </button>
            <button className="btn btn-primary text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Grid: Image */}
        <div className="col-span-1 p-8">
          <Image
            src="/assets/images/new_customers2.png"
            width={427}
            height={450}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default BigDealBanner;
