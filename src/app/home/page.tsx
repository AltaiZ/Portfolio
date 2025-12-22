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
    <div className="flex justify-center items-center  ">
      <div className="flex relative justify-center h-screen bg-[url(/portrait23.png)] bg-cover bg-no-repeat bg-center md:bg-cover w-full sm:max-w-[70%] md:max-w-162.5">
        <TextLoop
          className="font-mono absolute top-1/3 text-4xl sm:text-6xl md:text-7xl font-bold text-wrap px-6 text-center -z-1"
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
