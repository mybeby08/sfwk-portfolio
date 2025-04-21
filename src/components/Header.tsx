import Link from "next/link";
import { Button } from "./ui/button";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  const navs = [{ name: "Hire Me", link: "/#contact" }];
  return (
    <header className="py-2 xl:py-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Kevin<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
