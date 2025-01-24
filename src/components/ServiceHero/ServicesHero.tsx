import ServicesSection1 from "./ServicesSection1";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ServicesHero: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>NorthPole Gateway - Services</title>
      </Helmet>
      <section className="relative h-[200px] sm:h-[200px] lg:h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-80"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://northpolewarehouse.s3.ca-central-1.amazonaws.com/IMage/mainsection_img.jpg')",
            filter: "brightness(0.3)"
          }}
          // https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/photo-1600880292203-757bb62b4baf%20(1).jpg?alt=media&token=c8d3af73-ba3b-4fce-832b-5f43ad25ec31
          role="img"
          aria-label="Service background image"
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h1>
          <div className="flex items-center text-gray-300 text-sm">
            <Link
              to="/"
              className="hover:text-white transition-colors"
              aria-label="Go to Home page"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-orange-500">Services</span>
          </div>
        </div>
      </section>

      {/* Card section */}
      <ServicesSection1 />
    </>
  );
};

export default ServicesHero;
