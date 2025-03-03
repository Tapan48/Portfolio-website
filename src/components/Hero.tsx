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
    <div className="flex flex-row  items-start justify-evenly w-full h-auto sm:h-[80vh] px-10 pt-32 ">
      <div className="flex flex-col  items-start justify-evenly space-y-8 text-left w-1/2 mt-18 -mr-14">
        <div className="space-y-4">
          <h1 className="text-[30px] font-bold text-white sm:text-8xl">
            Hello, I&apos;m
          </h1>
          <div className="flex items-center ">
            <div className="text-[36px] sm:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              {text}
            </div>
            <div className="w-[6px] h-[55px] sm:h-[85px] bg-purple-500 ml-1 animate-blink" />
          </div>
        </div>

        <div className="flex flex-colsm:flex-row gap-10  pt-6">
          <Button
            variant="default"
            size="lg"
            className="px-8 py-7 text-[20px] font-bold border-4 border-blue-500 rounded-full"
            onClick={() => window.open("/path-to-resume.pdf", "_blank")}
          >
            Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-5 py-7 text-[20px] rounded-full bg"
          >
            Contact Me
          </Button>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-start  h-full -mt-16 -ml-10">
        <div className="rounded-full border-4 p-2 bg-gray-200">
          <Image
            src="/webdev.png"
            alt="Web Development Illustration"
            width={400}
            height={400}
            className="object-cover rounded-full shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
