"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "Python", icon: "python.svg" },
      { name: "C++", icon: "cpp.svg" },
      { name: "Java", icon: "java.svg" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", icon: "html.svg" },
      { name: "CSS", icon: "css.svg" },
      { name: "React.js", icon: "react.svg" },
      { name: "Node.js", icon: "nodejs.svg" },
      { name: "Express.js", icon: "express.svg" },
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "Tailwind CSS", icon: "tailwind.svg" },
      { name: "Socket.IO", icon: "socketio.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "mongodb.svg" },
      { name: "MySQL", icon: "mysql.svg" },
      { name: "PostgreSQL", icon: "postgresql.svg" },
      { name: "Redis", icon: "redis.svg" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Postman", icon: "postman.svg" },
      { name: "Docker", icon: "docker.svg" },
      { name: "Figma", icon: "figma.svg" },
    ],
  },
];

export function Skills() {
  return (
    <section className="py-16">
      <div className="max-w-100xl w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-10xl md:text-6xl text-center text-white font-bold mb-16"
        >
          These are the skills I have
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 m-2 text-transparent bg-clip-text bg-red-500">
            learned in my coding journey
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 bg-[#121212] rounded-lg p-8 w-full max-w-[1600px] mx-auto">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="space-y-4 text-center rounded-xl "
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="p-4 bg-[#1c1c1c] rounded-lg flex flex-col items-center justify-center space-y-2 hover:bg-[#252525] transition-colors shadow-lg hover:shadow-purple-500/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={`/${skill.icon}`}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="filter drop-shadow-lg"
                    />
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
