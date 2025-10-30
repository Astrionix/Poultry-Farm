"use client";

import { infrastructureFeatures } from "@/data/infrastructure";
import { motion } from "framer-motion";
import {
  Package,
  Scan,
  Shield,
  Snowflake,
  TestTube,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "cold-storage": Snowflake,
  "grading-belts": Scan,
  biosecurity: Shield,
  logistics: Truck,
  "quality-lab": TestTube,
  workforce: Users,
  packing: Package,
};

export function InfrastructureShowcase() {
  return (
    <section id="infrastructure" className="bg-white py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4">
          <span className="inline-flex w-fit items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            Infrastructure & Technology
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Every Egg Counts — Our 5-Point Quality Check.
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Automation, cold-chain logistics, and a trained workforce keep Mahalakshmi Poultry Complex future-ready. Each feature safeguards freshness, hygiene, and reliability across the supply chain.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {infrastructureFeatures.map((feature, index) => {
            const Icon = icons[feature.id] ?? Shield;
            return (
              <motion.article
                key={feature.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true, margin: "0px 0px -120px 0px" }}
                className="flex h-full flex-col gap-4 rounded-3xl border border-amber-100 bg-amber-50/60 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-200/60 text-amber-900">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
