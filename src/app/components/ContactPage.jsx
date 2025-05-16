"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    kidName: "",
    dob: "",
    motherName: "",
    fatherName: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Your message has been sent!");

    setForm({
      kidName: "",
      dob: "",
      motherName: "",
      fatherName: "",
      contact: "",
      message: "",
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-4xl font-bold text-[#163269] mb-6">Contact Us</h2>
            <div className="text-gray-600 flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#279989]" size={20} />
                <span>Jagatpura, Jaipur, Rajasthan 700035</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-[#279989]" size={20} />
                <a href="tel:9831995274" className="text-[#279989]">98319 95274</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#279989]" size={20} />
                <a href="mailto:info@heraldkids.com" className="text-[#279989]">info@heraldkids.com</a>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-[580px] mt-8">
            <iframe
              title="Jagatpura Jaipur Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0803658431443!2d75.824341!3d26.835251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6b8e1e0e7d7%3A0x1a2b3c4d5e6f7g8h!2sJagatpura%2C%20Jaipur%2C%20Rajasthan%20303006!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        <div className="flex flex-col h-full justify-between">
          <h2 className="text-4xl font-bold text-[#163269] mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Kid's Name</label>
              <input
                type="text"
                name="kidName"
                value={form.kidName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring-[#279989] focus:border-[#279989]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring-[#279989] focus:border-[#279989]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
              <input
                type="text"
                name="motherName"
                value={form.motherName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring-[#279989] focus:border-[#279989]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Father's Name</label>
              <input
                type="text"
                name="fatherName"
                value={form.fatherName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring-[#279989] focus:border-[#279989]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="tel"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring-[#279989] focus:border-[#279989]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:ring-[#279989] focus:border-[#279989]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#279989] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#1f7f78] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
