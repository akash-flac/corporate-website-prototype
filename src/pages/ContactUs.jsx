import React, { useState } from "react";
import Hero from "../components/Hero";
import { Mail, MapPin, Phone } from "lucide-react";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="bg-gray-50">
      <Hero
        heading="Contact Us"
        bgImage="src/images/ContactUsBg.jpeg"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#330073]">
            Get In Touch
          </h1>
          <p className="text-[#330073] text-sm md:text-base">
            Reach out, and let's create a universe of possibilities together!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-[#330073] rounded-2xl shadow-lg overflow-hidden md:m-20">
          {/* Form Section */}
          <div className="md:w-1/2 w-full p-6 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Let's Connect Constellations
            </h2>
            <p className="text-sm font-light mb-6">
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "mobile"].map((field) => (
                <input
                  key={field}
                  type={
                    field === "email"
                      ? "email"
                      : field === "mobile"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`${
                    field.charAt(0).toUpperCase() + field.slice(1)
                  }*`}
                  className="w-full p-3 border border-gray-500 rounded-md bg-[#1d0544] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9616f3]"
                  required
                />
              ))}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your message"
                className="w-full p-3 border border-gray-500 rounded-md bg-[#1d0544] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9616f3]"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#9616f3] hover:bg-[#7e13c8] transition text-white py-3 rounded-md font-semibold"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full p-8 flex justify-center items-center bg-[#330073]">
            <img
              src="src/images/astronaut.png"
              alt="Astronaut Illustration"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
