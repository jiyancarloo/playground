import Section from "@/src/components/ui/Theme/ThemeWrapper";
import Container from "@/src/components/layout/Container";
import Accordion from "@/src/components/ui/Accordion/Accordtion";
import { AccordionItems } from "@/src/components/ui/Accordion/types";
export default function CoreValues() {
  const accordionData: AccordionItems[] = [
    {
      id: 1,
      title: "Sample",
      content:
        "The identity of your business is more than just a logo. Quality marketing cannot work without intentional branding in place. To get your marketing structured, we create logos, iconography, color schemes, design style, and overall continuity to define your business.",
    },
    {
      id: 2,
      title: "Sample",
      content: "Sample",
    },
    {
      id: 3,
      title: "Sample",
      content: "Sample",
    },
  ];
  return (
    <>
      <Section theme="light" className="min-h-screen">
        <Container>
          <div className="py-40">
            <div>
              <Accordion accordionData={accordionData} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
