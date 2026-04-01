"use client";
import { Tab } from "@/src/components/ui/Tab/types";
import TabComponent from "@/src/components/ui/Tab/Tab";
import Container from "@/src/components/layout/Container";
import Section from "@/src/components/ui/Theme/ThemeWrapper";
import Accordion from "@/src/components/ui/Accordion/Accordtion";
import { AccordionItems } from "@/src/components/ui/Accordion/types";

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
    title: "Web Design & Development",
    content:
      "Whether we are talking about your website or your business cards, we want to make sure your business is promoted properly. Attention to detail is key - and no piece should be overlooked. The design choices in your projects help emit the emotion for your brand. When it comes down to it, we are artists with the technical know-how. So not only will your project look great, but it will also function great as well.",
  },
];

const productData: Tab[] = [
  {
    title: "Branding & Graphic Design",
    items: [
      {
        header: "Invest in Clients",
        subheader: "01",
        description:
          "Before we worry about money, we want to get to know you. Are we a good fit? Our time is equally valuable. Let's not waste it.",
      },
      {
        header: "Don't sell anything",
        subheader: "02",
        description:
          "Before we worry about money, we want to get to know you. Are we a good fit? Our time is equally valuable. Let's not waste it.",
      },
      {
        header: "Care about it all",
        subheader: "03",
        description:
          "Before we worry about money, we want to get to know you. Are we a good fit? Our time is equally valuable. Let's not waste it.",
      },
      {
        header: "No RFPs",
        subheader: "04",
        description:
          "Before we worry about money, we want to get to know you. Are we a good fit? Our time is equally valuable. Let's not waste it.",
      },
    ],
  },
  {
    title: "Website Design",
    items: [
      {
        header: "Honest conversations",
        subheader: "01",
        description:
          "What do you actually need. Can we help with that? If so, great. If not? That's ok too. If we can't help solve a problem, we'll be the first to let you know.",
      },
      {
        header: "Education built in",
        subheader: "02",
        description:
          "What do you actually need. Can we help with that? If so, great. If not? That's ok too. If we can't help solve a problem, we'll be the first to let you know.",
      },
      {
        header: "Partnership agreement",
        subheader: "03",
        description:
          "Before we worry about money, we want to get to know you. Are we a good fit? Our time is equally valuable. Let's not waste it.",
      },
      {
        header: "Keep it simple",
        subheader: "04",
        description:
          "Before we worry about money, we want to get to know you. Are we a good fit? Our time is equally valuable. Let's not waste it.",
      },
      {
        header: "In your back pocket",
        subheader: "05",
        description:
          "Before we worry about money, we want to get to know you. Are we a good fit? Our time is equally valuable. Let's not waste it.",
      },
    ],
  },
  {
    title: "Photography & Design",
    items: [
      {
        header: "Value-based projects",
        subheader: "01",
        description:
          "Every project is an opportunity. And if you are going to do something, let's strive to do it right. If everything from the first chat through completing the work matters, it shows.",
      },
      {
        header: "People over products",
        subheader: "02",
        description:
          "Every project is an opportunity. And if you are going to do something, let's strive to do it right. If everything from the first chat through completing the work matters, it shows.",
      },
      {
        header: "Every detail matters",
        subheader: "03",
        description:
          "Before we worry about money, we want to get to know you. Are we a good fit? Our time is equally valuable. Let's not waste it.",
      },
    ],
  },
];

export default function FeaturesSection() {
  return (
    <>
      <Section theme="light" className="py-30">
        <Container>
          <div className="space-y-50">
            {/* Tab Section */}
            <div className="space-y-16">
              <div className="flex flex-col gap-8">
                <h1 className="text-sm font-semibold">My Playground</h1>
                <h1 className="max-w-3xl text-[40px]/snug font-light tracking-tight">
                  This is my testing grounds for GSAP, React and Next js
                </h1>
              </div>

              <div className="">
                <TabComponent tabs={productData} />
              </div>
            </div>

            <div>
              <Accordion accordionData={accordionData} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
