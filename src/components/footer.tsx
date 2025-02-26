"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/yourusername",
      label: "Instagram",
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-col items-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-4"
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Find and connect with me on:
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-800/50 transition-colors"
                  onClick={() => window.open(social.href, "_blank")}
                >
                  {social.icon}
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-2 text-gray-400"
          >
            <Mail className="h-4 w-4" />
            <a
              href="mailto:tapangarasangi@gmail.com"
              className="hover:text-white transition-colors"
            >
              tapangarasangi@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-gray-500"
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
