'use client'
import React from "react";

export const Component = () => {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center bg-[url(/76239.jpg)] bg-cover bg-center bg-no-repeat">
     <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-black/50 px-4 pb-28 text-center sm:pb-32" >
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
      className="group relative block max-w-full overflow-hidden whitespace-nowrap text-[clamp(2rem,13vw,8rem)] font-black uppercase text-card"
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
