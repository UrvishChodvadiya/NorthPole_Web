import { FC } from 'react';

const features = [
  {
    title: "Complete Logistics",
    description: "We deliver the knowledge & opportunity to optimize every mile on every lane.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logistics Icon"
      >
        <path
          d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12L12 21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12L20 7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12L4 7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Shipping Worldwide",
    description: "We deliver comprehensive logistics solutions across the globe with reliability and precision.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Shipping Worldwide Icon"
      >
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.6 9H20.4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.6 15H20.4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Safe Transportation",
    description: "Ensuring the highest standards of safety and security for all your transportation needs.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Safe Transportation Icon"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6L12 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10L12 14L16 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const WhyChooseUs: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-4">
            <span className="text-orange-600 font-medium text-sm">WHY CHOOSE US</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why we are considered the best
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            in transportation business
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              className={`p-8 rounded-2xl transition-all duration-300 hover:shadow-xl ${
                index === 0 ? 'bg-orange-500 text-white' : 'bg-white hover:bg-orange-500 hover:text-white'
              }`}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p
                className={`text-base ${
                  index === 0 ? 'text-white/90' : 'text-gray-600 group-hover:text-white/90'
                }`}
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
