"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CircularProgressCard } from "@/components/ui/circular-progress-card";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const page = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen w-full flex justify-center ">
        <Card className="w-fit h-fit my-10 p-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-center items-center border-b pb-4">
              <img
                className="rounded-full h-48 w-48 object-cover"
                src={"portrait2.jpg"}
                alt="Portrait"
              />
              <span className="font-semibold mt-2">Munkh-altai Sukhbaater</span>
              <span className="text-sm text-muted-foreground">
                Front-End Developer & UI/UX Designer
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Age</span>
              <span>37</span>
            </div>

            <div className="flex gap-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <CircularProgressCard
                    title="Soft Skills"
                    description=""
                    currentValue={87.5}
                    goalValue={100}
                    currency=""
                    progressClassName="w-32 h-32"
                    progressColor="oklch(49.97% 0.00006 271.152)"
                  />
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="p-0 border-none bg-transparent shadow-none"
                >
                  <Card className="w-fit p-6 bg-background border shadow-xl">
                    <div className="flex flex-col items-center gap-6">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold">Soft Skills</h3>
                      </div>
                      <div className="flex items-center justify-center gap-8 p-4 bg-white rounded-xl">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="relative w-16 h-16">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 100 100"
                            >
                              <circle
                                className="stroke-gray-200 dark:stroke-gray-800"
                                strokeWidth="10"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                              <circle
                                className="stroke-background"
                                strokeWidth="10"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * 80) / 100}
                                strokeLinecap="round"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                              80%
                            </span>
                          </div>
                          <span className="text-[10px] font-medium uppercase">
                            Teamwork
                          </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div className="relative w-16 h-16">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 100 100"
                            >
                              <circle
                                className="stroke-gray-200 dark:stroke-gray-800"
                                strokeWidth="10"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                              <circle
                                className="stroke-background"
                                strokeWidth="10"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                strokeLinecap="round"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                              90%
                            </span>
                          </div>
                          <span className="text-[10px] font-medium uppercase">
                            Time Management
                          </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div className="relative w-16 h-16">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 100 100"
                            >
                              <circle
                                className="stroke-gray-200 dark:stroke-gray-800"
                                strokeWidth="10"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                              <circle
                                className="stroke-background"
                                strokeWidth="10"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                strokeLinecap="round"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                              90%
                            </span>
                          </div>
                          <span className="text-[10px] font-medium uppercase">
                            Communication
                          </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div className="relative w-16 h-16">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 100 100"
                            >
                              <circle
                                className="stroke-gray-200 dark:stroke-gray-800"
                                strokeWidth="10"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                              <circle
                                className="stroke-background"
                                strokeWidth="10"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                strokeLinecap="round"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                              90%
                            </span>
                          </div>
                          <span className="text-[10px] font-medium uppercase">
                            Problem Solving
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <CircularProgressCard
                    title="Hard Skills"
                    description=""
                    currentValue={82}
                    goalValue={100}
                    currency=""
                    progressColor="oklch(49.97% 0.00006 271.152)"
                  />
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="p-0 border-none bg-transparent shadow-none"
                >
                  <Card className="w-fit p-6 bg-background border shadow-xl">
                    <div className="flex flex-col items-center gap-6">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold">Soft Skills</h3>
                      </div>
                      <div className="flex items-center justify-center gap-8 p-4 bg-white rounded-xl">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="relative w-16 h-16">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 100 100"
                            >
                              <circle
                                className="stroke-gray-200 dark:stroke-gray-800"
                                strokeWidth="10"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                              <circle
                                className="stroke-background"
                                strokeWidth="10"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                strokeLinecap="round"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                              90%
                            </span>
                          </div>
                          <span className="text-[10px] font-medium uppercase">
                            HTML & CSS
                          </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div className="relative w-16 h-16">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 100 100"
                            >
                              <circle
                                className="stroke-gray-200 dark:stroke-gray-800"
                                strokeWidth="10"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                              <circle
                                className="stroke-background"
                                strokeWidth="10"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * 80) / 100}
                                strokeLinecap="round"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                              80%
                            </span>
                          </div>
                          <span className="text-[10px] font-medium uppercase">
                            Javascript
                          </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div className="relative w-16 h-16">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 100 100"
                            >
                              <circle
                                className="stroke-gray-200 dark:stroke-gray-800"
                                strokeWidth="10"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                              <circle
                                className="stroke-background"
                                strokeWidth="10"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * 80) / 100}
                                strokeLinecap="round"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                              80%
                            </span>
                          </div>
                          <span className="text-[10px] font-medium uppercase">
                            React
                          </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div className="relative w-16 h-16">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 100 100"
                            >
                              <circle
                                className="stroke-gray-200 dark:stroke-gray-800"
                                strokeWidth="10"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                              <circle
                                className="stroke-background"
                                strokeWidth="10"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                strokeLinecap="round"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                              90%
                            </span>
                          </div>
                          <span className="text-[10px] font-medium uppercase">
                            Next.js
                          </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div className="relative w-16 h-16">
                            <svg
                              className="w-full h-full"
                              viewBox="0 0 100 100"
                            >
                              <circle
                                className="stroke-gray-200 dark:stroke-gray-800"
                                strokeWidth="10"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                              <circle
                                className="stroke-background"
                                strokeWidth="10"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * 70) / 100}
                                strokeLinecap="round"
                                fill="none"
                                cx="50"
                                cy="50"
                                r="40"
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                              70%
                            </span>
                          </div>
                          <span className="text-[10px] font-medium uppercase">
                            Github
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex justify-center">
              <Button>Download CV</Button>
            </div>
          </div>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default page;
