"use client";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface ContactFAQsProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
  id?:string
}

const faqs: FAQ[] = [
  {
    question: "What products do you offer?",
    answer:
      "We offer a wide range of adhesives for various applications, including corrugated boxes, paper tubes, and book binding. Additionally, we manufacture dextrines, modified starches, and other starch-based products. Our goal is to meet the diverse needs of our clients across different industries.",
  },
  {
    question: "What is your shipping policy?",
    answer:
      "We ship our products across India, ensuring timely delivery to all major cities.Shipping times may vary based on location. For specific inquiries, please reach out to our customer service team.",
  },
  {
    question: "Do you offer samples?",
    answer:
      "Yes, we provide samples of our adhesive products upon request. This allows potential customers to evaluate our quality before making a purchase. Please contact us for more details on how to request samples.",
  },
  {
    question: "How can I order?",
    answer:
      "You can place an order through our website or by contacting our sales team directly. We recommend providing specific details about your requirements to ensure accurate processing. Our team is here to assist you with any questions during the ordering process.",
  },
  {
    question: "What are your payment options?",
    answer:
      "We accept various payment methods, including bank transfers and credit cards. Our goal is to provide a seamless payment experience for our customers. For more information on payment options, feel free to reach out.",
  },
];

const ContactFAQs: React.FC<ContactFAQsProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  iconcolor,
  boxcolor,
  
}) => {
  const [openFaqs, setOpenFaqs] = useState<boolean[]>(faqs.map(() => true));

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className={`md:py-36 p-4 ${backgroundcolor}`}>
      <div className="max-w-3xl mx-auto">
        <h1 className={`text-3xl font-bold text-center ${headingcolor}`}>FAQs</h1>
        <p className={`mt-4 text-center ${textcolor}`}>
          Find answers to your questions about our products, shipping, and more below.
        </p>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-300 rounded-lg shadow-md transition-all ${
                openFaqs[index] ? `p-4 ${boxcolor}` : "p-2 bg-white"
              }`}
            >
              <div className="flex justify-between items-center">
                <h2 className={`text-lg font-semibold ${headingcolor}`}>
                  {faq.question}
                </h2>
                <button
                  onClick={() => toggleFaq(index)}
                  className={`${iconcolor} font-bold text-2xl hover:opacity-80 focus:outline-none`}
                >
                  {openFaqs[index] ? "×" : "+"}
                </button>
              </div>
              {openFaqs[index] && (
                <p className={`mt-2 ${textcolor} text-sm`}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className={`text-lg font-semibold ${headingcolor}`}>
          Still have questions?
        </h2>
        <p className={`mt-2 text-sm font-semibold ${textcolor}`}>We're here to help you!</p>
        <button
          className={`mt-4 bg-red-800 text-white px-6 py-2 rounded-md shadow hover:opacity-80`}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default ContactFAQs;
