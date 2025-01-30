import { Mail, Phone, MapPin } from "lucide-react";
import { ContactItem } from "./ContactItem";

export const ContactInfo: React.FC = () => (
  <div
    className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-3 border-t border-gray-700 rounded-lg"
    style={{
      backgroundColor: "#115361",
      opacity: 0.85,
      borderBottom: "2px solid #f97316",
    }}
  >
    <ContactItem
      Icon={Mail}
      title="EMAIL"
      content={
        <a href="mailto:northpolegateway@yahoo.com" className="text-white hover:text-orange-500">
          northpolegateway@yahoo.com
        </a>
      }
    />
    <ContactItem
      Icon={Phone}
      title="SUPPORT 24/7"
      content={
        <a href="tel:+15483339453" className="text-white hover:text-orange-500">
          +1 (548) 333-9453
        </a>
      }
    />
    <ContactItem
      Icon={MapPin}
      title="HEADQUARTER"
      content="70 Lynmont Road, Toronto ON M9V3X2 Canada"
    />
  </div>
);
