'use client'
import React from "react";

export const Component = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-[url(/76239.jpg)] bg-no-repeat bg-center bg-cover relative">
     <div className="absolute w-full h-screen bg-black/50 flex flex-col justify-center items-center" >
       <FlipLink href="+976 96993933">Phone Call</FlipLink>
      <FlipLink href="Munkh_altai@yahoo.com">Mail</FlipLink>
      <FlipLink href="https://www.facebook.com/munkhaltai.sukhbaatar">Facebook</FlipLink>
      <FlipLink href="https://www.instagram.com/altai_s/">Instagram</FlipLink>
     </div>
    </section>
  );
};

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <a
      href={href}
      className="group text-card relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div className="flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </a>
  );
};