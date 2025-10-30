"use client";

import { storyMilestones } from "@/data/story";
import { motion } from "framer-motion";

export function OurStory() {
  return (
    <section id="story" className="bg-slate-50 py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <span className="inline-flex w-fit items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            The Mahalakshmi Journey
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            A legacy of purity, precision, and responsible growth.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            From humble East Godavari sheds to a network of automated farms, Mahalakshmi Poultry Complex blends tradition with modern technology—delivering over five lakh white eggs every single day.
          </p>
          <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Timeline Highlights</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {storyMilestones.map((milestone) => (
                <li key={milestone.title}>
                  <span className="font-semibold text-amber-700">{milestone.year}</span> — {milestone.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-amber-200 lg:left-6" aria-hidden />
          <div className="space-y-10">
            {storyMilestones.map((milestone, index) => (
              <motion.article
                key={milestone.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -120px 0px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative rounded-3xl border border-amber-100 bg-white p-6 shadow-sm"
              >
                <span className="absolute -left-3 top-6 h-3 w-3 rounded-full border-2 border-amber-500 bg-white" aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
                  {milestone.year}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{milestone.title}</h3>
                <p className="text-sm font-medium text-slate-500">{milestone.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{milestone.description}</p>
                {milestone.quote ? (
                  <blockquote className="mt-4 rounded-2xl bg-amber-50/80 p-4 text-sm italic text-amber-900">
                    “{milestone.quote.text}”
                    <footer className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                      {milestone.quote.author}
                    </footer>
                  </blockquote>
                ) : null}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
