"use client";

import React, { useState } from "react";
import axios from "axios";

interface ContactFormProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  boxcolor: string;
  id?:string
}

const ContactForm: React.FC<ContactFormProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  boxcolor,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    whatsapp: "",
    state: "",
    city: "",
    title: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/sendMessage", formData);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send the message.");
    }
  };

  return (
    <div
      className={`py-16 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 md:pt-36 ${backgroundcolor}`}
    >
      {/* Contact Form */}
      <div
        className={`w-full max-w-lg p-8 shadow-2xl rounded-lg border border-orange-800 mb-8 ${boxcolor}`}
      >
        <h1
          className={`text-2xl font-bold text-center sm:text-3xl ${headingcolor}`}
        >
          Any Suggestion
        </h1>
        <p
          className={`mt-4 font-medium text-sm text-center mb-10 sm:text-base ${textcolor}`}
        >
          We would love to hear from you. Please fill out the form below, and we
          will get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
          {[
            {
              id: "name",
              label: "Name",
              type: "text",
              placeholder: "Enter your name",
            },
            {
              id: "email",
              label: "Email",
              type: "email",
              placeholder: "Enter your email",
            },
            {
              id: "contact",
              label: "Contact No.",
              type: "text",
              placeholder: "Enter your contact no.",
            },
            {
              id: "whatsapp",
              label: "WhatsApp No.",
              type: "text",
              placeholder: "Enter your WhatsApp no.",
            },
            {
              id: "state",
              label: "State *The state must be located in India",
              type: "text",
              placeholder: "Enter your state",
            },
            {
              id: "city",
              label: "City *The city must be located in the state",
              type: "text",
              placeholder: "Enter your city",
            },
            {
              id: "title",
              label: "Title",
              type: "text",
              placeholder: "Enter the title",
            },
          ].map(({ id, label, type, placeholder }) => (
            <div className="mb-6" key={id}>
              <label
                htmlFor={id}
                className={`block text-sm font-medium ${textcolor}`}
              >
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                required
                className="w-full mt-2 p-3 border border-red-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 bg-orange-100"
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="mb-6">
            <label
              htmlFor="description"
              className={`block text-sm font-medium ${textcolor}`}
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Type your message here..."
              rows={4}
              required
              className="w-full mt-2 p-3 border border-red-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 bg-orange-100"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="terms"
              required
              className="w-4 h-4 text-red-800 border-gray-300 rounded focus:ring-red-700 checked:bg-red-800"
            />
            <label htmlFor="terms" className={`ml-3 text-sm ${textcolor}`}>
              I accept the{" "}
              <span className="text-red-800 font-semibold">
                Terms & Conditions
              </span>
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

      {/* Faster Response Box */}
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 mt-8 p-6 bg-orange-900 text-white rounded-lg shadow-lg">
  <h1 className="text-lg font-bold text-orange-200 mb-4">
    For Faster Response Please Contact
  </h1>
  <p className="text-sm mb-2 font-semibold text-gray-200">
    <i className="ri-phone-fill"></i> 877 082 2124
  </p>
  <p className="text-sm mb-2 font-semibold text-gray-200">
    <i className="ri-whatsapp-line"></i> 982 607 0900 
  </p>
</div>

    </div>
  );
};

export default ContactForm;
