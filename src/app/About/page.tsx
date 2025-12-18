import { Card } from "@/components/ui/card";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-around items-center ">
      <div>
        <Card className="h-fit w-100 p-4">
          <span className=" text-2xl text-center font-semibold ">About me</span>
          <span>I am a junior frontend developer and UI/UX designer who builds responsive and user-friendly web interfaces. I focus on clean design, usability, and modern frontend practices. I work with HTML, CSS, React, and Next.js, and enjoy collaborating in team environments. My goal is to grow my skills and contribute to meaningful digital products.</span>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        <div>
          <Card className="h-fit w-100 p-4">
            <span className=" text-2xl text-center font-semibold">
              Soft skills
            </span>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Teamwork</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Collaborating effectively with team members, sharing ideas,
                    and contributing to group goals.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Communication</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Clearly explaining ideas and solutions and maintaining
                    effective communication with designers and developers.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Problem Solving</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Identifying issues, analyzing them logically, and finding
                    effective solutions during development.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Problem Solving</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Organizing tasks efficiently and meeting deadlines while
                    handling multiple responsibilities.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
        <div>
          <Card className="h-fit w-100 p-4">
            <span className=" text-2xl text-center font-semibold">
              Hard skills
            </span>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>UI/UX design</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Designing user-centered interfaces with a focus on
                    usability, visual consistency, spacing, and typography.
                    Creating clean and intuitive user experiences.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>HTML, CSS</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Building well-structured web pages using semantic HTML.
                    Styling layouts with CSS, including Flexbox and Grid, and
                    implementing responsive designs.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>React, Next.js</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Developing dynamic user interfaces using React’s
                    component-based architecture. Using Next.js for routing,
                    layouts, basic SEO, and performance optimization.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Wireframing, Prototyping</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Creating wireframes and interactive prototypes using tools
                    like Figma to visualize ideas before development.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Responsive design</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Applying a mobile-first approach to ensure websites look and
                    function well across desktop, tablet, and mobile devices.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
