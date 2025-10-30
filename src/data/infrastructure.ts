export type InfrastructureFeature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const infrastructureFeatures: InfrastructureFeature[] = [
  {
    id: "cold-storage",
    title: "Precision Cold Storage",
    description:
      "Automated chillers maintain 12°C to preserve freshness from grading to dispatch.",
    icon: "snowflake",
  },
  {
    id: "grading-belts",
    title: "Automated Grading Belts",
    description:
      "Optical scanners and conveyors classify eggs by weight class in minutes.",
    icon: "scan",
  },
  {
    id: "biosecurity",
    title: "Tiered Biosecurity",
    description:
      "Sanitization tunnels, footbaths, and monitored entry logs protect flock health.",
    icon: "shield",
  },
  {
    id: "logistics",
    title: "Temperature-Controlled Logistics",
    description:
      "Fleet of refrigerated trucks synchronized with dispatch schedules across six states.",
    icon: "truck",
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
