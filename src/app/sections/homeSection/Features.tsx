"use client";
import { Tab } from "@/src/components/ui/TabComponent/types";
import TabComponent from "@/src/components/ui/TabComponent/Tab";
import Section from "@/src/components/ui/Theme/ThemeWrapper";

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
      <Section theme="dark">
        <div className="max-w-7xl py-20 px-6">
          <div className="flex flex-col gap-6 ">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
              Next Js Playground
            </h1>

            <h1 className="">Practicing Tab Component </h1>
            <TabComponent tabs={productData} />
          </div>
        </div>
      </Section>
    </>
  );
}
