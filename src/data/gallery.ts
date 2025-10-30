export type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
  thumbnail?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "drone-hq",
    type: "video",
    src: "https://example.com/videos/hq-drone.mp4",
    thumbnail: "/images/gallery/drone-hq.jpg",
    alt: "Drone footage of the East Godavari headquarters",
    caption: "A bird's-eye view of the East Godavari main complex at sunrise.",
  },
  {
    id: "grading-line",
    type: "image",
    src: "/images/gallery/grading-line.jpg",
    alt: "Automated grading line",
    caption: "Automated grading belts ensure every egg is sorted with precision.",
  },
  {
    id: "feed-mill",
    type: "image",
    src: "/images/gallery/feed-mill.jpg",
    alt: "In-house feed mill",
    caption: "In-house feed mill blending maize and soya for balanced nutrition.",
  },
  {
    id: "dispatch-fleet",
    type: "image",
    src: "/images/gallery/dispatch-fleet.jpg",
    alt: "Logistics fleet",
    caption: "Temperature-controlled fleet ready to roll at 4 AM dispatch.",
  },
  {
    id: "cold-storage",
    type: "image",
    src: "/images/gallery/cold-storage.jpg",
    alt: "Cold storage facility",
    caption: "Precision cold storage maintains shell integrity before dispatch.",
  },
];
