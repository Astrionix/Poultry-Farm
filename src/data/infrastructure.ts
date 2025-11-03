export type InfrastructureFeature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const infrastructureFeatures: InfrastructureFeature[] = [
  {
    id: "clean-housing",
    title: "Clean Layer Houses",
    description:
      "Well-maintained layer houses with daily cleaning routines keep birds healthy and stress-free.",
    icon: "warehouse",
  },
  {
    id: "manual-grading",
    title: "Manual Grading Teams",
    description:
      "Experienced graders inspect each egg by hand to ensure uniform shells and sizing.",
    icon: "egg",
  },
  {
    id: "biosecurity",
    title: "Tiered Biosecurity",
    description:
      "Sanitization tunnels, footbaths, and monitored entry logs protect flock health.",
    icon: "shield",
  },
  {
    id: "quality-lab",
    title: "In-House Quality Lab",
    description:
      "Shell strength, albumen height, and residue tests conducted for every batch.",
    icon: "test-tube",
  },
  {
    id: "workforce",
    title: "Skilled Workforce",
    description:
      "Certified poultry technicians and nutritionists overseeing daily operations.",
    icon: "users",
  },
];
