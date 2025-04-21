"use client";
import { Photo } from "@/components/Photo";
import { Social } from "@/components/Social";
import { Stats } from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pl-8 xl:pb-6">
          <div className="order-2 xl:order-none text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-4">
              Hello I&aposm <br />
              <span className="text-accent">Kevin Farley</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/80">
              I am a software developer with a passion for creating innovative
              solutions. I have experience in various programming languages and
              frameworks, and I am always eager to learn new technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-4">
              <Button className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
