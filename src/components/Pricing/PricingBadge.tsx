import { motion } from 'framer-motion';

interface PricingBadgeProps {
  text: string;
}

export default function PricingBadge({ text }: PricingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
      role="status"
      aria-live="polite"
    >
      <span className="text-sm font-semibold text-white" aria-label={text}>
        {text}
      </span>
    </motion.div>
  );
}
