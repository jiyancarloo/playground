"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TabItems } from "./types";

type TabContentProps = {
  item: TabItems;
};

export default function TabContent({ item }: TabContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      },
    );
  }, [item]);

  return (
    <div ref={contentRef} className="flex flex-col gap-6 items-baseline-center">
      <div className="flex flex-wrap gap-4 lg:gap-10 items-center">
        <span className="text-xs font-bold tracking-tight">
          {item.subheader}
        </span>

        <span className="text-2xl lg:text-3xl tracking-tight leading-10">
          {item.header}
        </span>
      </div>

      <div className="pl-8 lg:pl-14">
        <p className=" text-left text-md">{item.description}</p>
      </div>
    </div>
  );
}
