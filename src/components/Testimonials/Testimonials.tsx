import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TransportMode from "./TransportMode";
import TestimonialCard from "./TestimonialCard";

const transportModes = [
  {
    image:
    "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/earth-Photoroom+(1).png",
      // "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/testimony_map.png",
      // https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Northpole%2FDeWatermark.ai_1737094165660.png?alt=media&token=12dc9708-e0a5-40bc-bd32-1b8a1ddd1c47
    alt: "Road Transport"
  }
];

const testimonials = [
  {
    quote:
      "I saved over 50% using LogiTrans over my previous provider. The customer support staff was very helpful. I will definitely be using LogiTrans for all my future shipments. Thank you!!!",
    author: "Rachel Ballinger",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote:
      "Outstanding service and reliability. LogiTrans has transformed our supply chain efficiency.",
    author: "Michael Chen",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="py-24 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/bg-h6.jpg')"
          // https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg-h6.jpg?alt=media&token=94136f7f-13dd-40e3-a836-757827503293
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Transport Modes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {transportModes.map((mode, index) => (
              <TransportMode key={index} {...mode} />
            ))}
          </div>

          {/* Testimonials */}
          <div>
            <div className="mb-8">
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                TESTIMONIAL
              </span>
              <h1 className="text-3xl font-bold text-white mt-4 mb-2">
                What our clients say about our service
              </h1>
              <p className="text-teal-100">
                Warehousing delivers the knowledge & opportunity to optimize every
                shipment.
              </p>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <TestimonialCard
                  key={currentIndex}
                  {...testimonials[currentIndex]}
                />
              </AnimatePresence>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={prev}
                  type="button"
                  aria-label="Previous Testimonial"
                  title="Previous"
                  className="p-2 rounded-full bg-orange-500 hover:bg-orange-400 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={next}
                  type="button"
                  aria-label="Next Testimonial"
                  title="Next"
                  className="p-2 rounded-full bg-orange-500 hover:bg-orange-400 transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
