"use client";
import React, { useEffect, useState } from "react";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import Image from "next/image";
import { Fullscreen } from "lucide-react";
const Page = () => {
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center bg-[url(/76239.jpg)] bg-no-repeat bg-center bg-cover relative">
      <div className="absolute w-full h-screen bg-black/50" />
      <div className="flex relative justify-center h-screen bg-[url(/portrait23.png)] bg-cover bg-no-repeat bg-center w-200">
        <TextLoop
          className="font-mono absolute top-35 text-2xl md:text-4xl lg:text-6xl font-bold text-wrap px-6 text-center z-99 text-card "
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