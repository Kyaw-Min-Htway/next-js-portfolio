'use client'
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const text = 'Hire me';
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setError(true);
          form.current.reset();
        }
      );
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* TEXT CONTAINER */}
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 bg-gray-100 flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl text-center">
          <div>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😉
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="p-6 sm:p-8 md:p-12 lg:p-16"
        >
          <label className="block mb-4">
            Dear Kyaw Min Htway,
            <textarea
              rows={6}
              className="block w-full mt-2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 outline-none resize-none"
              name="user_message"
              required
            />
          </label>
          <label className="block mb-4">
            My email address is:
            <input
              type="email"
              className="block w-full mt-2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 outline-none"
              name="user_email"
              required
            />
          </label>
          <label className="block mb-6">
            Regards
          </label>
          <button
            className="block w-full bg-purple-200 hover:bg-purple-300 text-gray-600 font-semibold rounded-lg py-3 transition-colors"
            type="submit"
          >
            Send
          </button>
          {success && (
            <span className="block mt-4 text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="block mt-4 text-red-600 font-semibold">
              There was an error sending your message. Please try again.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;


