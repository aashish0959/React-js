import React from "react";


export default function Contact() {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold">Contact Me</h2>
          <p className="text-lg lg:text-xl text-gray-300 mt-4">
            Have any questions or want to work together? Drop me a message!
          </p>
        </div>

        {/* Contact Form */}
        <form className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-400 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-400 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
   
    </div>
  );
}
