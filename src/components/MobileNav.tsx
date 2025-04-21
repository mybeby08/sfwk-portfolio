"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
export const MobileNav = () => {
  const links = [
    { name: "home", link: "/" },
    { name: "services", link: "/services" },
    { name: "resume", link: "/resume" },
    { name: "work", link: "/work" },
    { name: "contact", link: "/contact" },
  ];
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <div className="mb-12 text-5xl mt-32 text-center items-center">Menu</div>
        <nav className="flex flex-col gap-8 items-center">
          {links.map((link, index) => (
            <SheetClose asChild key={index}>
              {/* Close the sheet when a link is clicked */}
              <Link
                key={index}
                href={link.link}
                className={`${
                  link.link === path && "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
      <SheetTitle className="sr-only">menu</SheetTitle>
    </Sheet>
  );
};
