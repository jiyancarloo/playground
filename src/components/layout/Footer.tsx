import Section from "../ui/Theme/ThemeWrapper";
import Container from "./Container";

export default function Footer() {
  return (
    <>
      <Section theme="dark" className="py-40 ">
        <Container>
          <div className="space-y-8">
            <span className=" block text-sm font-bold">
              Ready for something better?
            </span>
            <span className="block text-[40px]/snug tracking-tight font-light max-w-5xl">
              So you need a different agency experience with honest
              communication built into the foundation? Schedule a discovery
              session.
            </span>
          </div>
        </Container>
      </Section>
    </>
  );
}
