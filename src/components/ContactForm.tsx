interface ContactFormProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  boxcolor: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  boxcolor,
}) => {
  return (
    <div className={`py-16 flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 md:py-36 ${backgroundcolor}`}>
      <div className={`w-full max-w-lg p-8 shadow-2xl rounded-lg border border-orange-800 ${boxcolor}`}>
        <h1 className={`text-2xl font-bold text-center sm:text-3xl ${headingcolor}`}>
          Any Suggestion
        </h1>
        <p className={`mt-4 font-medium text-sm text-center mb-10 sm:text-base ${textcolor}`}>
          We would love to hear from you. Please fill out the form below, and we will get back to you as soon as possible.
        </p>
        <form>
          <div className="mb-6">
            <label htmlFor="name" className={`block text-sm font-medium ${textcolor}`}>
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="w-full mt-2 p-3 border border-red-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className={`block text-sm font-medium ${textcolor}`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full mt-2 p-3 border border-red-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className={`block text-sm font-medium ${textcolor}`}>
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type your message here..."
              rows={4}
              required
              className="w-full mt-2 p-3 border border-red-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700"
            ></textarea>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="terms"
              required
              className="w-4 h-4 text-red-800 border-gray-300 rounded focus:ring-red-700"
            />
            <label htmlFor="terms" className={`ml-3 text-sm ${textcolor}`}>
              I accept the <span className="text-red-800 font-semibold">Terms & Conditions</span>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-red-800 text-white py-3 px-4 rounded-md shadow-lg hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
