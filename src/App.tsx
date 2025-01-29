import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import { Footer } from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const AboutHero = lazy(() => import("./components/About/AboutHero"));
const PricingHero = lazy(() => import("./components/Pricing/PricingHero"));
const ServicesHero = lazy(() => import("./components/ServiceHero/ServicesHero"));
const ContactHero = lazy(() => import("./components/Contact/ContactHero"));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Suspense fallback={<Loader />}>
            {/* for any footer link press to show page first section */}
            <ScrollToTop/>  
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/aboutus" element={<AboutHero />} />
                <Route path="/services" element={<ServicesHero />} />
                <Route path="/pricing" element={<PricingHero />} />
                <Route path="/contactus" element={<ContactHero />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
