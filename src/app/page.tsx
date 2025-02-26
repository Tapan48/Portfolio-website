"use client";

import { Hero } from "@/components/Hero";
export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{ backgroundColor: "oklch(0.205 0 0)" }}
    >
      <Hero />
    </main>
  );
}
