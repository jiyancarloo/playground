"use client";
import { useGSAP } from "@gsap/react";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import useNavbarTheme from "@/src/hooks/useNavbarTheme";
import Image from "next/image";
import Link from "next/link";
import Lineicons from "@lineiconshq/react-lineicons";
import { MenuHamburger1Outlined } from "@lineiconshq/free-icons";

gsap.registerPlugin(useGSAP);
export default function Navbar() {
  const navTheme = useNavbarTheme();
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

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    gsap.set(overlayRef.current, {
      yPercent: -100,
    });
  }, []);

  useEffect(() => {
    if (!previewRef.current) return;

    const img = previewRef.current.querySelector(".preview-image");
    if (!img) return;

    gsap.fromTo(
      img,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" },
    );
  }, [displayIndex]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true });

      tl.current
        .set(overlayRef.current, { yPercent: -100 })
        .to(overlayRef.current, {
          yPercent: 0,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".menu-item",
          {
            yPercent: 40,
            opacity: 0,
            stagger: 0.07,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(".preview-image", {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 0.8,
          ease: "power4.out",
        });
    });

    return () => ctx.revert();
  }, []);

  const toggleMenu = () => {
    if (!tl.current) return;

    menuOpen ? tl.current.reverse() : tl.current.play();
    SetMenuOpen(!menuOpen);
  };

  const animateHover = (el: HTMLElement, x: number) => {
    gsap.to(el, { x, duration: 0.3, ease: "power4.out" });
  };

  const handleHover = (e: React.MouseEvent<HTMLButtonElement>) =>
    animateHover(e.currentTarget, 8);

  const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) =>
    animateHover(e.currentTarget, 0);

  return (
    <>
      <div className="absolute top-20 left-0 w-full z-9999">
        <nav
          className={`h-20 flex justify-end items-center gap-6 pr-40 transition-colors duration-500 ${
            navTheme === "light" ? "text-black " : "text-white "
          }`}>
          <div className="flex gap-6 ">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <button className="cursor-pointer font-medium tracking-tight">
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div
        className={`fixed top-20 right-0 h-20 flex items-center pr-20 z-9999 transition-colors duration-500 ${
          navTheme === "light" ? "text-black " : "text-white "
        }`}>
        <button
          onClick={toggleMenu}
          className="flex items-center gap-4 cursor-pointer ">
          <Lineicons icon={MenuHamburger1Outlined} size={26} />
        </button>
      </div>

      {/* OVERLAY NAV BAR */}
      <>
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black text-white flex items-center justify-start z-9999">
          <div className="mx-8 lg:mx-30">
            <button
              className="absolute right-12 top-10 text-md cursor-pointer"
              onClick={toggleMenu}>
              Close X
            </button>
            <div ref={previewRef} className="flex lg:gap-8  lg:items-center">
              <div className="relative w-[80vh] h-[70vh] overflow-hidden">
                <Image
                  fill
                  alt={menuItems[displayIndex].label}
                  src={menuItems[displayIndex].image}
                  priority
                  className="preview-image absolute inset-0 w-full aspect-video h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-8 relative">
                {menuItems.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <div className="flex items-center gap-6 ">
                      <div
                        className={`w-8 lg:w-12 h-px lg:mr-2 rounded-full ${
                          pathname === item.href
                            ? "bg-orange-500"
                            : "bg-transparent"
                        }`}
                      />

                      <button
                        className={`menu-item text-2xl lg:text-4xl transition-colors font-thin tracking-tight  text-left
                            ${pathname === item.href ? "pointer-events-none" : "cursor-pointer hover:text-orange-500"}`}
                        onClick={toggleMenu}
                        onMouseEnter={(e) => {
                          setHoverIndex(index);
                          handleHover(e);
                        }}
                        onMouseLeave={(e) => {
                          setLastHoveredIndex(index);
                          setHoverIndex(null);
                          handleLeave(e);
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
    </>
  );
}
