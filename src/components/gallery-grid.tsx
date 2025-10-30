"use client";

import { useState } from "react";
import { galleryItems } from "@/data/gallery";
import { AnimatePresence, motion } from "framer-motion";

export function GalleryGrid() {
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const activeItem = galleryItems.find((item) => item.id === activeItemId);

  return (
    <section id="gallery" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-left">
          <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Gallery & Media
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            From farm to market — captured in motion.
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            Drone footage, grading lines, and dawn dispatch moments showcase the dedication of Mahalakshmi Poultry Complex.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveItemId(item.id)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <div className="flex h-full w-full items-center justify-center bg-slate-800">
                  <span className="text-4xl">{item.type === "video" ? "🎬" : "📸"}</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  {item.type === "video" ? "Video" : "Image"}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.alt}</h3>
                {item.caption ? (
                  <p className="mt-3 text-sm text-white/70">{item.caption}</p>
                ) : null}
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {activeItem ? (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setActiveItemId(null)}
                  className="absolute right-4 top-4 z-10 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-slate-900 shadow hover:bg-white"
                >
                  Close
                </button>
                <div className="aspect-video bg-black">
                  {activeItem.type === "video" ? (
                    <video
                      src={activeItem.src}
                      controls
                      autoPlay
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-200">
                      <span className="text-4xl">📸</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{activeItem.alt}</h3>
                  {activeItem.caption ? (
                    <p className="mt-2 text-sm text-slate-600">{activeItem.caption}</p>
                  ) : null}
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
