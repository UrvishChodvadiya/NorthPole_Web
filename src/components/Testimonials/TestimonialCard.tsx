import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
  image: string;
}

export default function TestimonialCard({ quote, author, rating, image }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-teal-600 rounded-xl p-6 relative"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12">
          <img
            src={image}
            alt={author}
            className="w-full h-full rounded-full border-2 border-orange-400 object-cover"
          />
        </div>
        <div>
          <h3 className="text-white font-semibold">{author}</h3>
        </div>
      </div>
      <p className="text-white mb-4">{quote}</p>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            aria-label={`Rating ${i + 1}`}
            className={`h-5 w-5 ${i < rating ? 'text-orange-400 fill-orange-400' : 'text-teal-400'}`}
          />
        ))}
      </div>
      <div className="absolute right-4 top-4 text-orange-400 text-6xl font-serif">"</div>
    </motion.div>
  );
}
