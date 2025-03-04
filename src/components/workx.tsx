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
    { title: "Years Experience", count: "1+" },
  ];

  const workExperience = [
    {
      role: "Frontend Developer",
      company: "Alamnack Technologies",
      period: "May 2023 - July 2023",
      description: [
        "• Developed a user-friendly platform for readers to access book content",

        "• Created the frontend of the app",

        "• Created and configured a virtual server on AWS EC2 to host a books API for a mobile application.",
      ],

      skills: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    },

    {
      role: "Backend Developer",
      company: "Techjet.ai",
      period: "January 2024 - May 2024",
      description: [
        "• Designed and implemented 5+ RESTful APIs for the Digi Seva project, integrating with a Mon- goDB database handling 500+ daily transactions with 99% uptime.",

        "• Utilized Express.js to set up routing and middleware, reducing API response time by 25% and achieving 85% test coverage for secure and scalable data transactions.",
      ],
      skills: ["Express", "Node.js", "MongoDB"],
    },
    {
      role: "Backend Developer",
      company: "DiligenceAI",
      period: "November 2024 - January 2025",
      description: [
        "• Designed PostgreSQL database model with Drizzle ORM handling 1,000+ LinkedIn connections at 99% uptime. Built 3 key API endpoints and 2 webhooks, cutting data latency by 20%.",

        "• Integrated LinkedIn functionality via Unipile API with secure account linking interface using Shadcn UI, boosting user engagement by 15%.",

        "• Built automated connection expiration system with timely user notifications and advanced search features using Unipile filters, improving search accuracy by 30%.",
      ],
      skills: [
        "NextJS",
        "PostgreSQL",
        "Drizzle ORM",
        "Tailwind CSS",
        "Unipile API",
        "Shadcn UI",
      ],
    },
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
                <CardContent className="text-black leading-relaxed">
                  I am a Full Stack Web Developer with expertise in frontend
                  development, specializing in the <span className="font-bold text-purple-500">MERN</span> and <span className="font-bold text-purple-500">Next.js</span> stacks. My
                  passion lies in creating intuitive and responsive user
                  interfaces using <span className="font-bold text-purple-500">React</span> and <span className="font-bold text-purple-500">Next.js</span>. With a strong foundation
                  in <span className="font-bold text-purple-500">HTML</span>, <span className="font-bold text-purple-500">CSS</span>, and <span className="font-bold text-purple-500">JavaScript</span>, I craft seamless and engaging
                  web experiences. While my focus is on the frontend, I'm also
                  proficient in <span className="font-bold text-purple-500">Node.js</span>, <span className="font-bold text-purple-500">Express</span>, and <span className="font-bold text-purple-500">MongoDB</span>, allowing me to
                  understand and work across the entire web stack. As a Data
                  Science and AI graduate from IIIT Dharwad, I bring analytical
                  thinking and data-driven insights to my development process,
                  enhancing the functionality and user experience of the
                  applications I build.
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
            >
              <Card>
                <CardHeader>
                  <CardTitle>Key Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I've done well in my studies, scoring <span className="text-blue-400 font-semibold">94.33%</span> in <span className="text-purple-400 font-semibold">10th ICSE</span> (with <span className="text-blue-400 font-semibold">100</span> in Math), <span className="text-blue-400 font-semibold">94.8%</span> in <span className="text-purple-400 font-semibold">12th CBSE</span>, and ranking <span className="text-blue-400 font-semibold">22910</span> in <span className="text-purple-400 font-semibold">JEE Mains</span> with a <span className="text-blue-400 font-semibold">97.95</span> percentile. In my work, I've made important contributions to different projects. At <span className="text-purple-400 font-semibold">DiligenceAI</span>, I improved <span className="text-purple-400 font-semibold">LinkedIn</span> data handling, which led to <span className="text-blue-400 font-semibold">20%</span> faster performance, <span className="text-blue-400 font-semibold">30%</span> better search results, and <span className="text-blue-400 font-semibold">15%</span> more user activity. At <span className="text-purple-400 font-semibold">Alamnack Technologies</span>, I built a reading app with AI-created book summaries and set up the backend on <span className="text-purple-400 font-semibold">AWS EC2</span>. At <span className="text-purple-400 font-semibold">Techjet.ai</span>, I created APIs for the <span className="text-purple-400 font-semibold">Digi Seva</span> project using <span className="text-purple-400 font-semibold">MongoDB</span>, <span className="text-purple-400 font-semibold">Express.js</span>, and <span className="text-purple-400 font-semibold">Node.js</span>. These experiences have improved my skills in both frontend and backend development, helping me create useful web solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
