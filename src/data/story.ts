export type StoryMilestone = {
  title: string;
  subtitle: string;
  description: string;
  year: string;
  quote?: {
    text: string;
    author: string;
  };
};

export const storyMilestones: StoryMilestone[] = [
  {
    title: "Early Beginnings",
    subtitle: "East Godavari Roots",
    year: "1996",
    description:
      "The founders began poultry farming with a disciplined routine, a small but resilient flock, and a promise to deliver pure, white eggs to local markets in East Godavari.",
    quote: {
      text: "Purity is not an act—it is the culture we live by every sunrise.",
      author: "Founder, Sri Mahalakshmi Poultry",
    },
  },
  {
    title: "Growth & Expansion",
    subtitle: "Scaling with Trust",
    year: "2004",
    description:
      "From a single shed to a network of farms across East Godavari, Rajahmundry, Kakinada, and Amalapuram, production scaled to meet regional demand without losing the signature care for every egg.",
  },
  {
    title: "Philosophy & Values",
    subtitle: "Purity. Consistency. Welfare.",
    year: "2010",
    description:
      "Nutrition-rich feed, skilled caretakers, and welfare-first protocols define every aspect of flock management, ensuring uniform shell strength and pristine whites.",
  },
  {
    title: "Modernization",
    subtitle: "Automation & Biosecurity",
    year: "2016",
    description:
      "Automated grading belts, climate-controlled sheds, and advanced biosecurity were introduced, supported by a trained workforce dedicated to hygiene and traceability.",
  },
  {
    title: "Legacy & Future",
    subtitle: "Future-Ready Leadership",
    year: "2025",
    description:
      "The next generation blends tradition with responsible expansion, reinforcing sustainability and reliability in every consignment dispatched across the South.",
  },
];
