"use client";

import CountUp from "react-countup";
import { stats } from "@/data/stats";
import { motion } from "framer-motion";

export function StatCards() {
  return (
    <section
      aria-label="Key operational statistics"
      className="bg-white py-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="flex flex-col rounded-3xl border border-white/30 bg-amber-50/80 p-8 text-center shadow-sm"
          >
            <div className="text-4xl font-semibold text-amber-700">
              <CountUp end={stat.value} duration={2.4} separator="," suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-amber-900">
              {stat.label}
            </p>
            <p className="mt-4 text-sm text-slate-600">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
