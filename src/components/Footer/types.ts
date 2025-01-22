export interface LinkSectionProps {
    title: string;
    links: string[] | { label: string; href: string }[]; 
  }
  
  export interface FooterSection {
    industryServed: string[];
    companyInfo: { title: string; link: string }[];
    ourServices: { title: string; link: string }[];
  }