"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "SwiftCart",
    description:
      "Built a user-friendly e-commerce platform using React.js and Redux, featuring real-time updates and a streamlined cart system.",
    technologies: [
      "React.js",
      "Redux",
      "MongoDB",
      // "TypeScript",
      // "PostgreSQL",
      // "Stripe",
      // "Tailwind",
    ],
    githubUrl: "https://github.com/Tapan48/SwiftCart",
    liveUrl: "https://ecommerce-app-olive-chi-40.vercel.app/",
    imageUrl: "/swiftcart.webp",
  },

  {
    title: "CommunityCove",
    description:
      "Built a social media platform with real-time voting and community features. Users can create/view posts, join communities, and participate in voting.",
    technologies: ["React-Query", "Supabase", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Tapan48/CommunityCove",
    liveUrl: "https://social-media-app2-five.vercel.app/",
    imageUrl: "/communitycove.webp",
  },

  {
    title: "Portfolio-Website",
    description:
      "Built a personal portfolio website using Next.js and Tailwind CSS, showcasing projects and professional experience.",
    technologies: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/Tapan48/Portfolio-website",
    liveUrl: "https://portfolio-demo.com",
    imageUrl: "/portfolio.webp",
  },

  /// add pern stack project

  ///////////////////////////////////// need to do below

  // {
  //   title: "AI Task Manager",
  //   description:
  //     "An AI-powered task management system that helps prioritize tasks, set deadlines, and provides smart suggestions for task completion.",
  //   technologies: [
  //     "Next.js",
  //     "OpenAI API",
  //     "Node.js",
  //     "PostgreSQL",
  //     "Tailwind",
  //   ],
  //   githubUrl: "https://github.com/yourusername/ai-tasks",
  //   liveUrl: "https://ai-tasks-demo.com",
  //   imageUrl: "brain-circuit.svg",
  // },

  // {
  //   title: "Real-time Chat Application",
  //   description:
  //     "A modern chat application with real-time messaging, file sharing, and user presence. Features end-to-end encryption and message persistence.",
  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "Socket.IO",
  //     "MongoDB",
  //     "Redis",
  //     "WebRTC",
  //   ],
  //   githubUrl: "https://github.com/yourusername/chat-app",
  //   liveUrl: "https://chat-app-demo.com",
  //   imageUrl: "messages-square.svg",
  // },
];

const letters = "Projects".split("");

export function Projects() {
  return (
    <section id="projects" className="py-16 px-6 mt-20 md:mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative inline-block w-full text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl text-center font-bold text-white"
          >
            My{" "}
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
                Projects
              </span>
            </span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {projects.map((project, index) => {
            // Calculate row index
            const rowIndex = Math.floor(index / 3);
            // Get all projects in the same row
            const rowProjects = projects.slice(
              rowIndex * 3,
              (rowIndex + 1) * 3
            );
            // Find the maximum description length in the row
            const maxDescriptionLength = Math.max(
              ...rowProjects.map((p) => p.description.length)
            );
            // Find the maximum number of technologies in the row
            const maxTechnologies = Math.max(
              ...rowProjects.map((p) => p.technologies.length)
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-2"
              >
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-4 border-white h-full flex flex-col">
                  <CardHeader className="flex-shrink-0 p-6">
                    <div className="overflow-hidden rounded-lg mb-6 h-48 relative">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-xl mb-3">
                      {project.title}
                    </CardTitle>
                    <CardDescription
                      className="text-sm"
                      style={{
                        minHeight: `${
                          Math.ceil(maxDescriptionLength / 50) * 1.5
                        }rem`,
                      }}
                    >
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <div
                      className="flex flex-wrap gap-3"
                      style={{
                        minHeight: `${Math.ceil(maxTechnologies / 3) * 2}rem`,
                      }}
                    >
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-4 mt-auto p-6">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
