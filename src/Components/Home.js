import "../tailwind.css";
import React, { useState } from "react";
import userimg from "../Images/1.png";
import { Highlight, Box, Text } from "@chakra-ui/react";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <main
      className="relative h-64 overflow-hidden font-mono bg-white dark:bg-gray-800"
      id="home"
    >
      <header className="z-30 flex items-center w-full h-24 sm:h-32">
        <div className="container flex items-center justify-between px-6 mx-auto">
          <div className="flex items-center text-3xl font-black text-gray-800 uppercase dark:text-white">
            <svg
              width="25"
              height="25"
              viewBox="0 0 1792 1792"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Your SVG Path here */}
            </svg>
            <span className="mt-1 ml-3 text-xs">gjinprelvukaj1@gmail.com</span>
          </div>
          <div className="flex items-center">
            <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
              <a href="#home" className="flex px-6 py-2 hover:text-black">
                Home
              </a>
              <a href="#projects" className="flex px-6 py-2 hover:text-black">
                Projects
              </a>
              <a href="#goto" className="flex px-6 py-2 hover:text-black">
                Timeline
              </a>
              <a href="#contact" className="flex px-6 py-2 hover:text-black">
                Contact
              </a>
            </nav>
            <button
              onClick={toggleMenu}
              className="flex flex-col ml-4 lg:hidden"
            >
              <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
              <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
              <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            </button>
          </div>
        </div>
      </header>
      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <nav className="text-gray-800 uppercase font-sen dark:text-white">
            <a href="#home" className="block px-4 py-2 hover:text-black">
              Home
            </a>
            <a href="#projects" className="block px-4 py-2 hover:text-black">
              Projects
            </a>
            <a href="#goto" className="block px-4 py-2 hover:text-black">
              Timeline
            </a>
            <a href="#contact" className="block px-4 py-2 hover:text-black">
              Contact
            </a>
          </nav>
        </div>
      )}
      {/* Your existing content */}
      <div className="relative z-20 h-82 flex items-center">
        <div className="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
          <div className="flex flex-col">
            <img
              src={userimg}
              className="mx-auto rounded-full w-28"
              alt="userimg"
            />
            <p className="my-6 text-3xl text-center dark:text-white">
              Hi, I'm Gjin
            </p>
            <h2 className="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-6xl dark:text-white">
              <Box>
                <Text mt="-6" fontWeight="bold">
                  <Highlight
                    query={["Full"]}
                    styles={{
                      px: "2",
                      py: "1",
                      color: "white",
                      rounded: "full",
                      bg: "black",
                    }}
                  >
                    Full Stack Developer
                  </Highlight>
                </Text>
                <Text fontWeight="bold" mt="2">
                  <Highlight
                    query={["Java"]}
                    styles={{
                      px: "2",
                      py: "1",
                      color: "white",
                      rounded: "full",
                      bg: "black",
                    }}
                  >
                    Junior Java Developer
                  </Highlight>
                </Text>
                <Text fontWeight="bold" mt="2">
                  <Highlight
                    query={["Engineer"]}
                    styles={{
                      px: "2",
                      py: "1",
                      color: "white",
                      rounded: "full",
                      bg: "black",
                    }}
                  >
                    Software Engineer
                  </Highlight>
                </Text>
              </Box>
            </h2>
            <div className="flex items-center justify-center ">
              <a
                href="#contact"
                className="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 dark:text-white hover:bg-gray-800 hover:text-white text-md"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
