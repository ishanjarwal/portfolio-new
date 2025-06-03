"use client";
import { navLinks } from "@/constants/constants";
import { ThemeContext } from "@/contexts/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const pathname = usePathname();
  const [page, setPage] = useState("");
  useEffect(() => {
    setPage(pathname);
    console.log(pathname);
  }, [pathname]);

  return (
    <div className="rounded-bl-3xl px-8 flex justify-between items-center space-x-2 shadow-xl border-l-2 border-b-2 border-border dark:border-dark-border">
      {navLinks.map((item, idx) => (
        <Link
          href={item.link}
          className={" relative uppercase px-4 py-6 text-sm"}
        >
          <span
            className={`${
              page.split("/")[1] === item.page
                ? "bg-pri text-black dark:text-black font-bold"
                : "dark:text-white"
            } relative uppercase p-1 text-sm font-bold`}
          >
            {item.display}
          </span>
        </Link>
      ))}
      <a
        href="https://github.com/ishanjarwal"
        rel="noopener noreferrer"
        target="_blank"
        className="text-text dark:text-dark-text text-2xl px-2"
      >
        <FaGithub />
      </a>
      <button
        onClick={toggleTheme}
        className="text-text dark:text-dark-text text-2xl px-2 outline-none"
      >
        <MdDarkMode />
      </button>
    </div>
  );
};

export default Header;
