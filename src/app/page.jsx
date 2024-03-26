"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full flex items-center justify-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-full lg:h-auto lg:w-1/2 relative rounded-lg overflow-hidden flex items-center justify-center">
          {/* Adjust height as needed */}
          <div className="w-full h-full relative">
            <Image
              src="/hero1.png"
              alt="Hero Image"
              layout="fill"
              objectFit="contain"
              className="object-contain"
            />
          </div>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 items-center justify-center">
          <h1 className="text-2xl font-bold md:text-4xl">
            Crafting Digital Experience, Developing Tomorrow
          </h1>
          <p className="md:text-base">
            Welcome to my portfolio! I&apos;m Aaina Najaf, a passionate beginner
            in MERN stack development, eager to learn and grow. Here, I present
            my projects, demonstrating my skills in MongoDB, Express.js,
            React.js, and Node.js. From crafting responsive designs to building
            interactive interfaces, join me on my journey as I strive to expand
            my knowledge and make meaningful contributions to the world of web
            development.
          </p>
          <div className="w-full flex gap-4">
            <Link
              href="/aaina.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg ring-1 ring-black bg-black text-white"
            >
              My Resume
            </Link>

            <Link href="/contact" className="p-3 rounded-lg ring-1 ring-black">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
