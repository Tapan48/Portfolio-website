"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "React.js",
      "Express.js",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "Socket.IO",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Tools",
    skills: ["Postman", "Docker", "Git"],
  },
];

export function Skills() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center text-white font-bold mb-16"
        >
          These are the skills I have learned in my{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            coding journey
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-900 to-gray-800 border-none">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
