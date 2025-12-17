"use client";
import React, { useEffect, useState } from "react";
import { TextLoop } from "@/components/motion-primitives/text-loop";
const page = () => {
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex relative justify-center h-screen bg-[url(/portrait23.png)] bg-center bg-no-repeat">
      {/* <div className="absolute size-18 bg-black/20 bottom-6 right-6 backdrop-blur-2xl" /> */}
      <TextLoop
        className="font-mono text-sm absolute top-80 text-8xl font-bold -z-1 text-wrap px-70 text-center"
        trigger={trigger}
      >
        <span>How can I assist you today?</span>
        <span>Generate a design</span>
        <span>Create a component</span>
        <span>Draw a diagram</span>
      </TextLoop>
    </div>
  );
};

export default page;
