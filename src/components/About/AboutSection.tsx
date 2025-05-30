import { motion } from "framer-motion";
import { Package, Truck } from "lucide-react";
import AboutFeature from "./AboutFeature";
import AboutStats from "./AboutStats";
import { useState } from "react";

export default function AboutSection() {
  const [, setImageLoaded] = useState({
    img1: false,
    img2: false,
    img3: false,
  });

  const [showImage, setShowImage] = useState({
    img1: false,
    img2: false,
    img3: false,
  });

  const handleImageLoad = (key: string) => {
    setImageLoaded((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setShowImage((prev) => ({ ...prev, [key]: true }));
    }, 1500); 
  };

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ABOUT NORTHPOLE GATEWAY
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-teal-900 mb-8 ps-3">
                <span className="text-orange-500">NorthPole Gateway</span> is
                your
                <br /> strategic partner in modern supply chain solutions.
              </h2>

              <div className="space-y-8 mb-10">
                <AboutFeature
                  icon={<Package className="w-8 h-8" />}
                  title="Cost Optimization"
                  description="Knowledge & Data To Optimize Cost"
                />
                <AboutFeature
                  icon={<Truck className="w-8 h-8" />}
                  title="Expert Warehousing"
                  description="Full-Service Solutions for Your Storage Needs"
                />
              </div>

              <p className="text-gray-600 mb-10 pl-2">
                NorthPole Gateway offers advanced warehousing solutions to
                optimize storage, enhance efficiency, and reduce costs. With
                cutting-edge technology and real-time tracking, we provide
                secure, scalable options to keep your business competitive.
              </p>

              <AboutStats />
            </motion.div>

            {/* Image Section with Skeleton and Delay */}
            <motion.div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative">
                    {/* Skeleton */}
                    {!showImage.img1 && (
                      <div className="w-full h-64 md:h-80 bg-gray-300 rounded-2xl animate-pulse absolute inset-0"></div>
                    )}
                    {/* Image */}
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/DeWatermark.ai_1736144827824.png?alt=media&token=1a3b5a7f-3366-4bf2-a6f9-3ae254cf97cf"
                      alt="Air Transport Solutions"
                      className={`rounded-2xl w-full h-64 md:h-80 object-cover transition-opacity duration-500 ${
                        showImage.img1 ? "opacity-100" : "opacity-0"
                      }`}
                      loading="lazy"
                      onLoad={() => handleImageLoad("img1")}
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-4xl font-bold">01</div>
                      <div className="text-sm">
                        Years of
                        <br />
                        Experience
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    {/* Skeleton */}
                    {!showImage.img2 && (
                      <div className="w-full h-64 md:h-80 bg-gray-300 rounded-2xl animate-pulse absolute inset-0"></div>
                    )}
                    {/* Image */}
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/DeWatermark.ai_1736144205189.png?alt=media&token=9827e277-8108-46d4-a347-eb2a559876d4"
                      className={`rounded-2xl w-full h-64 md:h-80 object-cover transition-opacity duration-500 ${
                        showImage.img2 ? "opacity-100" : "opacity-0"
                      }`}
                      loading="lazy"
                      onLoad={() => handleImageLoad("img2")}
                    />
                  </div>
                </div>

                {/* Large Image */}
                <div className="mt-8 relative">
                  {/* Skeleton */}
                  {!showImage.img3 && (
                    <div className="w-full h-80 md:h-full bg-gray-300 rounded-2xl animate-pulse absolute inset-0"></div>
                  )}
                  {/* Image */}
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/wmremove-transformed.jpeg?alt=media&token=0814e23a-86a4-411c-b671-79c0f4459c3b"
                    alt="NorthPole Gateway Team"
                    className={`rounded-2xl w-full h-80 md:h-full object-cover transition-opacity duration-500 ${
                      showImage.img3 ? "opacity-100" : "opacity-0"
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad("img3")}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
