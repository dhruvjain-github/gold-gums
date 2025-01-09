"use client";

import React, { useState } from "react";

interface ContactFormProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  boxcolor: string;
  id?: string;
  iconcolor?: string;
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

  const [showMore, setShowMore] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const successfulSubmit = () => {
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      contact: "",
      whatsapp: "",
      state: "",
      city: "",
      title: "",
      description: "",
    });
  };

  const formFields = [
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
    {
      id: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Type your message here...",
    },
  ];

  const halfFields = formFields.slice(0, Math.ceil(formFields.length / 2));
  const remainingFields = formFields.slice(Math.ceil(formFields.length / 2));

  return (
    <div
      className={`py-16 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 md:pt-36 ${backgroundcolor}`}
    >
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
        <form onSubmit={successfulSubmit}>
          {halfFields.map(({ id, label, type, placeholder }) => (
            <div className="mb-6" key={id}>
              <label
                htmlFor={id}
                className={`block text-sm font-medium ${textcolor}`}
              >
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  id={id}
                  name={id}
                  placeholder={placeholder}
                  rows={4}
                  required
                  className="w-full mt-2 p-3 border border-red-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 bg-orange-100"
                  value={formData[id as keyof typeof formData]}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type={type}
                  id={id}
                  name={id}
                  placeholder={placeholder}
                  required
                  className="w-full mt-2 p-3 border border-red-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 bg-orange-100"
                  value={formData[id as keyof typeof formData]}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}

          {showMore &&
            remainingFields.map(({ id, label, type, placeholder }) => (
              <div className="mb-6" key={id}>
                <label
                  htmlFor={id}
                  className={`block text-sm font-medium ${textcolor}`}
                >
                  {label}
                </label>
                {type === "textarea" ? (
                  <textarea
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    rows={4}
                    required
                    className="w-full mt-2 p-3 border border-red-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 bg-orange-100"
                    value={formData[id as keyof typeof formData]}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    type={type}
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    required
                    className="w-full mt-2 p-3 border border-red-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 bg-orange-100"
                    value={formData[id as keyof typeof formData]}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}

          {!showMore && (
            <button
              type="button"
              className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 mb-4"
              onClick={() => setShowMore(true)}
            >
              Show More
            </button>
          )}

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
