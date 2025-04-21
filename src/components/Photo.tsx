"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 2,
            ease: "easeIn",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2.4,
              ease: "easeInOut",
            },
          }}
          className="absolute w-[298px] h-[298px] xl:w-[358px] xl:h-[358px] mix-blend-lighten"
        >
          <Image
            priority
            quality={100}
            fill
            alt=""
            src="/assets/me.png"
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="w-[300px] xl:w-[360px] h-[300px] xl:h-[360px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            //stroke="#00ff99"
            stroke="#de2f53"
            strokeWidth={8}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
