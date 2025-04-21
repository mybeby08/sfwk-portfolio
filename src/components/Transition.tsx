"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const Transition = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <AnimatePresence>
      <div key={path}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen bg-primary fixed top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};
