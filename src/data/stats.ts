export type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
};

export const stats: StatItem[] = [
  {
    label: "Farms Across Andhra Pradesh",
    value: 4,
    suffix: "",
    description:
      "Four strategically located farms including East Godavari, Rajahmundry, Kakinada, and Amalapuram.",
  },
  {
    label: "Eggs Produced Daily",
    value: 500000,
    suffix: "+",
    description: "Over five lakh premium white eggs curated every single day.",
  },
  {
    label: "States Served",
    value: 6,
    suffix: "",
    description:
      "Reliable supply network spanning Telangana, Tamil Nadu, Karnataka, Odisha, Chhattisgarh, and Andhra Pradesh.",
  },
];
