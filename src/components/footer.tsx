"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    {
      icon: <Image src="/x.svg" alt="X (Twitter)" width={40} height={40} />,
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
    <footer className="w-full bg-black text-white py-3">
      <div className="w-full mx-auto px-6">
        <div className="flex flex-col max-w-7.1xl w-full space-y-6 ml-0">
          <div className="space-y-8 gap-12 ">
            <h2 className="text-xl font-bold">Find and connect with me on:</h2>

            <div className="flex gap-11 ">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="text-white/80 hover:text-white transition-colors justify-between"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <div className="flex items-center rounded-lg gap-3 text-base">
              <span className="font-semibold text-white/80">Email:</span>
              <Link
                href="mailto:tapangarasangi@gmail.com"
                className="hover:text-white/80 transition-colors"
              >
                tapangarasangi@gmail.com
              </Link>
              <span className="text-blue-500 text-sm">↗</span>
            </div>
          </div>

          <div className="flex justify-end text-base text-white/80">
            <p className="mr-17">
              © Made with ❤️ by Tapan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
