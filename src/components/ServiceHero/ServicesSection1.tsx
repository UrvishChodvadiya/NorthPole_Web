import React, { useState, useEffect } from "react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Wholesale FBA Prep",
    imageUrl:
      "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/S1.jpeg",
      // https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Northpole%2FS1.jpeg?alt=media&token=eb2ed066-849d-4eb6-86d2-845eeaa75899
    imageAlt: "Wholesale FBA Prep service image",
    details: [
      "Warehouse & FBA Prep Services streamline product preparation for Amazon FBA. We manage receiving, labeling, packaging, and shipping, ensuring fast processing and compliance with Amazon’s guidelines for efficient scaling.",
    ],
  },
  {
    title: "Private Labeling",
    imageUrl:
      "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/th+(1).jpeg",
      // https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Northpole%2Fth%20(1).jpeg?alt=media&token=3c0c2c47-70cc-4512-a11e-336094e15f31
    imageAlt: "Private Labeling service image",
    details: [
      "Private labeling allows businesses to sell products made by another company under their own brand, saving on manufacturing costs and offering customization in packaging and design. Common in industries like food, cosmetics, and apparel, it helps businesses expand their product range without production overhead, while strengthening brand identity and appealing to their target market.",
    ],
  },
  {
    title: "Online Arbitrage",
    imageUrl:
      "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/S3.jpg",
      // https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Northpole%2FS3.jpg?alt=media&token=dbe0d4c2-a304-46a6-9eb2-0d572185ff38
    imageAlt: "Online Arbitrage service image",
    details: [
      "Online arbitrage involves purchasing products from online stores at lower prices and reselling them for a profit on platforms like Amazon or eBay. This model capitalizes on price differences across e-commerce websites, allowing entrepreneurs to earn by flipping products. It requires research into market trends, pricing strategies, and inventory management but offers a low-cost entry into e-commerce with minimal investment.",
    ],
  },
  {
    title: "Retail Arbitrage",
    imageUrl:
      "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/S4.jpg",
      // https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Northpole%2FS4.jpg?alt=media&token=320bd2e0-3f59-436b-9a2e-db6553abf5a2
    imageAlt: "Retail Arbitrage service image",
    details: [
      "Retail arbitrage involves buying discounted products from retail stores and reselling them for profit on platforms like Amazon or eBay. It’s a low-cost, scalable business model that relies on effective sourcing, market research, and pricing strategies.",
    ],
  },
  {
    title: "Fulfillment Services & Shipping",
    imageUrl:
      "https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/S5.jpg",
      // https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Northpole%2FS5.jpg?alt=media&token=7298171d-980e-4312-956f-b54f9414f34f
    imageAlt: "Fulfillment Services & Shipping service image",
    details: [
      "Fulfillment services handle the storage, packaging, and shipping of products, ensuring fast and reliable delivery to customers. These services streamline logistics for e-commerce businesses, allowing them to focus on growth while meeting customer expectations. Efficient shipping options, including same-day or international delivery, enhance customer satisfaction and boost sales.",
    ],
  },
];

const ServicesSection1: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="text-center mb-12">
        <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
          OUR SERVICES
        </h2>
        <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
          We Provide The Necessary
          <br />
          Services To You
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="h-48 bg-gray-200 animate-pulse rounded-lg"
              ></div>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageUrl={service.imageUrl}
              imageAlt={service.imageAlt}  
              details={service.details}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesSection1;
