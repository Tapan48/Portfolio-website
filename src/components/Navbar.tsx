"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Projects",
    href: "#projects",
    description: "Check out some of my recent work and side projects.",
  },
  {
    title: "Skills",
    href: "#skills",
    description: "Technologies and tools I work with.",
  },
  {
    title: "Work Experience",
    href: "#workx",
    description: "My professional journey and work experience.",
  },
  {
    title: "Contact",
    href: "#contact",
    description: "Get in touch with me.",
  },
];

interface ListItemProps {
  className?: string;
  title: string;
  href: string;
  children: React.ReactNode;
}

function ListItem({ className, title, href, children }: ListItemProps) {
  const router = useRouter();

  return (
    <li className={className}>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className="text-lg font-medium leading-none text-white">
          {title}
        </div>
        <p className="line-clamp-2 text-base leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const projectsSection = document.querySelector("#projects");

      if (projectsSection) {
        const projectsTop = projectsSection.getBoundingClientRect().top;

        // Hide navbar when reaching projects section
        if (projectsTop <= 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the sheet when nav item is clicked
    }
  };

  return (
    <div
      className={`fixed top-0 h-16 w-full z-50 flex justify-between items-center px-4 py-2 bg-[oklch(0.13_0.028_261.692)]/80 backdrop-blur-sm border-b transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-32">
        {" "}
        {/* Added fixed width container */}
        <Link href="/" className="flex items-center justify-end">
          <span className="text-2xl font-bold text-white">Tapan</span>
        </Link>
      </div>

      <div className="flex items-center justify-end gap-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-evenly space-x-20 mr-4">
          {components.map((component) => (
            <Link
              key={component.title}
              href={component.href}
              className="text-lg font-bold transition-all duration-300 hover:text-white/70 text-white hover:scale-110 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(component.href);
              }}
            >
              {component.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-[oklch(0.13_0.028_261.692)] border-none"
          >
            <nav className="flex flex-col gap-6 mt-10">
              {components.map((component) => (
                <Link
                  key={component.title}
                  href={component.href}
                  className="text-lg font-bold transition-all duration-300 text-white hover:text-white/70"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(component.href);
                  }}
                >
                  {component.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
