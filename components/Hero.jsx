"use client";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
 
const words = `Quality Design & Web Development Synergy`;
const highlightedWords = ["Design", "Development", "Web", "&"]


const Hero = () => {
  return (
    <div className="container" id="home">
    <div className="flex items-center justify-center min-h-screen">
      <div className="absolute max-w-4xl px-4 mx-auto text-center top-[25%] sm:px-6 lg:px-8">
        <p className="mb-6 font-semibold text-white tracking-widest raleway">BASED IN URUGUAY</p>
        <h1 className="mb-6 text-white z-50 font-bold text-8xl sm:text-6xl">
          <TextGenerateEffect words={words} duration={2} highlightedWords={highlightedWords} />
        </h1>
        <p className="mb-8 font-semibold text-[18px] max-sm:text-base text-zinc-400 raleway">
          Hi, I&apos;m Ismael, I create intuitive, visually stunning and highly functional web applications.
        </p>
        <div className="flex flex-col justify-center gap-6 max-sm:flex-row  sm:flex-row raleway">
          <button className="text-lg z-10 text-black group" >
            <a href="#work" className="flex items-center font-semibold p-3 px-6 bg-white rounded-lg">
              See My Work
              <ArrowRight className="w-6 h-6 ml-2 text-black transition-transform group-hover:translate-x-1" />
            </a>
          </button>
          <button className="text-lg group text-zinc-400">
            <a href="@/Download/CV.pdf" download="Ismael Medina CV.pdf" className="flex items-center gap-2 font-semibold hover:text-zinc-400/80">
              <Download className="w-6 h-6 ml-1 text-blue-500 transition-transform group-hover:translate-y-0.5" />
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
    <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-y-[-50%] h-[200%] skew-y-0 z-0",
        )}
      />
  </div>
  );
};

export default Hero;