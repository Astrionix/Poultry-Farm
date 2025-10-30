export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const processFlow: ProcessStep[] = [
  {
    id: "feed",
    title: "Feed",
    description:
      "High-quality maize and soya-based feed formulated in-house to maintain consistent nutrition.",
    icon: "wheat",
  },
  {
    id: "farm",
    title: "Farm",
    description:
      "Climate-controlled layer houses with welfare-first caretakers monitoring flock health round the clock.",
    icon: "warehouse",
  },
  {
    id: "sorting",
    title: "Sorting",
    description:
      "Automated grading belts segregate by weight and shell strength to maintain NECC compliance.",
    icon: "scan",
  },
  {
    id: "packing",
    title: "Packing",
    description:
      "Tamper-evident packaging and cold-chain ready crates prepare eggs for secure transport.",
    icon: "package",
  },
  {
    id: "delivery",
    title: "Delivery",
    description:
      "Refrigerated trucks assure on-time supply across six South Indian states every morning.",
    icon: "truck",
  },
];
