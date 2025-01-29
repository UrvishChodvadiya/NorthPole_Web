import { motion } from 'framer-motion';
import PricingFeature from './PricingFeature';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ title, price, features, isPopular }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      role="card"
      aria-labelledby={`pricing-card-${title}`}
      className={`
        relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-shadow
        hover:shadow-2xl ${isPopular ? 'border-2 border-orange-500' : ''}
        h-full flex flex-col justify-between
      `}
    >
      {isPopular && (
        <div className="absolute -right-12 top-8 rotate-45 bg-orange-500 py-2 px-12" aria-live="polite">
          <span className="text-sm font-semibold text-white">Most Popular</span>
        </div>
      )}

      <div className="mb-8">
        <h3 id={`pricing-card-${title}`} className="text-xl font-bold text-teal-900">{title}</h3>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-5xl font-bold text-center text-orange-500">${price}</span>
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <PricingFeature key={index} text={feature} />
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-pressed="false"
        className={`
          w-full rounded-xl py-4 font-semibold transition-colors
          ${isPopular 
            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700' 
            : 'bg-teal-50 text-teal-900 hover:text-white hover:bg-orange-600'
          }
        `}
      >
        <Link to ='/contactus'>Choose This</Link>
      </motion.button>
    </motion.div>
  );
}
