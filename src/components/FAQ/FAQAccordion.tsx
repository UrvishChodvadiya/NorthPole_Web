import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="mb-4">
      {/* Question Button */}
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${
          isOpen ? "bg-orange-500 text-white" : "bg-white text-teal-900"
        }`}
      >
        <span className="text-base lg:text-lg font-semibold text-left overflow-clip ">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <Plus
            className={`w-6 h-6 ${isOpen ? "text-white" : "text-orange-500"}`}
          />
        </motion.div>
      </button>

      {/* Answer Section */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden "
          >
            <div className="p-6 text-gray-600 bg-white rounded-2xl mt-2 ">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is 3PL?",
      answer:
        "3PL stands for Third-Party Logistics. It refers to outsourcing logistics and supply chain management activities to a specialized third-party provider. These services can include warehousing, transportation, order fulfillment, inventory management, and more."
    },
    {
      question: "Why should I consider using a 3PL service?",
      answer:
        "There are several reasons to consider using a 3PL service. It allows you to focus on your core business activities while leaving logistics operations to experts. It can save you time, reduce costs, provide access to advanced technologies and infrastructure, and improve overall efficiency and customer satisfaction."
    },
    {
      question: "How do I choose the right 3PL provider for my business?",
      answer:
        "When choosing a 3PL provider, consider factors such as their experience and expertise in your industry, their range of services, their technology capabilities, their geographic reach, their reputation, and their ability to scale and adapt to your business needs. It's important to evaluate their track record, customer reviews, and ask for references."
    },
    {
      question:
        "Can a 3PL provider integrate with my existing systems and platforms",
      answer:
        "Yes, a reputable 3PL provider should have the ability to integrate with your existing systems and platforms. They should be able to connect with your order management system, inventory management system, and other relevant software to facilitate seamless data exchange and improve operational efficiency."
    }
  ];

  return (
    <div className="space-y-4 w-11/12 mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="w-full ">
          <FAQItem
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        </div>
      ))}
    </div>
  );
}
