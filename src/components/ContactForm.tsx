"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_sh3ydnj",
        "template_ibwh128",
        form.current,
        "-VL80-2vcV9aHHARO"
      )
      .then(
        () => {
         toast.success("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
         toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl px-8 py-10 space-y-6 mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-purple-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Let's Work Together
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          placeholder="your@email.com"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Write your message here..."
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
        />
      </motion.div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
      >
        <SendHorizonal className="w-5 h-5" />
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
