import "../tailwind.css";
import React from "react";
import userimg from "../Images/1.png";
import { Heading, Highlight, Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <main
      class="relative h-64 overflow-hidden font-mono gb-white dark:bg-gray-800"
      id="home"
    >
      <header class="z-30 flex items-center w-full h-24 sm:h-32">
        <div class="container flex items-center justify-between px-6 mx-auto">
          <div class="flex items-center text-3xl font-black text-gray-800 uppercase dark:text-white">
            <svg
              width="25"
              height="25"
              viewBox="0 0 1792 1792"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"></path>
            </svg>
            <span class="mt-1 ml-3 text-xs">gjinprelvukaj1@gmail.com</span>
          </div>
          <div class="flex items-center">
            <nav class="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
              <a href="#home" class="flex px-6 py-2 hover:text-black">
                Home
              </a>
              <a href="#skills" class="flex px-6 py-2 hover:text-black">
                Skills
              </a>
              <a href="#goto" class="flex px-6 py-2 hover:text-black">
                Timeline
              </a>
              <a href="#contact" class="flex px-6 py-2 hover:text-black">
                Contact
              </a>
            </nav>
            <button class="flex flex-col ml-4 lg:hidden">
              <span class="w-6 h-1 mb-1 bg-gray-800 dark:gb-white"> w</span>
              <span class="w-6 h-1 mb-1 bg-gray-800 dark:gb-white">w </span>
              <span class="w-6 h-1 mb-1 bg-gray-800 dark:gb-white">w</span>
            </button>
          </div>
        </div>
      </header>
      <div class="relative z-20 h-82 flex items-center">
        <div class="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
          <div class="flex flex-col">
            <img src={userimg} class="mx-auto rounded-full w-28" />
            <p class="my-6 text-3xl text-center dark:text-white">
              Hi, I'm Gjin
            </p>
            <h2 class="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-6xl dark:text-white">
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
            <div class="flex items-center justify-center ">
              <a
                href="#contact"
                class="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:text-gray-800 dark:gb-white hover:dark:bg-gray-100 dark:text-white hover:bg-gray-800 hover:text-white text-md"
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
