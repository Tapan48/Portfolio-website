"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export function WorkX() {
  const achievements = [
    { title: "Projects Completed", count: "50+" },
    { title: "Happy Clients", count: "30+" },
    { title: "Years Experience", count: "5+" },
  ];

  const workExperience = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description:
        "Led development of multiple web applications using Next.js and React",
      skills: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    },
    {
      role: "Senior Backend Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description:
        "Led development of multiple web applications using Next.js and React",
      skills: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    },
    // Add more experiences...
  ];

  return (
    <section id="workx" className="min-h-screen flex items-start pt-32 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl text-center font-bold mb-16 text-white"
        >
          About Me and{" "}
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
              My Work
            </span>
          </span>
        </motion.h2>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 leading-relaxed">
                  I am a passionate software developer with a keen interest in
                  building modern web applications. My journey in coding started
                  with curiosity and has evolved into a professional career
                  where I constantly push the boundaries of what's possible in
                  web development. I believe in writing clean, maintainable code
                  and creating user-friendly experiences.
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="experience">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid gap-4"
            >
              {workExperience.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{exp.role}</CardTitle>
                    <CardDescription>
                      {exp.company} | {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{exp.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="achievements">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-4"
            >
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                      {achievement.count}
                    </CardTitle>
                    <CardDescription className="text-center text-lg">
                      {achievement.title}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
