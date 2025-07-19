"use client"

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="w-full py-20 px-4 lg:px-6 min-h-screen pb-0">
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative pb-20">
          <div className="pt-10 sm:pt-10 mb-8 space-y-8 text-gray-700">
            <h1 className="prose text-gray-800 text-2xl font-medium">hey, I&apos;m Emmanuel 👋</h1>
            <p>I&apos;m a fanatical frontend developer who loves working with Next.js, React,TypeScript and Tailwind.</p>

            <div className="space-y-2">
              <p>
                Currently working at
                <Link href="https://curare.info/" target="blank" className="bg-slate-500/20 hover:bg-[#f0eae7] inline-flex items-center translate-y-[3px] leading-[100%] gap-1 rounded-md px-1.5 py-1 ml-2 mr-2 hover:text-[#b88b59] transition-all duration-300 ease-in-out">
                  <span className="inline-block size-4 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("curare.svg")' }}></span>
                  Curare Technologies
                </Link>
                as a frontend developer.
              </p>

              <p>
                Creator of
                <span className="bg-slate-500/20 hover:bg-[#f0eae7] inline-flex items-center translate-y-[3px] leading-[100%] gap-1 rounded-md px-1.5 py-1 ml-2 mr-2 hover:text-[#b88b59] transition-all duration-300 ease-in-out">Perk React UI</span>
                <span className="bg-slate-500/20 hover:bg-[#f0eae7] inline-flex items-center translate-y-[3px] leading-[100%] gap-1 rounded-md px-1.5 py-1 ml-2 mr-2 hover:text-[#b88b59] transition-all duration-300 ease-in-out">PrimeWind</span>
              </p>
            </div>

            <div>
              <p>
                As a React developer, I build interactive web experiences by transforming UI designs into fully functional code.
                I leverage Tailwind utility first classes for responsive layouts and semantic HTML for clear, maintainable markup.
                With a focus on performance and accessibility, I deliver production ready and scalable solutions.
                Explore my <Link href="/projects" className="text-gray-900 font-medium underline">full project list here.</Link>
              </p>
            </div>

            <div>
              <p>Find me on:</p>
              <div className="flex space-x-5 mt-5">
                <Link href="https://github.com/AE4041" target="blank" className="flex gap-x-1 items-center hover:text-gray-900 transition-colors duration-300">
                  <Icon icon="ph:github-logo-duotone" className="size-5" />Github
                </Link>
                <Link href="https://www.linkedin.com/in/asamoah-emmanuel-489480161/" target="blank" className="flex gap-x-1 items-center hover:text-blue-500 transition-colors duration-300">
                  <Icon icon="ph:linkedin-logo-duotone" className="size-5" />Linkedin
                </Link>
              </div>
            </div>

            <div>
              <p>
                If you find my work valuable and would like to collaborate on a project or discuss potential job opportunities, feel free to reach out at <span className="font-bold">easamoah@curare.care</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}