import React from "react";
import ContactSection from "./ContactSection";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";

const ContactHero: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>NorthPole Gateway - ContactUs</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[200px] sm:h-[200px] lg:h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-80"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/photo-1600880292203-757bb62b4baf%20(1).jpg?alt=media&token=c8d3af73-ba3b-4fce-832b-5f43ad25ec31')",
            filter: "brightness(0.3)"
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
