"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { StairEffect } from "@/components/StairEffect";

export const Stairs = () => {
  const path = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={path}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <StairEffect />
          </div>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
            className="h-screen w-screen bg-primary fixed top-0 pointer-events-none"
          />
        </div>
      </AnimatePresence>
    </>
  );
};
