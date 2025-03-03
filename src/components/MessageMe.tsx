"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export function MessageMe() {
  return (
    <section
      id="contact"
      className="py-16 px-4 w-full flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl md:text-7xl text-center font-bold mb-16"
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
      <div className="w-full max-w-2xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-8"
        >
          <div className="flex flex-col space-y-2">
            <span className="text-3xl text-white font-bold">
              Hello Tapan, My name is...
            </span>
            <Input
              placeholder="Enter your name"
              className="bg-white text-black placeholder:text-gray-500 border-gray-700 focus-visible:ring-purple-400 text-xl"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-3xl text-white font-bold">
              and my Email is...
            </span>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black placeholder:text-gray-500 border-gray-700 focus-visible:ring-purple-400 text-xl"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-3xl text-white font-bold">
              I want to say that...
            </span>
            <Textarea
              placeholder="Write your message"
              className="min-h-[200px] bg-white text-black placeholder:text-gray-500 border-gray-700 focus-visible:ring-purple-400 text-xl"
            />
          </div>

          <div className="w-full pt-4">
            <Button
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-6"
            >
              Send
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
