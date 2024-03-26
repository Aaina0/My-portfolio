"use client";
import Brain from "@/components/brain";
import { motion } from "framer-motion";
import { useRef } from "react";

function AboutPage() {
  const skillsRef = useRef(null);

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY */}
          <div className="">
            <div className="flex flex-col gap-12 justify-center">
              <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
              <p className="text-lg">
                As a beginner web developer, I&apos;m diving into the MERN
                stack, with a keen focus on MongoDB, Express.js, and Node.js.
                I&apos;ve got my hands dirty with JavaScript, especially
                React.js and Next.js, to craft UIs. Using Tailwind CSS, I&apos;m
                exploring the world of visually appealing and responsive
                websites.
              </p>
              <span className="italic">
                Driven by curiosity and a strong desire to learn, I&apos;m on a
                mission to deliver dynamic web solutions that cater to client
                needs. Check out my portfolio for a glimpse into my journey!
              </span>

              <div
                onClick={() => scrollToSkills()}
                style={{ cursor: "pointer" }}
                className="self-end"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
                </svg>
              </div>
            </div>
          </div>
          {/* SKILLS */}

          <div ref={skillsRef} className="flex flex-col gap-12 justify-center pb-20">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                HTML5
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                CSS3
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                TAILWIND CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                JAVASCRIPT
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                REACT JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                NEXT JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                NODE JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                MONGO DB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">
                EXPRESS JS
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
          <Brain/>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
