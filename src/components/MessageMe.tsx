"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export function MessageMe() {
  return (
    <section id="contact" className="py-16 px-4 w-full justify-start">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl text-center font-bold mb-16"
        >
          Message{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Me
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-12 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl text-white whitespace-nowrap font-bold w-[250px]">Hello Tapan, My name is...</span>
            <Input
              placeholder="Enter your name"
              className="bg-white text-black placeholder:text-gray-500 border-gray-700 focus-visible:ring-purple-400 text-xl flex-1"
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl text-white whitespace-nowrap font-bold w-[250px]">     and my Email is...</span>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black placeholder:text-gray-500 border-gray-700 focus-visible:ring-purple-400 text-xl flex-1"
            />
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl text-white whitespace-nowrap font-bold w-[250px]">I want to say that...</span>
            <Textarea
              placeholder="Write your message"
              className="min-h-[200px] bg-white text-black placeholder:text-gray-500 border-gray-700 focus-visible:ring-purple-400 text-xl flex-1"
            />
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-6"
            >
              Send
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
