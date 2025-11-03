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
      "Clean, well-ventilated layer houses with attentive caretakers monitoring flock health throughout the day.",
    icon: "warehouse",
  },
  {
    id: "sorting",
    title: "Sorting",
    description:
      "Manual grading teams inspect each egg for shell integrity and weight class before dispatch.",
    icon: "scan",
  },
  {
    id: "packing",
    title: "Packing",
    description:
      "Tamper-evident packaging and cold-chain ready crates prepare eggs for secure transport.",
    icon: "package",
  },
];
