"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function MessageMe() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center font-bold mb-12"
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
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <span className="text-lg whitespace-nowrap">
              Hello Tapan, My name is
            </span>
            <Input
              placeholder="Enter your name"
              className="bg-gray-800/50 border-gray-700 focus-visible:ring-purple-400"
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-lg whitespace-nowrap">and my email is</span>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800/50 border-gray-700 focus-visible:ring-purple-400"
            />
          </div>

          <div className="flex items-start gap-4">
            <span className="text-lg whitespace-nowrap">
              I want to say that
            </span>
            <Textarea
              placeholder="Write your message"
              className="min-h-[100px] bg-gray-800/50 border-gray-700 focus-visible:ring-purple-400"
            />
          </div>

          <div className="flex justify-end">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 text-white"
            >
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
