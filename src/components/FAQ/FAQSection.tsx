import { motion } from "framer-motion";
import FAQAccordion from "./FAQAccordion";

export default function FAQSection() {
  return (
    <section
      className="relative w-full py-15 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Northpole%2Fh13.jpg?alt=media&token=d63a09cf-e805-45bd-a0d9-69e3de14f7ef')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      aria-label="Frequently Asked Questions Section"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 mt-10 py-5 lg:px-8 flex justify-center items-center">
        <div className="grid lg:grid-cols-2 items-start max-w-6xl w-full">
          <motion.div>
            <div className="max-w-80 relative lg:ml-12 sm:ml-12 bg-orange-500 text-white px-2 py-2 mt-4 rounded-full text-sm text-center font-semibold mb-6">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-3xl md:text-5xl sm:pl-10 font-bold lg:pl-10 text-white mb-5 text-center md:text-left">
              Do you have
              <br />
              Some Common Questions?
            </h2>

            <p className="text-gray-200 text-lg mb-5 sm:pl-12 lg:text-left">
              Some frequently asked questions about
              <br />
              NorthPole Gateway's 3PL services.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="mt-8 lg:mt-0">
            <FAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
