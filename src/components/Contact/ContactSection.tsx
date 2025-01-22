import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection: React.FC = () => {
  return (
    <div>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-orange-500 font-semibold">Contact us</span>
              <svg
                className="w-5 h-5 text-orange-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Grow Your Business
              <br />
              With <span className="text-orange-500">Our Expertise</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We Recognize the Value of a Comprehensive Approach to Every
              Project, Emphasizing Simplicity for Streamlined Warehousing and
              Supply Chain Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ContactForm />
            </div>
            <div className="lg:col-span-1 space-y-8">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
