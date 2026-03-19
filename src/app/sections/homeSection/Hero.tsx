import Section from "@/src/components/ui/Theme/ThemeWrapper";
import Container from "@/src/components/layout/Container";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <Section theme="dark">
        <div className="relative aspect-auto min-h-screen overflow-hidden z-100">
          <Image
            src="/hero1.webp"
            alt="herobanner"
            fill
            className="object-cover object-center absolute -z-10"
            sizes="(max-width: 768px) 100%, 100%"
            priority
          />
          <div className="absolute inset-0 bg-black/50 -z-10"></div>
          {/* Container for content */}
          <Container>
            <div className="z-20 relative flex flex-col justify-end min-h-screen py-50">
              <div className="overflow-hidden space-y-2 py-6">
                <span className="text-lg font-semibold block">
                  Design, Development & Photography
                </span>
                <h1 className="text-3xl/snug md:text-4xl lg:text-[100px] text-white max-w-6xl font-medium block">
                  Welcome to my Playground
                </h1>
              </div>

              {/* <div className="px-4 lg:px-30 py-10 lg:py-20 max-w-6xl space-y-6 bg-red-50   "></div> */}
            </div>
          </Container>
        </div>
      </Section>
    </>
  );
}
