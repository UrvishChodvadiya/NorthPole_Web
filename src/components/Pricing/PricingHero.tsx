import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PricingSection from "./PricingSection";
import { Helmet } from "react-helmet";

function PricingHero() {
  return (
    <>
      <Helmet>
        <title>NorthPole Gateway - Pricing</title>
      </Helmet>

      <div>
        {/* First section */}
        <div className="relative h-[200px] sm:h-[200px] lg:h-[300px] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
          <div className="absolute inset-0">
          {/* https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 */}
            <img
              src="https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/pricing.jpg"
              alt="Scenic view of a city skyline with a sunset, representing pricing plans"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pricing
            </h1>
            <div
              className="flex items-center text-gray-300 text-sm"
              aria-label="Breadcrumb navigation"
            >
              <Link
                to="/"
                className="hover:text-white transition-colors"
                aria-label="Go to homepage"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-orange-500">Pricing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second section */}
      <PricingSection />
    </>
  );
}

export default PricingHero;
