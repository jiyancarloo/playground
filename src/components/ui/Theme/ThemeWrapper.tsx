// components/ui/Section.tsx
import React from "react";

type SectionProps = {
  theme: "dark" | "light"; // section theme
  children: React.ReactNode;
  className?: string;
};

export default function Section({ theme, children, className }: SectionProps) {
  return (
    <section
      data-theme={theme}
      className={`relative transition-colors duration-500  ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } ${className} `}>
      {children}
    </section>
  );
}
