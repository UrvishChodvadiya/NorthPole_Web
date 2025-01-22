import { ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { Helmet } from "react-helmet";

export default function AboutHero() {
  const [content, setContent] = useState<
    "Our Mission" | "Our Vision" | "Our Value"
  >("Our Mission");

  const getContent = useCallback(() => {
    const contentMap = {
      "Our Mission": `At NorthPole Gateway, our mission is to empower your business with exceptional third-party logistics (3PL) and warehousing solutions. We streamline operations, optimize supply chains, and deliver outstanding customer experiences. Our key principles include: Efficiency, Scalability, Customer-Centricity, Sustainability, Innovation.`,
      "Our Vision": `At NorthPole Gateway, our vision is to be a transformative force in the logistics industry. We envision a future where businesses thrive by leveraging our innovative solutions. Key Elements of Our Vision: Innovation, Collaboration, Global Reach, Sustainability, Customer-Centricity.`,
      "Our Value": `At NorthPole Gateway, we are guided by a set of core values that shape our company culture and drive our commitment to excellence. Our values include: Integrity, Excellence, Collaboration, Accountability, Innovation, Sustainability.`
    };

    return contentMap[content];
  }, [content]);

  return (
    <>
      <Helmet>
        <title>NorthPole Gateway - AboutUs</title>
      </Helmet>

      <div className="relative h-[200px] sm:h-[200px] lg:h-[300px] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden font-poppins">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="About Us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <div className="flex items-center text-gray-300 text-sm">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-orange-500">About Us</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-white font-poppins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-orange-500 font-medium text-lg mb-4">
                About Us
              </span>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Choose{" "}
                <span className="text-orange-500">NorthPole Gateway</span> As{" "}
                <br /> Your Trusted Logistics Partner
              </h2>
              <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                Unlock Your Competitive Advantage with NorthPole Gateway's
                Premier Logistics Solutions. Experience a world of seamless
                operations, optimized efficiency, and comprehensive supply chain
                management tailored to your business needs.
              </p>

              {/* Tab Buttons */}
              <div className="flex space-x-6 mb-8">
                {["Our Mission", "Our Vision", "Our Value"].map((tab) => (
                  <button
                    key={tab}
                    className={`text-gray-700 hover:text-orange-500 pb-2 text-lg ${
                      content === tab &&
                      "text-orange-500 border-b-2 border-orange-500"
                    }`}
                    onClick={() =>
                      setContent(
                        tab as "Our Mission" | "Our Vision" | "Our Value"
                      )
                    }
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Dynamic Content */}
              <p className="text-gray-600 text-base mb-8">{getContent()}</p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden aspect-square rounded-xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/service-details-01.jpg?alt=media&token=d0d02953-05c4-4b3c-a0c6-3b8e80d45cb9"
                  alt="Warehouse"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-12 left-12 bg-white p-6 rounded-xl shadow-lg max-w-[80%] z-10 border-b-4 border-orange-500">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <FaAward className="text-orange-500 text-3xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        Best NorthPole Gateway Company
                      </h3>
                      <p className="text-sm text-gray-600">
                        We deliver our services to the very best work, whether
                        as an external provider.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
