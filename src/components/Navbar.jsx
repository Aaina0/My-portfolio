"use client";

import Link from "next/link";
import { useState } from "react";
import { TfiGithub, TfiLinkedin, TfiEmail } from "react-icons/tfi";
import { SiBehance } from "react-icons/si";
import NavLink from "./NavLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

function Navbar() {
  const { open, setOpen } = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title}/>
        ))}
      </div>
      {/* LOGO */}
      <div className="sm:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Aaina</span>
          <span className="w-16 h-8 rounded bg-white text-black flex items-center justify-center">
            Devloper
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-5 w-1/3">
        <Link href="#">
          <TfiGithub size={20} />
        </Link>
        <Link href="#">
          <TfiLinkedin size={20} />
        </Link>
        <Link href="#">
          <SiBehance size={20} />
        </Link>
        <Link href="#">
          <TfiEmail size={20} />
        </Link>
      </div>
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
