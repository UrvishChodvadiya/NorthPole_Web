import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;

}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative p-6 md:p-8 rounded-xl transition-transform duration-300 overflow-hidden border-l-2 hover:border-0 border-r-2 border-white h-full flex flex-col"
    >
      {/* Default Background (Solid Color) */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Hover Background (Image) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg-icb.png?alt=media&token=c58dd774-3164-41e0-835f-3c4b5569736d')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Icon */}
        <div className="mb-4">
          <div className="inline-block transition-colors duration-300 ">
            {icon}
          </div>
        </div>

        <h3 className="text-md md:text-xl font-bold text-white group-hover:text-orange-500 mb-2">
          {title}
        </h3>

        <p className="text-sm md:text-base text-gray-300 group-hover:text-white mb-6 flex-grow">
          {description}
        </p>

        <div className="flex items-center space-x-2 transition-colors duration-300">
          <span
            className="inline-flex items-center text-white bg-orange-500 p-2 rounded-full group-hover:bg-orange-500 transition-all duration-300"
          >
            <ArrowRight className="h-5 w-5" />
          </span>
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Read More
          </span>
        </div>
      </div>
    </motion.div>
  );
}
