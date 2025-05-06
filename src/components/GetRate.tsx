import React from "react";
import { Truck } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const GetRate: React.FC = () => (
  <div
    className="bg-[#115361] bg-opacity-80 py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-12 text-white w-full"
    style={{
      backgroundImage:
        "url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg-ft.webp?alt=media&token=2fa160c1-2710-408d-849a-8dac4e59a643')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Full Content Container */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 lg:mb-10">
        {/* Truck Icon */}
        <Truck className="w-16 h-16 sm:w-12 sm:h-12 text-orange-500" />

        {/* Text Content */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Get the Best Rates for Your Warehousing and Supply Chain Needs.
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg">
            24/7 customer support and expert advice. Achieve up to 70% savings on
            shipping with leading carriers – boost your efficiency.
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center sm:justify-start mb-3">
        <Link
          to="/contactus"
          aria-label="Get the best rate for your warehousing and supply chain needs"
          className="bg-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors flex items-center gap-2"
        >
          Get the Best Rate
          <FaArrowRight className="text-white" />
        </Link>
      </div>

    </div>
  </div>
);
