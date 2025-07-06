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
        "• Developed a **user-friendly platform** for readers to access book content",

        "• Created the **frontend** of the app",

        "• Created and configured a virtual server on **AWS EC2** to host a books API for a mobile application.",
      ],

      skills: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    },

    {
      role: "Backend Developer",
      company: "Techjet.ai",
      period: "January 2024 - May 2024",
      description: [
        "• Designed and implemented **5+ RESTful APIs** for the Digi Seva project, integrating with **MongoDB** database handling daily transactions.",

        "• Utilized **Express.js** to implement RESTful routing and middleware optimization, enhancing API latency and achieving test coverage for secure and scalable data transactions.",
      ],
      skills: ["Express", "Node.js", "MongoDB"],
    },
    {
      role: "Database Developer",
      company: "DiligenceAI",
      period: "November 2024 - January 2025",
      description: [
        "• Designed **PostgreSQL** database model with **Drizzle ORM** for efficient LinkedIn connection management.",

        "• Built **3 key API endpoints** and **2 webhooks**, implementing query optimization and connection pooling for improved data synchronization.",

        "• Implemented **LinkedIn profile synchronization** using **Unipile API** with secure user authentication.",
      ],
      skills: [
        "NextJS",
        "PostgreSQL",
        "Drizzle ORM",
        "Tailwind CSS",
        "Unipile API",
        "Shadcn components",
      ],
    },
  ];

  const formatDescription = (desc: string) => {
    return desc.replace(
      /\*\*(.*?)\*\*/g,
      '<span class="text-purple-400 font-semibold">$1</span>'
    );
  };

  return (
    <section id="workx" className="min-h-screen flex items-start pt-32 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-7xl text-center font-bold mb-16 text-white"
        >
          About Me and{" "}
          <span className="relative inline-block">
            <motion.span
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
            />
            <span className="relative z-10 text-black dark:text-black whitespace-nowrap">
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
                I am a Data Analyst with expertise in big data processing and visualization, specializing in{" "}
<span className="font-bold text-purple-500">Python</span> and{" "}
<span className="font-bold text-purple-500">SQL</span>{" "}
stacks. My passion lies in creating insightful dashboards and uncovering meaningful patterns using{" "}
<span className="font-bold text-purple-500">Power BI</span> and{" "}
<span className="font-bold text-purple-500">Tableau</span>.
With a strong foundation in{" "}
<span className="font-bold text-purple-500">Apache Spark</span>,{" "}
<span className="font-bold text-purple-500">Kafka</span>, and{" "}
<span className="font-bold text-purple-500">AWS</span>,
I build scalable data solutions and ETL pipelines. While my focus
is on data analysis, I'm also proficient in{" "}
<span className="font-bold text-purple-500">PostgreSQL</span>,{" "}
<span className="font-bold text-purple-500">MongoDB</span>,
and <span className="font-bold text-purple-500">Docker</span>
, allowing me to understand and work across the entire data
stack. As a Data Science and AI graduate from IIIT Dharwad with
full-stack development experience, I bring technical implementation
skills and data-driven insights to solve complex business problems,
enhancing the functionality and impact of the analytical solutions I build.
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
                    <div className="mb-4">
                      {exp.description.map((desc, i) => (
                        <div
                          key={i}
                          dangerouslySetInnerHTML={{
                            __html: formatDescription(desc),
                          }}
                          className="mb-2"
                        />
                      ))}
                    </div>
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
                    I&apos;ve done well in my studies, scoring{" "}
                    <span className="text-blue-400 font-semibold">94.33%</span>{" "}
                    in{" "}
                    <span className="text-purple-400 font-semibold">
                      10th ICSE
                    </span>{" "}
                    (with{" "}
                    <span className="text-blue-400 font-semibold">100</span> in
                    Math),{" "}
                    <span className="text-blue-400 font-semibold">94.8%</span>{" "}
                    in{" "}
                    <span className="text-purple-400 font-semibold">
                      12th CBSE
                    </span>
                    , and ranking{" "}
                    <span className="text-blue-400 font-semibold">22910</span>{" "}
                    in{" "}
                    <span className="text-purple-400 font-semibold">
                      JEE Mains
                    </span>{" "}
                    with a{" "}
                    <span className="text-blue-400 font-semibold">97.95</span>{" "}
                    percentile. In my work, I&apos;ve made important
                    contributions to different projects. At{" "}
                    <span className="text-purple-400 font-semibold">
                      DiligenceAI
                    </span>
                    , I designed{" "}
                    <span className="text-purple-400 font-semibold">
                      PostgreSQL
                    </span>{" "}
                    database models and implemented{" "}
                    <span className="text-purple-400 font-semibold">
                      LinkedIn
                    </span>{" "}
                    profile synchronization using{" "}
                    <span className="text-purple-400 font-semibold">
                      Unipile API
                    </span>
                    , improving data management efficiency. At{" "}
                    <span className="text-purple-400 font-semibold">
                      Alamnack Technologies
                    </span>
                    , I developed a reading platform with book summaries and
                    configured{" "}
                    <span className="text-purple-400 font-semibold">
                      AWS EC2
                    </span>{" "}
                    for backend hosting. At{" "}
                    <span className="text-purple-400 font-semibold">
                      Techjet.ai
                    </span>
                    , I built RESTful APIs for the{" "}
                    <span className="text-purple-400 font-semibold">
                      Digi Seva
                    </span>{" "}
                    project using{" "}
                    <span className="text-purple-400 font-semibold">
                      MongoDB
                    </span>{" "}
                    and{" "}
                    <span className="text-purple-400 font-semibold">
                      Express.js
                    </span>
                    . These experiences have strengthened my full-stack
                    development skills, particularly in database design, API
                    integration, and cloud services.
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
