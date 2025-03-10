"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";

export function MessageMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Tapan",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setFormData({ name: "", email: "", message: "" });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-8 md:py-12 px-4 w-full flex flex-col items-center relative"
    >
      <div className="fixed inset-0 flex items-start justify-center z-50 pointer-events-none">
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 40 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 pointer-events-auto"
            >
              <Check className="h-6 w-6" />
              <p className="text-lg">
                Message sent successfully! Thanks for reaching out.
              </p>
            </motion.div>
          )}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 40 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-blue-100 border border-blue-400 text-blue-700 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 pointer-events-auto"
            >
              <Loader2 className="h-6 w-6 animate-spin" />
              <p className="text-lg">Sending message...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl lg:text-6xl text-center font-bold mb-6 md:mb-12"
      >
        <span className="relative">
          <motion.span
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          />
          <span className="relative z-10 text-black dark:text-black">
            Message Me
          </span>
        </span>
      </motion.h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md md:max-w-xl space-y-5 md:space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-4 md:space-y-8"
        >
          <div className="flex flex-col space-y-1 md:space-y-2">
            <span className="text-lg md:text-2xl lg:text-3xl text-white font-bold">
              Hello Tapan, My name is...
            </span>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-white text-black placeholder:text-gray-500 border-gray-700 focus-visible:ring-purple-400 text-sm md:text-base lg:text-xl p-3 md:p-6"
              required
            />
          </div>

          <div className="flex flex-col space-y-1 md:space-y-2">
            <span className="text-lg md:text-2xl lg:text-3xl text-white font-bold">
              and my Email is...
            </span>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-white text-black placeholder:text-gray-500 border-gray-700 focus-visible:ring-purple-400 text-sm md:text-base lg:text-xl p-3 md:p-6"
              required
            />
          </div>

          <div className="flex flex-col space-y-1 md:space-y-2">
            <span className="text-lg md:text-2xl lg:text-3xl text-white font-bold">
              I want to say that...
            </span>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="min-h-[100px] md:min-h-[160px] bg-white text-black placeholder:text-gray-500 border-gray-700 focus-visible:ring-purple-400 text-sm md:text-base lg:text-xl p-3 md:p-5"
              required
            />
          </div>

          <div className="w-full pt-2 md:pt-4">
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg lg:text-xl px-4 md:px-8 py-2 md:py-4 disabled:opacity-50"
            >
              Send
            </Button>
          </div>
        </motion.div>
      </form>
    </section>
  );
}
