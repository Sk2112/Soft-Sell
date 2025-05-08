// src/components/ContactForm.tsx
"use client"; // <-- Add this at the very top of the file

import { useState } from "react";

// Define the shape of the formData object
interface FormData {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    licenseType: "Software",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors: { [key: string]: string } = {};
    if (!formData.name) formErrors["name"] = "Name is required.";
    if (!formData.email) formErrors["email"] = "Email is required.";
    if (!formData.message) formErrors["message"] = "Message is required.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <select
          name="licenseType"
          value={formData.licenseType}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="Software">Software License</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          rows={4}
        />
        {errors.message && <p className="text-red-500">{errors.message}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
