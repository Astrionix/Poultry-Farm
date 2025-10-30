"use client";

import { useState } from "react";
import { farms } from "@/data/farms";
import { motion, AnimatePresence } from "framer-motion";

export function FarmMap() {
  const [activeFarmId, setActiveFarmId] = useState<string>(farms[0]?.id ?? "");
  const activeFarm = farms.find((farm) => farm.id === activeFarmId) ?? farms[0];

  return (
    <section id="farms" className="bg-white py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <span className="inline-flex w-fit items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            Our Farms
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Four farms with East Godavari at the helm.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            Each unit is designed for climate control, biosecurity, and speed of dispatch—ensuring every egg reaches mandis across the South at dawn.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4">
            {farms.map((farm) => (
              <li key={farm.id}>
                <button
                  type="button"
                  onClick={() => setActiveFarmId(farm.id)}
                  className={`flex w-full flex-col rounded-2xl border p-4 text-left transition hover:border-amber-300 hover:bg-amber-50/70 ${
                    activeFarmId === farm.id
                      ? "border-amber-400 bg-amber-50 shadow-sm"
                      : "border-slate-200"
                  }`}
                  aria-pressed={activeFarmId === farm.id}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
                        {farm.isHeadquarters ? "Headquarters" : "Production Unit"}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold text-slate-900">
                        {farm.name}
                      </h3>
                    </div>
                    <span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-semibold text-amber-900">
                      {farm.dailyProduction}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{farm.description}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex flex-col gap-5">
          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-amber-100 shadow-inner">
            <svg
              viewBox="0 0 400 600"
              role="presentation"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="mapGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#fde68a" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <path
                d="M215 35c-18 10-33 49-50 68-17 20-40 24-56 44s-21 61-38 84c-17 22-44 41-49 67-4 26 11 56 27 89 16 32 33 66 53 88 20 23 43 34 61 52 19 17 34 42 58 46 24 5 56-12 77-34 21-21 31-46 40-70 9-24 17-47 15-70-2-23-13-46-20-70-7-23-10-46-11-70-1-25 1-51-9-74-11-24-34-44-49-67-16-23-25-54-39-63-13-10-32-1-50 10z"
                fill="url(#mapGradient)"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeOpacity="0.4"
              />
              <g stroke="#fcd34d" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4">
                <path d="M180 480c30-30 80-40 110-70" />
                <path d="M160 360c45-10 90-40 110-90" />
                <path d="M120 260c30-20 60-40 80-70" />
              </g>
            </svg>
            {farms.map((farm) => (
              <button
                key={farm.id}
                type="button"
                onClick={() => setActiveFarmId(farm.id)}
                style={{ top: farm.mapPosition.top, left: farm.mapPosition.left }}
                className={`group absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  activeFarmId === farm.id
                    ? "border-white bg-amber-500 shadow-lg shadow-amber-500/30"
                    : "border-amber-200 bg-white hover:bg-amber-100"
                }`}
                aria-label={`Select ${farm.name}`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeFarm ? (
              <motion.div
                key={activeFarm.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-amber-100 bg-white/80 p-6 shadow-sm backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
                  {activeFarm.location}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                  {activeFarm.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {activeFarm.description}
                </p>
                {activeFarm.videoUrl ? (
                  <a
                    href={activeFarm.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800"
                  >
                    Watch drone footage →
                  </a>
                ) : null}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
