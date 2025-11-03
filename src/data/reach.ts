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
      "Morning dispatches from our farms ensure Hyderabad markets receive fresh stock.",
  },
  {
    id: "tamil-nadu",
    state: "Tamil Nadu",
    cities: ["Chennai", "Coimbatore"],
    highlight: "Wholesale networks receive eggs the same day via trusted transport partners.",
  },
  {
    id: "karnataka",
    state: "Karnataka",
    cities: ["Bengaluru", "Mysuru"],
    highlight: "Coordinated deliveries with distributors keep southern markets well-served.",
  },
  {
    id: "odisha",
    state: "Odisha",
    cities: ["Bhubaneswar", "Berhampur"],
    highlight: "Trusted transporter network from Kakinada supports eastern expansion.",
  },
  {
    id: "chhattisgarh",
    state: "Chhattisgarh",
    cities: ["Raipur"],
    highlight: "Partner distributors connect us to high-demand institutional clients.",
  },
];
