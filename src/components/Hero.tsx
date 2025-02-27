"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
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
    <div className="flex flex-row items-center justify-evenly gap-x-10 w-full h-auto sm:h-[80vh] bg-purple-500 mr-30">
      <div className="flex flex-col items-center justify-center space-y-8 text-center bg-red-500 w-1/2 h-full">
        <div className="space-y-4">
          <h1 className="text-50xl font-bold text-white sm:text-6xl">
            Hello, I&apos;m
          </h1>
          <div className="flex items-center justify-center">
            <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              {text}
            </div>
            <div className="w-[3px] h-[40px] sm:h-[56px] bg-purple-500 ml-1 animate-blink" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 mt-8">
          <Button
            variant="default"
            size="lg"
            className="px-8 border-4 border-blue-500  rounded-full"
            onClick={() => window.open("/path-to-resume.pdf", "_blank")}
          >
            Resume
          </Button>
          <Button variant="outline" size="lg" className="px-8 rounded-full bg">
            Contact Me
          </Button>
        </div>
      </div>

      <div className="w-60 h-full sm:w-60 sm:h-60 bg-green-500">
        <Image
          src="/webdev.png"
          alt="Web Development Illustration"
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-full shadow-lg"
          priority
        />
      </div>
    </div>
  );
}
