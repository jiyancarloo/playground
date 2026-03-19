"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function useNavbarTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-theme]");

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newTheme = entry.target.getAttribute("data-theme") as
              | "light"
              | "dark";

            if (newTheme) {
              setTheme(newTheme);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return theme;
}
