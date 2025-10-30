export type FarmInfo = {
  id: string;
  name: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  mapPosition: {
    top: string;
    left: string;
  };
  dailyProduction: string;
  description: string;
  image: string;
  videoUrl?: string;
  isHeadquarters?: boolean;
};

export const farms: FarmInfo[] = [
  {
    id: "east-godavari",
    name: "East Godavari Headquarters",
    location: "East Godavari, Andhra Pradesh",
    coordinates: { lat: 16.9891, lng: 82.2475 },
    mapPosition: { top: "52%", left: "68%" },
    dailyProduction: "2,00,000 eggs",
    description:
      "The nerve center of Mahalakshmi Poultry Complex with integrated feed mill, automated grading belts, and dispatch logistics under one roof.",
    image: "/images/farms/east-godavari.jpg",
    videoUrl: "https://example.com/videos/east-godavari-drone.mp4",
    isHeadquarters: true,
  },
  {
    id: "rajahmundry",
    name: "Rajahmundry Farm",
    location: "Rajahmundry, Andhra Pradesh",
    coordinates: { lat: 17.0053, lng: 81.7778 },
    mapPosition: { top: "45%", left: "58%" },
    dailyProduction: "1,00,000 eggs",
    description:
      "Climate-controlled sheds with automated ventilation ensure steady production even during peak summers.",
    image: "/images/farms/rajahmundry.jpg",
  },
  {
    id: "kakinada",
    name: "Kakinada Farm",
    location: "Kakinada, Andhra Pradesh",
    coordinates: { lat: 16.9891, lng: 82.2475 },
    mapPosition: { top: "54%", left: "72%" },
    dailyProduction: "1,20,000 eggs",
    description:
      "Strategically located near port logistics for swift dispatch to Telangana and Odisha markets.",
    image: "/images/farms/kakinada.jpg",
  },
  {
    id: "amalapuram",
    name: "Amalapuram Farm",
    location: "Amalapuram, Andhra Pradesh",
    coordinates: { lat: 16.5728, lng: 82.0066 },
    mapPosition: { top: "62%", left: "70%" },
    dailyProduction: "80,000 eggs",
    description:
      "Focuses on hatchery integration and welfare-first flock management for uniform shell quality.",
    image: "/images/farms/amalapuram.jpg",
  },
];
