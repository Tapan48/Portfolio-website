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
    title: "Task Management API",
    description:
      "A RESTful API built with Express and TypeScript for managing tasks and projects. Features user authentication, role-based access control, and comprehensive documentation.",
    technologies: ["Express.js", "TypeScript", "MongoDB", "Docker", "JWT"],
    githubUrl: "https://github.com/yourusername/task-api",
    liveUrl: "https://task-api-docs.com",
    imageUrl: "task-api.svg",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js 14, featuring user authentication, shopping cart, payment processing with Stripe, and order management.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Tailwind",
    ],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    imageUrl: "shopping-bag.svg",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A modern chat application with real-time messaging, file sharing, and user presence. Features end-to-end encryption and message persistence.",
    technologies: [
      "React",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Redis",
      "WebRTC",
    ],
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://chat-app-demo.com",
    imageUrl: "messages-square.svg",
  },
  {
    title: "AI Task Manager",
    description:
      "An AI-powered task management system that helps prioritize tasks, set deadlines, and provides smart suggestions for task completion.",
    technologies: [
      "Next.js",
      "OpenAI API",
      "Node.js",
      "PostgreSQL",
      "Tailwind",
    ],
    githubUrl: "https://github.com/yourusername/ai-tasks",
    liveUrl: "https://ai-tasks-demo.com",
    imageUrl: "brain-circuit.svg",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A comprehensive dashboard for social media analytics, featuring real-time data visualization, sentiment analysis, and automated reporting.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://social-dashboard-demo.com",
    imageUrl: "layout-dashboard.svg",
  },
  {
    title: "Fitness Tracking App",
    description:
      "A mobile-responsive fitness tracking application with workout planning, progress monitoring, and nutrition tracking features.",
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    liveUrl: "https://fitness-app-demo.com",
    imageUrl: "dumbbell.svg",
  },
];

const letters = "Projects".split("");

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative inline-block w-full text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-7xl text-white font-bold"
          >
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Projects
            </span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-2"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-4 border-white h-[500px] flex flex-col">
                <CardHeader className="flex-shrink-0 p-6">
                  <div className="overflow-hidden rounded-lg mb-6 h-48">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl mb-3">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <div className="flex flex-wrap gap-3">
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
          ))}
        </div>
      </div>
    </section>
  );
}
