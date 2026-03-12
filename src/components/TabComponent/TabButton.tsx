import { Tab } from "./types";

type TabButtonProps = {
  tabData: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
};
export default function TabButtons({
  tabData,
  activeTab,
  setActiveTab,
}: TabButtonProps) {
  return (
    <div className="flex gap-8 lg:gap-8 ">
      {tabData.map((tab, index) => (
        <button
          key={tab.title}
          onClick={() => setActiveTab(index)}
          className={`uppercase font-bold text-left text-xs
          ${activeTab === index ? "" : "text-gray-400"}`}>
          {tab.title}
        </button>
      ))}
    </div>
  );
}
