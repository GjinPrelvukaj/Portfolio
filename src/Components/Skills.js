import "../tailwind.css";
import { Progress } from "@chakra-ui/react";

export default function Skills() {
  return (
    <div class="flex place-content-center my-32" id="skills">
      <div className="flex">
        <p className="mr-48 mt-32 text-5xl">
          The Skills
          <br />
          That I achieved
        </p>
      </div>
      <div class="justify-center w-96 align-center">
        <div>
          <span id="ProgressLabel" class=" ">
            HTML
          </span>

          <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow="100"
            class="block rounded-full bg-gray-200"
          >
            <span
              class="block h-4 rounded-full bg-black text-center text-[10px]/4"
              style={{ width: "100%" }}
            >
              <span class="font-bold text-white"> 100% </span>
            </span>
          </span>
        </div>
        <div class="mt-6">
          <span id="ProgressLabel" class="">
            CSS
          </span>

          <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow="100"
            class="block rounded-full bg-gray-200"
          >
            <span
              class="block h-4 rounded-full bg-black text-center text-[10px]/4"
              style={{ width: "100%" }}
            >
              <span class="font-bold text-white"> 100% </span>
            </span>
          </span>
        </div>
        <div class="mt-6">
          <span id="ProgressLabel" class="">
            React
          </span>

          <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow="80"
            class="block rounded-full bg-gray-200"
          >
            <span
              class="block h-4 rounded-full bg-black text-center text-[10px]/4"
              style={{ width: "80%" }}
            >
              <span class="font-bold text-white"> 80% </span>
            </span>
          </span>
        </div>
        <div class="mt-6">
          <span id="ProgressLabel" class="">
            JAVA
          </span>

          <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow="75"
            class="block rounded-full bg-gray-200"
          >
            <span
              class="block h-4 rounded-full bg-black text-center text-[10px]/4"
              style={{ width: "75%" }}
            >
              <span class="font-bold text-white"> 75% </span>
            </span>
          </span>
        </div>
        <div class="mt-6">
          <span id="ProgressLabel" class="">
            PYTHON
          </span>

          <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow="70"
            class="block rounded-full bg-gray-200"
          >
            <span
              class="block h-4 rounded-full bg-black text-center text-[10px]/4"
              style={{ width: "70%" }}
            >
              <span class="font-bold text-white"> 70% </span>
            </span>
          </span>
        </div>
        <div class="mt-6">
          <span id="ProgressLabel" class="">
            PHP
          </span>

          <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow="60"
            class="block rounded-full bg-gray-200"
          >
            <span
              class="block h-4 rounded-full bg-black text-center text-[10px]/4"
              style={{ width: "60%" }}
            >
              <span class="font-bold text-white"> 60% </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
