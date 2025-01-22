import { Shield, Clock, Truck } from 'lucide-react';
import AboutFeature from './AboutFeature';

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Reliability',
    description: 'We deliver on our promises with consistency and precision.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Efficiency',
    description: 'Optimized solutions that save time and reduce costs.',
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: 'Innovation',
    description: 'Leveraging technology for smarter logistics solutions.',
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AboutFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
