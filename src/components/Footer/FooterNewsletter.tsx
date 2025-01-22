import { useState } from "react";
import { Globe} from "lucide-react";
import { IoSend } from "react-icons/io5";
import emailjs from "emailjs-com";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    // EmailJS configuration
    const serviceID = "service_4sl1kt3";
    const templateID = "template_9jtuqah";
    const userID = "sfzP8dARsTfHsyPE9";

    emailjs.send(serviceID, templateID, { email }, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessage("Thank you for subscribing!");
        setEmail("");
        setLoading(false);

        // clear show message
        setTimeout(() => {
          setMessage("");
        }, 5000);
      },
      (error) => {
        console.error("FAILED...", error);
        setMessage("Something went wrong. Please try again.");
        setLoading(false);
      }
    );
  };

  return (
    <div
      className="bg-teal-900 px-7 py-2 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between bg-cover bg-center mb-4"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg-ft.webp?alt=media&token=2fa160c1-2710-408d-849a-8dac4e59a643')"
      }}
    >
      <div className="mb-6 md:mb-0 w-full md:w-auto">
        <Globe className="h-8 w-8 text-orange-500 mt-2" aria-hidden="true" />

        <div>
          <h2 className="text-2xl font-bold text-white mt-3">Newsletter</h2>
          <p className="text-teal-100 mt-2">
            Subscribe to our newsletter to get our latest updates and news.
          </p>
        </div>

        {/* Email Subscription Form */}
        <form
          className="flex items-center gap-2 bg-gray-200 px-4 py-1 mt-6 rounded-lg"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-transparent text-orange-500 placeholder-gray-500 focus:outline-none w-full py-1"
            required
            aria-label="Enter your email address"
          />
          <button
            type="submit"
            className="py-1 px-2 rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors"
            aria-label="Subscribe to newsletter"
            disabled={loading} 
          >
            {loading ? (
              <span>Loading...</span>
            ) : (
              <IoSend className="text-white" aria-hidden="true" />
            )}
          </button>
        </form>

        {/* Feedback Message */}
        {message && <p className="text-teal-100 mt-4 text-sm">{message}</p>}
      </div>
    </div>
  );
}
