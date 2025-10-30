"use client";

import { storyMilestones } from "@/data/story";
import { motion } from "framer-motion";

export function StoryTimeline() {
  return (
    <section id="story" className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 text-left">
          <span className="inline-flex w-fit items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            The Mahalakshmi Journey
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            From early beginnings to a 5 lakh egg legacy.
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Discipline, purity, and technology have carried Mahalakshmi Poultry Complex from a humble East Godavari farm to one of Andhra’s most trusted white-egg producers.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-amber-200 sm:left-1/2 sm:-translate-x-1/2" />
          <div className="flex flex-col gap-12">
            {storyMilestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  className="relative flex flex-col gap-4 sm:flex-row"
                >
                  <div
                    className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-amber-400 bg-white sm:left-1/2"
                    aria-hidden
                  />

                  <div
                    className={`sm:w-1/2 ${
                      isEven ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
                      {milestone.year}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                      {milestone.title}
                    </h3>
                    <p className="text-base font-medium text-slate-500">
                      {milestone.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {milestone.description}
                    </p>
                    {milestone.quote ? (
                      <blockquote className="mt-4 rounded-2xl border border-amber-100 bg-white/80 p-4 text-left text-sm italic text-slate-600 shadow-sm">
                        “{milestone.quote.text}”
                        <footer className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                          {milestone.quote.author}
                        </footer>
                      </blockquote>
                    ) : null}
                  </div>
                  <div className="hidden w-1/2 sm:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
