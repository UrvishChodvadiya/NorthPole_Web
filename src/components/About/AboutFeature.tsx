import React from 'react';

interface AboutFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutFeature: React.FC<AboutFeatureProps> = React.memo(({ icon, title, description }) => {
  return (
    <div className="flex items-center space-x-4">
      <div
        className="w-16 h-16 rounded-full border-2 border-teal-100 flex items-center justify-center bg-teal-50 text-teal-600"
        aria-label={`Icon for ${title}`}
      >
        {icon || <span>?</span>}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-teal-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
});

export default AboutFeature;
