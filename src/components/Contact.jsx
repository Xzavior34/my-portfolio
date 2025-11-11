import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, MessageSquare, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', _replyto: '', message: '' });
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const handleFormChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setStatus(null); // Clear status on new input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simple local validation
    if (!formState.name || !formState._replyto || !formState.message) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xldaelea", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          _replyto: formState._replyto,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', _replyto: '', message: '' }); // Clear form fields
      } else {
        setStatus('error');
      }

    } catch (e) {
      console.error("Form submission error:", e);
      setStatus('error');
    }
  };

  const buttonData = [
    { label: "Email Me", href: "mailto:philipinem7@gmail.com", icon: <Mail size={24} />, style: "primary" },
    { label: "LinkedIn", href: "", icon: <Linkedin size={24} />, style: "secondary" },
    { label: "GitHub", href: "https://www.linkedin.com/in/philip-inem-9b690536b?utm_source=share_via&utm_content=profile&utm_medium=member_android//github.com/Xzavior34", icon: <Github size={24} />, style: "tertiary" },
    { label: "Download CV", href: "Philip_Inem_CV_Summary.pdf", icon: <Download size={24} />, style: "quaternary" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 100 },
    }),
  };

  const getButtonStyle = (style) => {
    switch (style) {
      case "primary":
        return "bg-blue-600 text-white shadow-lg shadow-blue-400/40 hover:bg-blue-700";
      case "secondary":
        return "bg-amber-500 text-gray-900 shadow-lg shadow-amber-300/40 hover:bg-amber-600";
      case "tertiary":
        return "bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50";
      case "quaternary":
        return "bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-50";
      default:
        return "";
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-800 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold mb-4 text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Reach Out & Connect
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I am actively seeking roles where technical leadership and full-stack performance are paramount. Send a direct message or connect through my professional channels below.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 text-left">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-amber-100"
          >
            <h3 className="text-3xl font-bold mb-6 text-amber-600">Send a Direct Message</h3>

            {status === 'success' && (
              <div className="flex items-center p-4 mb-4 text-green-700 bg-green-100 rounded-lg">
                <CheckCircle size={20} className="mr-2" />
                <p>Message sent successfully! I will respond shortly.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
                There was an error sending your message. Please try again or use the email link.
              </div>
            )}

            <form 
              onSubmit={handleSubmit} 
              // action and method are handled by fetch in handleSubmit, but kept here for fallback/clarity
              action="https://formspree.io/f/xldaelea" 
              method="POST" 
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white/80"
                />
              </div>

              <div>
                <label htmlFor="_replyto" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="_replyto"
                  name="_replyto"
                  value={formState._replyto}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white/80"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formState.message}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white/80"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full px-6 py-3 rounded-xl font-bold shadow-lg transition-transform duration-300 flex items-center justify-center ${
                  status === 'sending' ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-amber-500 text-gray-900 hover:bg-amber-600 hover:scale-[1.01]'
                }`}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={20} className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
          
          {/* Right Column: Professional Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-blue-100 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-8 text-blue-700">My Professional Channels</h3>
            
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {buttonData.map((btn, i) => (
                <motion.a
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  href={btn.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center w-full px-6 py-4 rounded-xl font-bold tracking-wide shadow-md hover:scale-[1.02] transition-transform duration-300 ${getButtonStyle(btn.style)}`}
                >
                  {btn.icon}
                  <span className="ml-3">{btn.label}</span>
                </motion.a>
              ))}
            </motion.div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-lg font-semibold text-gray-700">Current Focus:</p>
              <p className="text-blue-500 font-medium">Full-Stack | Low-Latency FinTech</p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
