import { AccordionItems } from "@/src/components/ui/Accordion/types";
import Section from "@/src/components/ui/Theme/ThemeWrapper";
import Accordion from "@/src/components/ui/Accordion/Accordtion";
import Container from "@/src/components/layout/Container";

export default function AboutUs() {
  const accordionData: AccordionItems[] = [
    {
      id: 1,
      title: "Branding",
      content:
        "The identity of your business is more than just a logo. Quality marketing cannot work without intentional branding in place. To get your marketing structured, we create logos, iconography, color schemes, design style, and overall continuity to define your business.",
    },
    {
      id: 2,
      title: "Graphic Design",
      content:
        "Whether we are talking about your website or your business cards, we want to make sure your business is promoted properly. Attention to detail is key - and no piece should be overlooked. The design choices in your projects help emit the emotion for your brand. When it comes down to it, we are artists with the technical know-how. So not only will your project look great, but it will also function great as well.",
    },
    {
      id: 3,
      title: "Sample",
      content: "Sample",
    },
  ];
  return (
    <Section theme="dark">
      <Container>
        <div className="py-40">
          <Accordion accordionData={accordionData} />
        </div>
      </Container>
    </Section>
  );
}
