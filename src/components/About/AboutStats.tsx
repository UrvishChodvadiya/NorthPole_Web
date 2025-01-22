import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [

  { value: 150, label: "+", suffix: "Successful Logistics" },
];

function Counter({ endValue }: { endValue: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2; 
    const increment = Math.ceil(endValue / (duration * 60)); 

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        current = endValue;
        clearInterval(timer);
      }
      setCount(current);
    }, 1000 / 60); 

    return () => clearInterval(timer);
  }, [endValue]);

  return <>{count}</>;
}

export default function AboutStats() {
  return (
    <section className="mt-8">
      <h3 className="sr-only">Company Statistics</h3>
      <div className="grid grid-cols-2 gap-6 sm:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col items-start"
          >
            <div className="text-4xl font-bold text-teal-900 mb-2">
              <Counter endValue={stat.value} />
              <span className="ms-2">{stat.label}</span>
            </div>
            <div className="text-gray-600">{stat.suffix}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
