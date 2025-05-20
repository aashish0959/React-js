import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_abc123',       // <-- Apna EmailJS Service ID dalein
      'template_def456',      // <-- Apna EmailJS Template ID dalein
      formRef.current,
      'user_ghi789'           // <-- Apna EmailJS Public Key/User ID dalein
    ).then(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for contacting us. We will get back to you shortly!'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: ''
        });
      }, 5000);
    }).catch(() => {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Something went wrong. Please try again.'
      });
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Contact Us</h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          Have questions about our services? Reach out to our team and we'll be happy to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>

          {formStatus.submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-200 text-green-700 rounded-md">
              {formStatus.message}
            </div>
          )}

          {formStatus.error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-200 text-red-700 rounded-md">
              {formStatus.message}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="+91 88888 88888"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select a Service</option>
                  <option value="sea-freight">Sea Freight</option>
                  <option value="air-freight">Air Freight</option>
                  <option value="global-logistics">Global Logistics</option>
                  <option value="documentation">Documentation</option>
                  <option value="trade-consultancy">Trade Consultancy</option>
                  <option value="market-analysis">Market Analysis</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                rows="5"
                placeholder="Let us know how we can help you..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Contact Info and Map */}
        <div>
          <div className="bg-slate-800 text-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Office Address</h4>
                  <p className="text-slate-300">
                    123 Business Park, Suite 201<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <a href="mailto:info@mkmvexim.com" className="text-slate-300 hover:text-orange-400 transition-colors duration-300">
                    info@mkmvexim.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <a href="tel:+918888888888" className="text-slate-300 hover:text-orange-400 transition-colors duration-300">
                    +91 888 888 8888
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Working Hours</h4>
                  <p className="text-slate-300">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Placeholder */}
          <div className="bg-slate-200 p-4 rounded-lg shadow-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <p className="text-slate-600 mb-2">Google Map would be embedded here</p>
              <p className="text-sm text-slate-500">This is a placeholder for a Google Maps iframe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
