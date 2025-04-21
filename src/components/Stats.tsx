"use client";
import CountUp from "react-countup";

export const Stats = () => {
  const stats = [
    { count: 10, text: "Projects" },
    { count: 7, text: "Years of Experience" },
    { count: 8, text: "Technologies mastered" },
    { count: 500, text: "Github Commits" },
  ];
  return (
    <section className="pt-2 pb-4 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={stat.count}
                  duration={5}
                  delay={2}
                  className="text-3xl xl:text-6xl font-extrabold text-accent"
                />
                <span
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
