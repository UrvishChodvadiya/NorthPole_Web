import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ServicesSection from "./Services/ServicesSection";
import AboutSection from "./About/AboutSection";
import Testimonials from "./Testimonials/Testimonials";
import WorkProcessSection from "./WorkProces/WorkProcessSection";
import FAQSection from "./FAQ/FAQSection";
import Blog from "./Blog";
import PricingSection from "./Pricing/PricingSection";
import { GetRate } from "./GetRate";
 
export default function LoraicTransportation() {
  const [imageLoaded, setImageLoaded] = useState(false); 

  return (
    <>
      <Helmet>
        <title>NorthPole Gateway - | 3PL & Warehousing Solutions</title>
      </Helmet>

      <div className="relative bg-gradient-to-r from-teal-50 to-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `url('https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/homesecond.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Right Image Section with Skeleton */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative opacity-80"
            >
              <div className="relative">
                {!imageLoaded && (
                  <div className="w-full h-auto bg-gray-300 rounded-lg animate-pulse"></div>
                )}
                <img
                  src="https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/home3.jpg"
                  alt="Cargo Ship"
                  className={`rounded-lg shadow-2xl w-full h-auto opacity-75 ${
                    imageLoaded ? "block" : "hidden"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              {/* Decorative Animated Circles */}
              <div className="absolute -right-8 -bottom-8 w-40 sm:w-48 h-40 sm:h-48 animate-spin-slow">
                <div className="absolute right-0 bottom-0 w-24 sm:w-32 h-24 sm:h-32 border-4 border-orange-500 rounded-tr-3xl"></div>
                <div className="absolute left-0 top-0 w-24 sm:w-32 h-24 sm:h-32 border-4 border-teal-500 rounded-bl-3xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <span className="relative inline-flex items-center group">
                <span className="inline-block bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300">
                  NorthPole Gateway
                </span>
              </span>

              <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white leading-tight">
                Secure, Scalable, and <br />
                Seamless Warehousing Solutions
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white leading-tight">
                Elevate Your Business with Innovative Management Tools Discover
                new horizons and unlock limitless possibilities with NorthPole
                Gateway.
              </h2>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/contactus"
                  className="bg-orange-500 hover:bg-orange-400 hover:text-teal text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center transition-colors"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* main other section */}
      <ServicesSection />
      <AboutSection />
      <Testimonials />
      <WorkProcessSection />
      <FAQSection />
      <Blog />
      <PricingSection />
      <GetRate />
    </>
  );
}
