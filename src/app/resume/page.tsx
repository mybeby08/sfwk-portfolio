"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaIdBadge,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";

const Page = () => {
  const about = {
    title: "About Me",
    description:
      "I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. I have a strong foundation in front-end technologies and a growing expertise in back-end development.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Kevin Farley",
      },
      {
        fieldName: "Phone",
        fieldValue: "+27 609715881",
      },
      {
        fieldName: "Experience",
        fieldValue: "6 years",
      },
      {
        fieldName: "Location",
        fieldValue: "South Africa",
      },
      {
        fieldName: "Languages",
        fieldValue: "Afrikaans, English",
      },
      {
        fieldName: "Email",
        fieldValue: "katisfish@gmail.com",
      },
    ],
  };

  const exp = {
    icon: <FaIdBadge />,
    title: "My Experience",
    description:
      "I have worked on various projects, ranging from small personal websites to large-scale applications. My experience includes working with both front-end and back-end technologies.",
    resume: [
      {
        company: "Company A",
        position: "Front-end Developer",
        duration: "Jan 2020 - Present",
      },
      {
        company: "Company B",
        position: "Back-end Developer",
        duration: "Jan 2018 - Dec 2019",
      },
      {
        company: "Company C",
        position: "Full Stack Developer",
        duration: "Jan 2016 - Dec 2017",
      },
      {
        company: "Company D",
        position: "Intern",
        duration: "Jan 2015 - Dec 2015",
      },
      {
        company: "Company E",
        position: "Junior Developer",
        duration: "Jan 2014 - Dec 2014",
      },
    ],
  };

  const education = {
    icon: <FaIdBadge />,
    title: "My Education",
    description:
      "I have a degree in Computer Science from XYZ University, where I gained a solid foundation in programming and software development.",
    resume: [
      {
        institution: "XYZ University",
        degree: "Bachelor of Science in Computer Science",
        duration: "Jan 2010 - Dec 2013",
      },
      {
        institution: "ABC College",
        degree: "Diploma in Web Development",
        duration: "Jan 2008 - Dec 2009",
      },
    ],
  };

  const skills = {
    icon: <FaIdBadge />,
    title: "My Skills",
    description:
      "I have a diverse skill set that includes front-end and back-end technologies, as well as design and development tools.",
    frameworks: [
      {
        icon: <FaHtml5 />,
        name: "HTML5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS3",
      },
      {
        icon: <SiTailwindcss />,
        name: "TailwindCSS",
      },
      {
        icon: <FaJs />,
        name: "JavaScript",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
      },
      {
        icon: <FaReact />,
        name: "React",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
      },
      {
        icon: <FaNodeJs />,
        name: "Node.js",
      },
      {
        icon: <SiExpress />,
        name: "Express.js",
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
      },
      {
        icon: <SiPostgresql />,
        name: "PostgreSQL",
      },
    ],
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          ease: "easeIn",
          duration: 0.4,
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience">
              <div className="flex flex-col gap-[40px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{exp.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {exp.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {exp.resume.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[16r4px] py-6 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education">
              <div className="flex flex-col gap-[40px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.resume.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[16r4px] py-6 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-2 gap-3">
                  {skills.frameworks.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-7xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>{skill.name}</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[900px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Page;
