import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  image: string;
  alt:string;
  onImageLoad: () => void; 
}

export default function ProcessStep({
  number,
  title,
  description,
  image,
  onImageLoad,
}: ProcessStepProps) {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
    onImageLoad();
  };

  return (
    <motion.div
      className="relative pb-2 shadow-lg rounded-xl p-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative overflow-hidden shadow-xl">
        {imageLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50">
            <div className="w-8 h-8 border-4 border-t-4 border-orange-400 border-solid rounded-full animate-spin" />
          </div>
        )}
        <img
          src={image}
          alt={`Image for ${title}`} 
          className="w-full h-64 object-cover transform transition-transform duration-700 hover:scale-110"
          onLoad={handleImageLoad}
          loading="lazy"
        />
        <div className="absolute inset-0" />

        {/* Number Badge */}
        <div className="absolute -left-3 -top-3 w-16 h-16 bg-orange-500 rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-white -rotate-12">{number}</span>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold text-orange-500 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
