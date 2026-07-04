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
import Link from "next/link";

const page = () => {
  return (
    <TooltipProvider>
      <div className="relative flex min-h-dvh w-full justify-center bg-[url(/76239.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="flex min-h-dvh w-full justify-center overflow-y-auto bg-black/50 px-3 pb-28 pt-6 sm:px-4 sm:pb-32 sm:pt-10">
          <Card className="my-auto h-fit w-full max-w-xl p-4 sm:p-5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col justify-center items-center border-b pb-4">
                <img
                  className="h-36 w-36 rounded-full object-cover sm:h-48 sm:w-48"
                  src={"portrait2.jpg"}
                  alt="Portrait"
                />
                <span className="font-semibold mt-2">
                  Munkh-altai Sukhbaatar
                </span>
                <span className="text-sm text-muted-foreground">
                  Front-End Developer & UI/UX Designer
                </span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Age</span>
                <span>37</span>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                <Tooltip>
                  <TooltipTrigger>
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
                    className="max-w-[calc(100vw-2rem)] overflow-x-auto border-none bg-transparent p-0 shadow-none"
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
                    className="max-w-[calc(100vw-2rem)] overflow-x-auto border-none bg-transparent p-0 shadow-none"
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
                <Link href={'/project'}>
                <Button>See Projects</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default page;
