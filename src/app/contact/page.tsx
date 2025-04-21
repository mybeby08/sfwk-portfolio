"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
const Page = () => {
  //in const info make a linkedIn link open in new tab

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      text: "123-456-7890",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      text: "katisfish@gmail.com",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Address",
      text: "Somewhere in, Eastern Cape, South Africa",
    },
    {
      icon: <FaLinkedinIn />,
      title: "LinkedIn",
      text: "Contact me on LinkedIn",
      link: "https://www.linkedin.com/in/shefwkev/",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 2.4, ease: "easeIn", delay: 0.4 },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-3 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I am always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem disabled value="mobile">
                      Mobile Development
                    </SelectItem>
                    <SelectItem disabled value="design">
                      Design
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Type your message here."
                className="h-[200px]"
              />
              <Button className="max-w-40 rounded-md mx-auto">Send</Button>
            </form>
          </div>
          <div className="flex-1 items-center flex xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 group">
                    <div className="w-[52px] h-[52px] xl:w-[78px] xl:h-[78px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[32px] group-hover:text-accent/60">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 group-hover:text-accent/60">
                      <p className="text-white/60">{item.title}:</p>
                      {item.link ? (
                        <Link
                          href={item.link}
                          className="text-accent group-hover:underline text-xl"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.text}
                        </Link>
                      ) : (
                        <p className="text-xl">{item.text}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
