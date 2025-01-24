const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-[#073742] p-6 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <svg
              className="w-8 h-8 text-orange-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-label="Location icon"
            >
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                strokeWidth="2"
              />
              <path d="M12 12L12 8" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 12L16 12" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-orange-500 text-lg mb-2">
              Office address
            </h3>
            <address className="text-white">
              70 Lynmont Road, <br /> Toronto ON M9V3X2 Canada
            </address>
          </div>
        </div>
      </div>

      <div className="bg-[#073742] p-6 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <svg
              className="w-8 h-8 text-orange-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-label="Phone icon"
            >
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-orange-500 text-lg mb-2">
              Telephone number
            </h3>
            <p className="text-white">+1 (548) 333-9453</p>
          </div>
        </div>
      </div>

      <div className="bg-[#073742] p-6 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <svg
              className="w-8 h-8 text-orange-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-label="Email icon"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 6l-10 7L2 6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-orange-500 text-lg mb-2">
              Mail address
            </h3>
            <a
              href="mailto:northpolegateway@yahoo.com"
              className="text-white"
            >
              northpolegateway@yahoo.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
