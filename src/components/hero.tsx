"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center rounded-full bg-amber-200/90 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-900"
        >
          Mahalakshmi Poultry Complex
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
        >
          Andhra’s Leading White Egg Producers — 5 Lakh Eggs Every Day.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-lg text-white/80 sm:text-xl"
        >
          Four farms across Andhra Pradesh. Precision-driven quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="#story"
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-amber-300/40 transition hover:bg-amber-200"
          >
            Discover Our Journey
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col items-center text-sm text-white/70"
        >
          <span className="animate-bounce">Scroll to explore</span>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
