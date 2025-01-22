import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string; 
  details: string[];
}

export function ServiceCard({ title, imageUrl,imageAlt, details }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-[380px] perspective-1000 mx-auto">
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg bg-white">
            <img
              src={imageUrl}
              alt={imageAlt} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 hover:text-orange-500">{title}</h3>
              <button
                onClick={() => setIsFlipped(true)}
                className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors mt-3"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 ">
          <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-white p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-orange-500">
              Service Details
            </h3>
            <ul className="space-y-3 overflow-y-auto h-48 sm:h-64">
              {details.map((detail, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm sm:text-base"
                >
                  <span className="inline-block w-2 h-15 mt-1 mr-2 bg-orange-500 rounded-full" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsFlipped(false)}
              className="mt-10 lg:mt-3 lg:h-5  md:mt-2 md:h-10 inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors "
            >
              Go Back
              <ArrowRight className="ml-2 h-4 w-4 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
