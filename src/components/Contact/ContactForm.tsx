import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    phone: "",
    service: [] as string[],
    message: ""
  });

  const [errors, setErrors] = useState({
    from_name: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ""
    }));

    if (name === "from_name" && !/^[a-zA-Z\s]*$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        from_name: "Name can only contain letters."
      }));
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhoneChange = (value: string | undefined) => {
    if (value) {
      const formattedNumber = formatPhoneNumberIntl(value);
      setFormData({
        ...formData,
        phone: formattedNumber
      });
    } else {
      setFormData({
        ...formData,
        phone: ""
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message field cannot be blank."
      }));
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        "service_k2ubbzh",  //services id for north pole only email
        "template_fd07zur",
        { ...formData, service: formData.service.join(", ") },
        "oh27zx6byWADNK1n7"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            from_name: "",
            email: "",
            phone: "",
            service: [],
            message: ""
          });
          setSubmissionStatus("Your message has been sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error);
          setSubmissionStatus("Failed to send your message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form
      className="space-y-6 bg-[#073742] p-8 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex justify-between text-sm mb-2">
            <span className="text-orange-500">Name</span>
          </label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${
              errors.from_name ? "border-red-500" : "border-gray-300"
            } bg-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-lg`}
            placeholder="First and Last Name"
            required
          />
          {errors.from_name && (
            <p className="text-red-500 text-sm mt-1">{errors.from_name}</p>
          )}
        </div>
        <div>
          <label className="flex justify-between text-sm mb-2">
            <span className="text-orange-500">Email address</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-lg"
            placeholder="yourcompany@domain.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex justify-between text-sm mb-2">
            <span className="text-orange-500">Phone</span>
          </label>
          <PhoneInput
            international
            defaultCountry="IN"
            value={formData.phone || ""}
            onChange={handlePhoneChange}
            className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-lg"
            placeholder="Enter phone number"
            maxLength={15}
            required
          />
        </div>
        <div className="relative">
          <label className="flex justify-between text-sm mb-2">
            <span className="text-orange-500">Services</span>
          </label>
          <div className="relative">
            <div
              className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 cursor-pointer shadow-lg"
              onClick={handleIconClick}
            >
              <span>
                {formData.service.length > 0
                  ? formData.service.join(", ")
                  : "Select Services"}
              </span>
              <div
                className="absolute top-1/2 right-4 transform -translate-y-1/2"
                onClick={handleIconClick}
              >
                {isOpen ? (
                  <IoIosArrowUp className="text-gray-500" />
                ) : (
                  <IoIosArrowDown className="text-gray-500" />
                )}
              </div>
            </div>
            {isOpen && (
              <div className="absolute w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10">
                {[
                  "Wholesale FBA Prep",
                  "Private Labeling",
                  "Online Arbitrage",
                  "Retail Arbitrage",
                  "Fulfillment Services & Shipping"
                ].map((service) => (
                  <div
                    key={service}
                    className={`p-3 cursor-pointer hover:bg-gray-100 ${
                      formData.service.includes(service) ? "bg-gray-200" : ""
                    }`}
                    onClick={() => {
                      const updatedServices = formData.service.includes(service)
                        ? formData.service.filter((s) => s !== service)
                        : [...formData.service, service];
                      setFormData({ ...formData, service: updatedServices });
                    }}
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm mb-2 text-orange-500">
          Your message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } bg-white rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-lg resize-none`}
          placeholder="Type message*"
          required
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {submissionStatus && (
        <div className="mt-4 text-center text-lg text-green-500">
          {submissionStatus}
        </div>
      )}

      <button
        type="submit"
        className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
