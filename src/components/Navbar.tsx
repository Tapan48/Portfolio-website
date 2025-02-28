"use client";

import ModeToggle from "@/components/ui/mode-toggle";


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
}

export function Navbar() {
  return (
    <div className="fixed top-0 h-16 w-full z-50 flex justify-between items-center px-4 py-2 bg-background/80 backdrop-blur-sm border-b bg">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          TG
        </span>
      </Link>

      <div className="flex items-center justify-end gap-4">
        <nav className="hidden md:flex items-center justify-evenly space-x-6 mr-4">
          {components.map((component) => (
            <Link
              key={component.title}
              href={component.href}
              className="text-sm font-bold transition-colors hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(component.href);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {component.title}
            </Link>
          ))}
        </nav>

        <NavigationMenu className="md:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <ModeToggle />
      </div>
    </div>
  );
}
