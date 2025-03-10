"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    {
      icon: (
        <Image
          src="/x.svg"
          alt="X (Twitter)"
          width={30}
          height={30}
          className="mt-1"
        />
      ),
      href: "https://x.com/GarasangiTapan",
      label: "Twitter",
    },
    {
      icon: (
        <Image src="/instagram.svg" alt="Instagram" width={40} height={40} />
      ),
      href: "https://www.instagram.com/tapan_1729/",
      label: "Instagram",
    },
    {
      icon: <Image src="/github.svg" alt="GitHub" width={40} height={40} />,
      href: "https://github.com/Tapan48",
      label: "GitHub",
    },
    {
      icon: <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />,
      href: "https://www.linkedin.com/in/tapan-garasangi-0ab9b7225/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="w-full bg-black text-white py-6 md:py-3">
      <div className="w-full mx-auto px-4 md:px-6">
        <div className="flex flex-col max-w-7.1xl w-full space-y-8 md:space-y-6">
          <div className="space-y-8 gap-12">
            <h2 className="text-xl font-bold text-center md:text-left">
              Find and connect with me on:
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-11">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-base">
              <span className="font-semibold text-white/80">Email:</span>
              <Link
                href="mailto:tapangarasangi@gmail.com"
                className="hover:text-white/80 transition-colors break-all md:break-normal"
              >
                tapangarasangi@gmail.com
              </Link>
              <span className="text-blue-500 text-sm">↗</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end text-base text-white/80">
            <p className="text-center md:text-right md:mr-17">
              © Made with ❤️ by Tapan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
