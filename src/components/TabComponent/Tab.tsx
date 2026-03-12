import { useState } from "react";
import { Tab } from "./types";
import TabButtons from "./TabButton";
import TabContent from "./TabContent";

type TabProps = {
  tabs: Tab[];
};

export default function TabComponent({ tabs }: TabProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-20">
      <TabButtons
        tabData={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 place-items-center">
        {tabs[activeTab].items.map((item, index) => (
          <TabContent key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
