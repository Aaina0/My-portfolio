"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "YouTube Clone",
    desc: "Creating a YouTube replica with Next.js, Tailwind CSS, and Shdcn UI - an innovative project combining powerful frontend technologies.crafting a dynamic platform akin to the world's leading video-sharing platform.",
    img: "/pro2.png",
    link: "https://youtube-six-tau.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "E-Commerce API Store",
    desc: "Completed a responsive eCommerce website utilizing React JS and Tailwind CSS.  dynamic responsiveness for an enhanced online shopping experience.",
    img: "/pro3.png",
    link: "https://commerce-app-iota.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Best Eats Restaurants",
    desc: "Experience the culinary journey  responsive across all devices. Fueled by the enchantment of Tailwind CSS, explore a visually captivating interface that tantalizes taste buds and ignites gastronomic adventures.",
    img: "/pro4.png",
    link: "https://e-commerce-psi-silk.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-pink-300",
    title: "Learning Project",
    desc: "Discover a Next.js and Tailwind CSS-powered learning platform - Seamlessly navigate through educational resources responsive layouts, paving the way for effortless learning journeys",
    img: "/pro5.png",
    link: "https://roundup-three.vercel.app/",
  },
  {
    id: 5,
    color: "from-pink-300 to-red-300",
    title: "MERN Auth-App",
    desc: "Embark on secure authentication journeys with a MERN Stack app adorned in Tailwind CSS. Seamlessly blend frontend elegance with backend robustness,  prioritizing security and reliability.",
    img: "/pro6.png",
    link: "https://mern-app-tdx3.vercel.app/",
  },
  {
    id: 6,
    color: "from-red-300 to-blue-300",
    title: "Portfolio Project",
    desc: "Crafted using Next.js and Tailwind CSS,  delivering a polished and dynamic user experience.",
    img: "/pro7.png",
    link: "https://aaina-portfolio.vercel.app/",
  },
];

function PortfolioPage() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white">
                  {" "}
                  {/* Reduced gap from 8 to 4 */}
                  <h1 className="text-base font-bold md:text-xl lg:text-2xl xl:text-4xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="w-80 md:96 lg:w-[500px] lg:text-base xl:w-[600px]">
                    {item.desc}
                  </p>
                  <div className="flex justify-end">
                    {" "}
                    {/* Removed Link wrapper */}
                    <Link
                      href={item.link}
                      className="p-1 text-xs md:p-1 md:text-md lg:p-2 lg:text-lg bg-white text-gray-600 font-semibold m-1 rounded"
                    >
                      {" "}
                      {/* Changed Link to anchor tag */}
                      See Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-6 items-center justify-center text-center">
        <h1 className="text-6xl">Do You Have Project?</h1>{" "}
        {/* Reduced font size from 8xl to 6xl */}
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath">
                Junior MERN-Stack Developer
              </textPath>
            </text>
          </motion.svg>
          <a
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioPage;
