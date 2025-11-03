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
    id: "gollalagunta-hq",
    name: "Mahalakshmi Poultry Complex",
    location: "Gollalagunta, East Godavari, Andhra Pradesh",
    coordinates: { lat: 16.9891, lng: 82.2475 },
    mapPosition: { top: "52%", left: "68%" },
    dailyProduction: "2,00,000 eggs",
    description:
      "The nerve center of Mahalakshmi Poultry Complex with in-house feed mill, manual grading floors, and coordinated dispatch planning.",
    image: "/images/farms/east-godavari.jpg",
    videoUrl: "https://example.com/videos/east-godavari-drone.mp4",
    isHeadquarters: true,
  },
  {
    id: "unit-2-gollalagunta",
    name: "Mahalakshmi Poultry Complex",
    location: "Gollalagunta, East Godavari, Andhra Pradesh",
    coordinates: { lat: 17.0053, lng: 81.7778 },
    mapPosition: { top: "45%", left: "58%" },
    dailyProduction: "1,00,000 eggs",
    description:
      "Well-ventilated sheds with disciplined cleaning schedules support steady production even during peak summers.",
    image: "/images/farms/rajahmundry.jpg",
  },
  {
    id: "kotapadu-unit",
    name: "Mahalakshmi Poultry Complex",
    location: "Kotapadu, Kakinada, Andhra Pradesh",
    coordinates: { lat: 16.9891, lng: 82.2475 },
    mapPosition: { top: "54%", left: "72%" },
    dailyProduction: "1,20,000 eggs",
    description:
      "Close to major transport routes for timely coordination with distributors across Telangana and Odisha.",
    image: "/images/farms/kakinada.jpg",
  },
  {
    id: "chebrolu-unit",
    name: "Mahalakshmi Poultry Complex",
    location: "Chebrolu, Kakinada, Andhra Pradesh",
    coordinates: { lat: 16.5728, lng: 82.0066 },
    mapPosition: { top: "62%", left: "70%" },
    dailyProduction: "80,000 eggs",
    description:
      "Focuses on hatchery integration and welfare-first flock management for uniform shell quality.",
    image: "/images/farms/amalapuram.jpg",
  },
];
