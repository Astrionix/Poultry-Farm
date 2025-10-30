"use client";

import { reachLocations } from "@/data/reach";
import { motion } from "framer-motion";

export function ReachMap() {
  return (
    <section id="reach" className="bg-slate-50 py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-4">
          <span className="inline-flex w-fit items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            Our Reach
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Trusted Across the South — Fresh White Eggs, Every Sunrise.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            From Telangana to Tamil Nadu, our dawn dispatches ensure retailers and institutional buyers receive the freshest white eggs backed by NECC grade compliance.
          </p>
          <ul className="mt-8 space-y-4">
            {reachLocations.map((location, index) => (
              <motion.li
                key={location.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
                  {location.state}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {location.cities.join(", ")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {location.highlight}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="relative h-[440px] w-full overflow-hidden rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-amber-100 shadow-inner">
          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
            role="presentation"
          >
            <defs>
              <radialGradient id="reachGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fde68a" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <path
              d="M150 70c40-10 90-4 130 10s70 40 100 70c30 30 60 60 70 100 11 40 4 90-18 120-22 30-58 40-92 50-34 11-66 23-102 18-37-5-78-26-110-53-32-27-55-60-68-100-12-40-14-87 4-122 19-35 59-57 86-80 27-22 40-42 70-53z"
              fill="url(#reachGlow)"
              stroke="#f59e0b"
              strokeOpacity="0.4"
              strokeWidth="2"
            />
            {reachLocations.map((location, index) => {
              const angle = (index / reachLocations.length) * Math.PI * 1.7 + 0.5;
              const radius = 140 + index * 12;
              const cx = 250 + Math.cos(angle) * radius;
              const cy = 240 + Math.sin(angle) * radius * 0.7;
              return (
                <g key={location.id}>
                  <circle cx={cx} cy={cy} r={8} fill="#f59e0b" opacity={0.8} />
                  <text
                    x={cx + 12}
                    y={cy + 4}
                    className="text-xs"
                    fill="#b45309"
                    fontWeight="600"
                  >
                    {location.state}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
