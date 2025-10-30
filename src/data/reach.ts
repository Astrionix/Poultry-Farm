export type ReachLocation = {
  id: string;
  state: string;
  cities: string[];
  highlight: string;
};

export const reachLocations: ReachLocation[] = [
  {
    id: "andhra-pradesh",
    state: "Andhra Pradesh",
    cities: ["East Godavari", "Vijayawada", "Visakhapatnam"],
    highlight: "Home turf with daily deliveries to major mandis and retailers.",
  },
  {
    id: "telangana",
    state: "Telangana",
    cities: ["Hyderabad", "Warangal"],
    highlight:
      "Morning dispatches from Kakinada ensure Hyderabad markets receive fresh stock.",
  },
  {
    id: "tamil-nadu",
    state: "Tamil Nadu",
    cities: ["Chennai", "Coimbatore"],
    highlight: "Cold-chain hub ties allow same-day arrivals for wholesale buyers.",
  },
  {
    id: "karnataka",
    state: "Karnataka",
    cities: ["Bengaluru", "Mysuru"],
    highlight: "Joint logistics operations keep southern markets well-served.",
  },
  {
    id: "odisha",
    state: "Odisha",
    cities: ["Bhubaneswar", "Berhampur"],
    highlight: "Maritime routes from Kakinada support eastern expansion.",
  },
  {
    id: "chhattisgarh",
    state: "Chhattisgarh",
    cities: ["Raipur"],
    highlight: "Partnership-driven distribution to high-demand institutional clients.",
  },
];
