import React from "react";
import { LinkSection } from "./LinkSection";
import { FooterSection } from "./types";

const sections: FooterSection = {
  industryServed: ["E-commerce", "Dropshipping", "Warehousing", "Logistics"],
  companyInfo: [
    { title: "About Us", link: "/aboutus" },
    { title: "Services", link: "/services" },
    { title: "Pricing", link: "/pricing" },
    { title: "Contact Us", link: "/contactus" },
  ],
  ourServices: [
    { title: "Wholesale FBA Prep", link: "/services" },
    { title: "Private Labeling", link: "/services" },
    { title: "Online Arbitrage", link: "/services" },
    { title: "Retail Arbitrage", link: "/services" },
    {
      title: "Fulfillment Services & Shipping",
      link: "/services"
    }
  ]
};

export const FooterLinks: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
    <LinkSection
      title="Industry Served"
      links={sections.industryServed.map((industry) => industry)}
    />
    <LinkSection
      title="Company Info"
      links={sections.companyInfo.map((info) => ({
        label: info.title, // Use the 'title' property here
        href: info.link    // Use the 'link' property here
      }))}
    />
    <LinkSection
      title="Our Services"
      links={sections.ourServices.map((service) => ({
        label: service.title,
        href: service.link
      }))}
    />
  </div>
);
