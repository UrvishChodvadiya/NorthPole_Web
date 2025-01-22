import { motion } from 'framer-motion';

interface TransportModeProps {
  image: string;
  alt: string;
}

export default function TransportMode({ image, alt }: TransportModeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-0 pb-[100%] md:object-contain md:w-[calc(100vw-5vw)] md:h-96 lg:w-96"
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
      />
    </motion.div>
  );
}
