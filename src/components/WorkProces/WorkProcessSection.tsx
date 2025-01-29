import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Step 1:  Strategic Storage Solutions",
    description:
      "At NorthPole Gateway, we begin by assessing your storage needs to create a customized solution. Our flexible, secure storage options and advanced technology optimize space, inventory management, and accessibility.",
    image:
      "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/WorkP1.webp",
    alt: "Strategic Storage Solutions",
  },
  {
    number: 2,
    title: "Step 2: Precision Order Fulfillment",
    description:
      "Once storage is optimized, we move to the order preparation stage. At NorthPole Gateway, we ensure accurate picking, packing, and labeling of your products, using efficient processes and real-time tracking to guarantee timely and error-free order fulfillment.",
    image:
      "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/WorkP2.webp",
    alt: "Precision Order Fulfillment",
  },
  {
    number: 3,
    title: "Step 3: Reliable Distribution Network",
    description:
      "After preparing the order, we focus on timely and secure shipping. NorthPole Gateway ensures fast, reliable delivery through trusted logistics partners, tracking shipments every step of the way to ensure your products reach their destination on time.",
    image:
      "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/WorkP3.webp",
    alt: "Reliable Distribution Network",
  },
];

export default function WorkProcessSection() {
  const [imageLoading] = useState<boolean[]>(
    new Array(steps.length).fill(true)
  );


  return (
    <section
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
      style={{
        backgroundImage:
          "url('https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/bg_workprocess.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold ">
            WorkProcess
          </span>

          <h1 className="text-4xl sm:text-3xl lg:text-4xl font-bold text-gray-900 sm:text-4xl text-lg py-2 leading-tight sm:leading-snug md:leading-normal mt-2">
            Optimized Warehousing Solutions
            <br />
            for Efficient Storage
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            NorthPole Gateway offers expert warehousing services, providing the
            knowledge and tools to optimize storage and inventory management for
            your business.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Lines */}
          <svg
            className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 hidden lg:block"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,32 C250,-32 750,96 1000,32"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B2C" />
                <stop offset="100%" stopColor="#0D9488" />
              </linearGradient>
            </defs>
          </svg>

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 ">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center shadow-lg px-2 pb-2 rounded-xl">
                <div className="relative w-full h-64 ">
                  {/* Skeleton Loader */}
                  {imageLoading[index] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
                  )}
                  {/* Image */}
                  <img
                    src={step.image}
                    alt={step.alt}
                    className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                      imageLoading[index] ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={(e) => {
                      // Remove the skeleton loader after image is loaded
                      (e.target as HTMLImageElement).style.opacity = "1";
                      (e.target as HTMLImageElement).parentElement!.querySelector(
                        ".animate-pulse"
                      )!.remove();
                    }}
                    style={{ opacity: 0 }}
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 ">
                  <h3 className="lg:text-xl md:text-md text-sm font-bold text-orange-500">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-start pt-3">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
    </section>
  );
}
