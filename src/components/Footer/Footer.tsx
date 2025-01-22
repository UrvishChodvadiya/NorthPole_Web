import React from 'react';
import { FooterLinks } from './FooterLinks';
import { ContactInfo } from './ContactInfo';
import { BottomBar } from './BottomBar';
import FooterNewsletter from './FooterNewsletter';

export const Footer: React.FC = () => (
  <footer 
  className="relative bg-cover bg-center bg-no-repeat bg-[#073742]" 
  // style={{
  //   backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg2-ft.webp?alt=media&token=642027db-1f14-423b-97ba-26790d03bdbd')`
  // }}
>
    <div className="container mx-auto px-4 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <FooterNewsletter />
        <div className="lg:col-span-3">
          <FooterLinks />
        </div>
      </div>
      <ContactInfo />
      <BottomBar />
    </div>
  </footer>
);
