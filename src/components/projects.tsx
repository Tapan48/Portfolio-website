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
    title: "Project 1",
    description:
      "A brief description of project 1. What it does and its main features.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.com",
    imageUrl: "/project1.png",
  },
  {
    title: "Project 2",
    description:
      "A brief description of project 2. What it does and its main features.",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.com",
    imageUrl: "/project2.png",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart functionality, user authentication, and payment processing.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    imageUrl: "/ecommerce.png",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chatbot powered by machine learning that provides customer support and information.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    githubUrl: "https://github.com/yourusername/ai-chat",
    liveUrl: "https://ai-chat-demo.com",
    imageUrl: "/ai-chat.png",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A comprehensive dashboard for managing and analyzing social media metrics across multiple platforms.",
    technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://social-dashboard-demo.com",
    imageUrl: "/dashboard.png",
  },
  {
    title: "Fitness Tracking App",
    description:
      "A mobile-first web application for tracking workouts, nutrition, and fitness goals with data visualization.",
    technologies: ["React Native", "Redux", "Firebase", "Chart.js"],
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    liveUrl: "https://fitness-tracker-demo.com",
    imageUrl: "/fitness.png",
  },
];

const letters = "Projects".split("");

export function Projects() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative inline-block w-full text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-7xl text-white font-bold"
          >
            My <span className="text-white">Projects</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardHeader>
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
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
