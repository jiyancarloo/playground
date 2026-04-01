export type TabItems = {
  header: string;
  subheader?: string;
  description: string;
};

export type Tab = {
  title: string;
  items: TabItems[];
};
