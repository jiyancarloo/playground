import Section from "@/src/components/ui/Theme/ThemeWrapper";
import Container from "@/src/components/layout/Container";

export default function Hero() {
  return (
    <>
      <Section theme="light" className="py-30">
        <Container>
          <div className="relative flex flex-col justify-end h-[30vh]">
            <div className="space-y-8">
              <span className="block text-sm font-bold">
                A curated set of capabilities
              </span>
              <div className="">
                <span className=" block max-w-4xl text-[40px]/snug font-light">
                  A skillset including a handful of core services. Nothing more.
                  But absolutely nothing less.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
