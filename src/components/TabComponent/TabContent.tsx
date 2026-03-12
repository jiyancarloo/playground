import { TabItems } from "./types";

type TabContentProps = {
  item: TabItems;
};

export default function TabContent({ item }: TabContentProps) {
  return (
    <div className="flex flex-col gap-6 items-baseline-center">
      <div className="flex flex-wrap gap-4 lg:gap-10 items-center ">
        <span className="text-xs font-bold text-white tracking-tight">
          {item.subheader}
        </span>
        <span className="text-2xl lg:text-4xl leading-10">{item.header}</span>
      </div>
      <div className="pl-8 lg:pl-14">
        <p className="text-white text-left  text-md">{item.description}</p>
      </div>
    </div>
  );
}
