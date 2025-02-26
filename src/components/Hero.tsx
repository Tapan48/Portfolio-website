"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Software Engineer", "Fullstack Developer", "Tapan Garasangi"];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold sm:text-6xl">Hello, I&apos;m</h1>
        <motion.div
          key={currentRole}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-3xl sm:text-5xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          {roles[currentRole]}
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button
          variant="default"
          size="lg"
          className="px-8"
          onClick={() => window.open("/path-to-resume.pdf", "_blank")}
        >
          Download Resume
        </Button>
        <Button variant="outline" size="lg" className="px-8">
          Contact Me
        </Button>
      </div>
    </div>
  );
}
