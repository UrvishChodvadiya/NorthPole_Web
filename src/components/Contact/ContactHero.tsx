import React, { useState, useEffect, useRef } from "react";
import ContactSection from "./ContactSection";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";

const ContactHero: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>NorthPole Gateway - ContactUs</title>
      </Helmet>

      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative h-[200px] sm:h-[200px] lg:h-[300px] flex items-center justify-center text-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-80"></div>

        {/* Lazy Loading Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: isInView
              ? "url('https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/mainsection_img.jpg')"
              : "none", // Set background image only when in view
            filter: "brightness(0.3)",
            transition: "background-image 0.5s ease-in-out", // Smooth transition
          }}
        ></div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact</h1>
          <div className="flex items-center text-gray-300 text-sm">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-orange-500">Contact</span>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="container mx-auto px-4 py-12">
        <ContactSection />
      </section>
    </>
  );
};

export default ContactHero;
