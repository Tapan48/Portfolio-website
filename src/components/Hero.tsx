"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const roles = ["Software Engineer", "Fullstack Developer", "Tapan Garasangi"];
const TYPING_SPEED = 50;
const DELETING_SPEED = 50;
const PAUSE_TIME = 1000;

export function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [delta, setDelta] = useState(TYPING_SPEED);

  useEffect(() => {
    let timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1)); // Add one character to the text

        // If we've finished typing
        if (text.length === currentRole.length) {
          setIsDeleting(true);
          setDelta(PAUSE_TIME); // Pause before starting to delete
          return;
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        // If we've finished deleting
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setDelta(TYPING_SPEED);
          return;
        }
      }

      setDelta(isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }, delta);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, delta]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white sm:text-6xl">
          Hello, I&apos;m
        </h1>
        <div className="flex items-center justify-center">
          <div className="text-3xl sm:text-5xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            {text}
          </div>
          <div className="w-[3px] h-[40px] sm:h-[56px] bg-purple-500 ml-1 animate-blink" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button
          variant="default"
          size="lg"
          className="px-8"
          onClick={() => window.open("/path-to-resume.pdf", "_blank")}
        >
          Download Resume
        </Button>
        <Button variant="outline" size="lg" className="px-8">
          Contact Me
        </Button>
      </div>
    </div>
  );
}
