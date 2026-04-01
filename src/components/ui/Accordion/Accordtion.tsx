"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { AccordionItems } from "./types";

type AccordionProps = {
  accordionData: AccordionItems[];
};

export default function Accordion({ accordionData }: AccordionProps) {
  const [activeIds, setActiveIds] = useState<number[]>([]);
  const contentRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const toggle = (id: number) => {
    const current = contentRefs.current[id];
    if (!current) return;

    if (activeIds.includes(id)) {
      gsap.to(current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      setActiveIds((prev) => prev.filter((i) => i !== id));
    } else {
      gsap.fromTo(
        current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        },
      );

      setActiveIds((prev) => [...prev, id]);
    }
  };

  return (
    <div className="flex flex-col divide-y">
      {accordionData.map((item) => {
        const isOpen = activeIds.includes(item.id);

        return (
          <div key={item.id} className="py-6">
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex justify-between items-center text-left">
              <span className="text-3xl tracking-tight">{item.title}</span>

              <span
                className={`transition-transform duration-300 text-3xl ${
                  isOpen ? "rotate-45" : ""
                }`}>
                +
              </span>
            </button>

            <div
              ref={(el) => {
                contentRefs.current[item.id] = el;
              }}
              className="overflow-hidden h-0 opacity-0">
              <div className="mt-4 text-base text-gray-500">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
