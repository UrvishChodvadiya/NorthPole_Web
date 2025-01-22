import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  className?: string;
  isMobile?: boolean;
  isNavMenuOpen?: boolean;
  setIsNavMenuOpen?: (value: boolean) => void;
}

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/aboutus" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact Us", to: "/contactus" },
];

export default function Navigation({
  className = "",
  isMobile = false,
  isNavMenuOpen,
  setIsNavMenuOpen,
}: NavigationProps) {
  const location = useLocation();

  return (
    <nav className={className}>
      {navItems.map((item) => (
        <div key={item.label} className={isMobile ? "w-full" : ""}>
          <Link
            to={item.to}
            className={`
              flex items-center justify-between
              ${
                isMobile
                  ? "px-6 py-3 text-gray-700 hover:bg-gray-50 w-full"
                  : "transition-colors mx-4"
              }
              ${
                location.pathname === item.to
                  ? "text-orange-500 font-semibold"
                  : "text-gray-700 hover:text-orange-500"
              }
            `}
            onClick={() => {
              if (isMobile && setIsNavMenuOpen) {
                setIsNavMenuOpen(!isNavMenuOpen);
              }
            }}
          >
            <span>{item.label}</span>
          </Link>
        </div>
      ))}
    </nav>
  );
}
