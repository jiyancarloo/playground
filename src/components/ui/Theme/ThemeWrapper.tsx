// components/ui/Section.tsx
import React from "react";

type SectionProps = {
  theme: "dark" | "light"; // section theme
  children: React.ReactNode;
};

export default function Section({ theme, children }: SectionProps) {
  return (
    <section
      data-theme={theme}
      className={`relative min-h-screen px-6 lg:px-20 pt-20 transition-colors duration-500 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}>
      {children}
    </section>
  );
}
