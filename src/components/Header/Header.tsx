import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <h1>
            <Logo />
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex" aria-label="Main Navigation">
            <Navigation className="hidden lg:flex" />
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900"
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav
          className="lg:hidden bg-white border-t border-gray-100"
          aria-label="Mobile Navigation"
        >
          <Navigation
            className="flex flex-col py-4"
            isMobile
          />
        </nav>
      )}
    </header>
  );
}
