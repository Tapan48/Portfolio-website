"use client";

import { Footer } from "@/components/footer";
import { Hero } from "@/components/Hero";
import { MessageMe } from "@/components/MessageMe";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { WorkX } from "@/components/workx";
export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{ backgroundColor: "oklch(0.205 0 0)" }}
    >
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <WorkX />
      <MessageMe />
      <Footer />
    </main>
  );
}
