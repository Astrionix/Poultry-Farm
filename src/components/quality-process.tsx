"use client";

import { processFlow } from "@/data/process";
import { motion } from "framer-motion";
import {
  Package,
  Scan,
  Truck,
  Warehouse,
  Wheat,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  feed: Wheat,
  farm: Warehouse,
  sorting: Scan,
  packing: Package,
  delivery: Truck,
};

export function QualityProcess() {
  return (
    <section id="quality" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="max-w-xl space-y-4">
          <span className="inline-flex w-fit items-center rounded-full bg-amber-200/20 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
            Quality & Process
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Every egg is traced from feed to dispatch.
          </h2>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            Holistic nutrition, hygienic handling, and precision grading make up our five-step journey from farm to market. The result—consistent shell strength, albumen quality, and freshness in every crate.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-white/70">
            <p>
              Our in-house nutritionists and quality controllers work together to uphold NECC benchmarks. Automated grading belts and cold storage ensure eggs leave our gates at optimal temperature and hygiene.
            </p>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
          {processFlow.map((step, index) => {
            const Icon = iconMap[step.id] ?? Warehouse;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "0px 0px -120px 0px" }}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-800/40 p-6 shadow-lg shadow-slate-950/30"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/20">
                  <Icon className="h-6 w-6 text-amber-200" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
