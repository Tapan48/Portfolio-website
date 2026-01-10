"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
const roles = ["Data Engineer", "Data Analyst", "Tapan Garasangi"];
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

  const handleViewResume = () => {
    // Replace this URL with your Google Drive shared link
    const driveUrl =
      "https://drive.google.com/file/d/1EmBMM5V--2zsn9SP9-XDo1Gm8jbfcXR-/view?usp=sharing";
    window.open(driveUrl, "_blank");
  };

  const handleContactMe = () => {
    // Replace with your LinkedIn profile URL
    const linkedInUrl =
      "https://www.linkedin.com/in/tapan-garasangi-0ab9b7225/";
    window.open(linkedInUrl, "_blank");
  };

  return (
    <div
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen px-4 md:px-10 pt-4 md:pt-0 lg:pt-0 gap-6 md:gap-0"
    >
      <div className="flex flex-col items-center md:items-start justify-center space-y-8 text-center md:text-left w-full md:w-1/2 md:ml-8 lg:ml-32 -mt-24 md:-mt-32">
        <div className="space-y-3">
          <h1 className="text-2xl md:text-[28px] lg:text-6xl font-bold text-white h-[40px] md:h-[50px] lg:h-[80px] flex items-center justify-center md:justify-start">
            Hello, I&apos;m
          </h1>
          <div className="flex items-center justify-center md:justify-start h-[60px] md:h-[80px] lg:h-[120px]">
            <div className="text-3xl md:text-[36px] lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text whitespace-nowrap">
              {text}
            </div>
            <div className="w-[4px] md:w-[6px] h-[45px] md:h-[65px] lg:h-[95px] bg-purple-500 ml-1 animate-blink" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-10 pt-4">
          <Button
            variant="default"
            size="lg"
            className="px-6 md:px-8 py-6 md:py-7 text-lg md:text-[20px] font-bold border-4 border-blue-500 rounded-full"
            onClick={handleViewResume}
          >
            Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-4 md:px-5 py-6 md:py-7 text-lg md:text-[20px] rounded-full"
            onClick={handleContactMe}
          >
            Contact Me
          </Button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-8 md:-mt-32 md:mr-16">
        <div className="rounded-full border-4 p-2 bg-gray-200 w-[200px] h-[200px] md:w-[400px] md:h-[400px]">
          <Image
            src="/webdev.png"
            alt="Web Development Illustration"
            width={400}
            height={400}
            className="object-cover rounded-full shadow-lg w-full h-full"
            priority
            unoptimized // Add this prop
          />
        </div>
      </div>
    </div>
  );
}
