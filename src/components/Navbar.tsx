"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const menuItems = [
    { label: "Home", image: "/Care1.webp", href: "/" },
    { label: "About", image: "/Care2.jpg", href: "/about" },
    { label: "Products", image: "/Care3.webp", href: "/products" },
    {
      label: "Contact",
      image: "/Healthcare-Professional.png",
      href: "/contact",
    },
    {
      label: "News",
      image: "/Care1.webp",
      href: "/news",
    },
  ];

  const pathname = usePathname();
  const [menuOpen, SetMenuOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [lastHoveredIndex, setLastHoveredIndex] = useState<number | null>(null);

  const currentIndex = menuItems.findIndex((item) => item.href === pathname);
  const displayIndex = hoverIndex ?? lastHoveredIndex ?? currentIndex;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 bg-blue-200 font-sans text-black">
        <span>INMED</span>
        <button onClick={() => SetMenuOpen(!menuOpen)}>Menu</button>
      </nav>
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black text-white flex items-center justify-start z-60">
            <div className="mx-8 lg:mx-30">
              <button
                className="absolute right-12 top-10 text-md cursor-pointer"
                onClick={() => SetMenuOpen(false)}>
                Close X
              </button>
              <div className="flex lg:gap-8  lg:items-center">
                <div className=" relative w-[80vh] h-[70vh] overflow-hidden">
                  <Image
                    fill
                    alt={menuItems[displayIndex].label}
                    src={menuItems[displayIndex].image}
                    priority
                    className="absolute inset-0 w-full aspect-video h-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-8 relative">
                  {menuItems.map((item, index) => (
                    <Link href={item.href} key={index}>
                      <div className="flex items-center gap-6">
                        <div
                          className={`w-8 lg:w-12 h-px lg:mr-2 rounded-full transition-all duration-300 ${
                            pathname === item.href
                              ? "bg-orange-500"
                              : "bg-transparent"
                          }`}></div>

                        <button
                          className={`text-2xl lg:text-4xl transition-colors font-thin tracking-tight  text-left
                            ${pathname === item.href ? "pointer-events-none" : "cursor-pointer hover:text-orange-500"}`}
                          onClick={() => SetMenuOpen(false)}
                          onMouseEnter={() => setHoverIndex(index)}
                          onMouseLeave={() => {
                            setLastHoveredIndex(index);
                            setHoverIndex(null);
                          }}>
                          {item.label}
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
