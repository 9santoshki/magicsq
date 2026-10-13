import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';

const INPUT_CLASSES =
  'w-full pl-10 pr-3 py-3 border-2 border-[#dee2e6] rounded-lg text-[0.95rem] transition-colors duration-200 outline-none box-border bg-white focus:border-[#6c757d]';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real application, you would send this to a backend service
    // For now, we'll simulate and show instructions for email
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);

      // Show email client with pre-filled data
      const mailtoLink = `mailto:magicsquarelive@gmail.com?subject=${encodeURIComponent(`Magic Square Contact: ${formData.subject}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <div className="max-w-[800px] mx-auto p-5 bg-[#f8f9fa] min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#495057] mt-0 mb-[15px] tracking-[0.5px]">
          Get in Touch
        </h1>
        <p className="text-[1.1rem] text-[#6c757d] m-0 max-w-[600px] mx-auto leading-[1.6]">
          Have questions, suggestions, or feedback? We'd love to hear from you!
          Reach out to us using the form below.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#dee2e6] max-w-[600px] mx-auto">
        <h2 className="text-[1.5rem] font-semibold text-[#495057] mb-[25px] flex items-center gap-2.5 justify-center">
          <FaPaperPlane className="text-[#6c757d]" />
          Send us a Message
        </h2>

        {submitMessage && (
          <div className="bg-[linear-gradient(135deg,#6c757d_0%,#495057_100%)] text-white px-4 py-3 rounded-lg mb-5 text-[0.9rem] font-medium text-center">
            {submitMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 [@media(min-width:480px)]:grid-cols-2 gap-[15px] mb-[15px]">
            <div>
              <label className="block text-[0.9rem] font-medium text-[#495057] mb-[5px]">
                Name *
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6c757d] text-[0.9rem]" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={INPUT_CLASSES}
                  placeholder="Your name"
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.9rem] font-medium text-[#495057] mb-[5px]">
                Email *
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6c757d] text-[0.9rem]" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={INPUT_CLASSES}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
          </div>

          <div className="mb-[15px]">
            <label className="block text-[0.9rem] font-medium text-[#495057] mb-[5px]">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-3 border-2 border-[#dee2e6] rounded-lg text-[0.95rem] transition-colors duration-200 outline-none box-border bg-white focus:border-[#6c757d]"
              placeholder="What's this about?"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[0.9rem] font-medium text-[#495057] mb-[5px]">
              Message *
            </label>
            <div className="relative">
              <FaComment className="absolute left-3 top-3 text-[#6c757d] text-[0.9rem]" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                className={`${INPUT_CLASSES} resize-y [font-family:inherit]`}
                placeholder="Tell us more about your inquiry..."
              />
            </div>
          </div>

          <div className="bg-[#fff3cd] border border-[#ffeaa7] rounded-lg p-3 mb-5 text-[0.9rem] text-[#856404]">
            <strong>Note:</strong> Clicking "Send Message" will open your email client to send the message to magicsquarelive@gmail.com
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3.5 rounded-lg text-white text-base font-semibold border-0 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_8px_25px_rgba(108,117,125,0.3)] ${
              isSubmitting ? 'bg-[#adb5bd]' : 'bg-[linear-gradient(135deg,#6c757d_0%,#495057_100%)]'
            }`}
          >
            <FaPaperPlane className="text-[0.9rem]" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* FAQ Section */}
        <div className="mt-[30px] p-5 bg-[#f8f9fa] rounded-lg border border-[#dee2e6]">
          <h3 className="text-[1.2rem] font-semibold text-[#495057] mb-[15px] text-center">
            Quick Questions?
          </h3>
          <div className="text-[0.9rem] text-[#6c757d] leading-[1.6] text-center">
            <p className="mb-[10px]">
              <strong>Response Time:</strong> We typically respond within few business days.
            </p>
            <p className="mb-[10px]">
              <strong>Bug Reports:</strong> Please include your device type and browser version.
            </p>
            <p className="m-0">
              <strong>Feature Requests:</strong> We love hearing your ideas for improving the game!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
