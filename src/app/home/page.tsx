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
    <div className="relative flex h-dvh items-center justify-center overflow-hidden bg-[url(/76239.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full w-full max-w-md overflow-hidden">
        <img
          src="/portrait23.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <TextLoop
          className="absolute left-1/2 top-[16%] z-10 w-full -translate-x-1/2 px-4 text-center font-mono text-2xl font-bold text-card sm:top-[14%] md:text-4xl lg:text-6xl"
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
