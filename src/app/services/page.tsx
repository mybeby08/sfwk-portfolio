"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const Page = () => {
  const services = [
    {
      num: "01",
      name: "Web Development",
      desc: " I build responsive and user-friendly websites using the latest technologies.",
      icon: <BsArrowDownRight />,
      link: "",
    },
    {
      num: "02",
      name: "Mobile Development",
      desc: " I create mobile applications for both iOS and Android platforms.",
      icon: <BsArrowDownRight />,
      link: "",
    },
    {
      num: "03",
      name: "UI/UX Design",
      desc: " I design intuitive and engaging user interfaces for web and mobile applications.",
      icon: <BsArrowDownRight />,
      link: "",
    },
    {
      num: "04",
      name: "SEO Optimization",
      desc: " I optimize websites for search engines to improve visibility and ranking.",
      icon: <BsArrowDownRight />,
      link: "",
    },
  ];
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center group"
              >
                <div className="w-full flex justify-between items-center">
                  <span className="text-5xl font-extrabold">{service.num}</span>
                  <Link href={service.link}>{service.icon}</Link>
                </div>
                <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.name}
                </h2>
                <p>{service.desc}</p>
                <div className="border-b border-accent w-full" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
