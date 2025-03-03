"use client";

import { motion } from "framer-motion";

export function WorkX() {
  return (
    <section id="workx" className="min-h-screen flex items-start pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-10xl md:text-7xl text-center font-bold mb-16"
        >
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Me
          </span>{" "}
          and My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Work
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              About Me
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I am a passionate software developer with a keen interest in
              building modern web applications. My journey in coding started
              with curiosity and has evolved into a professional career where I
              constantly push the boundaries of what's possible in web
              development. I believe in writing clean, maintainable code and
              creating user-friendly experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              My Work
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I specialize in building full-stack applications using modern
              technologies like React, Next.js, and Node.js. My work focuses on
              creating scalable solutions that solve real-world problems. I've
              worked on various projects ranging from e-commerce platforms to
              real-time communication systems, always ensuring the highest
              quality and performance standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
