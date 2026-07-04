"use client";
import React, { useEffect, useState } from "react";
import { TextLoop } from "@/components/motion-primitives/text-loop";
const Page = () => {
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-dvh items-center justify-center overflow-hidden bg-[url(/76239.jpg)] bg-cover bg-center bg-no-repeat pb-24 sm:pb-28">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex h-full w-full max-w-[50rem] justify-center bg-[url(/portrait23.png)] bg-contain bg-center bg-no-repeat sm:bg-cover">
        <TextLoop
          className="absolute top-[14dvh] z-10 px-4 text-center font-mono text-2xl font-bold text-card sm:top-[16dvh] md:text-4xl lg:text-6xl"
          trigger={trigger}
        >
          <span>Hello?</span>
          <span>Generate a design</span>
          <span>Create a component</span>
          <span>Draw a diagram</span>
        </TextLoop>
      </div>
    </div>
  );
};

export default Page;

//  md:bg-cover w-full sm:max-w-[70%] md:max-w-162.5
