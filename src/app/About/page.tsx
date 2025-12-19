"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CircularProgressCard } from "@/components/ui/circular-progress-card";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Card className="w-fit p-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col justify-center items-center border-b-1">
            <img
              className="rounded-full h-48 w-fit"
              src={"portrait2.jpg"}
            ></img>
            <span className="font-semibold">Munkh-altai Sukhbaater </span>
            <span>Front-End Developer & UI/UX Designer</span>
          </div>
          <div className="flex justify-between border-b-1">
            <span>Age</span>
            <span>37</span>
          </div>
          <div className="flex gap-5">
            <CircularProgressCard
              title="Soft Skills"
              description=""
              currentValue={87.5}
              goalValue={100}
              currency=""
              progressColor="hsl(142.1 76.2% 41.2%)"
            />
            <CircularProgressCard
              title="Hard Skills"
              description=""
              currentValue={80}
              goalValue={100}
              currency=""
              progressColor="hsl(142.1 76.2% 41.2%)"
            />
          </div>
          <div className="flex justify-center">
            <Button>Download CV</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default page;
