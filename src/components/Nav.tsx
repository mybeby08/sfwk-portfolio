"use client";
// This is a client component';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const Nav = () => {
  const path = usePathname();
  const links = [
    { name: "home", link: "/" },
    { name: "services", link: "/services" },
    { name: "resume", link: "/resume" },
    { name: "work", link: "/work" },
    { name: "contact", link: "/contact" },
  ];
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className={`${
            link.link === path && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
