"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { SiteConfig, Stat } from "@/types/content";

type HeroProps = {
  siteConfig: SiteConfig;
  stats: Stat[];
};

const floatingCards = [
  { label: "Web Experience", value: "Next.js", position: "left-0 top-10" },
  { label: "CMS Backend", value: "Laravel", position: "right-0 top-28" },
  { label: "Growth Layer", value: "SEO + BI", position: "bottom-8 left-8" }
];

export function Hero({ siteConfig, stats }: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden pb-20 pt-32 md:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(65,255,154,0.14),transparent_32%),radial-gradient(circle_at_86%_16%,rgba(83,120,255,0.12),transparent_30%),linear-gradient(180deg,#050706_0%,#070b09_48%,#030403_100%)]" />
      <div className="hero-soft-noise absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-16 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cactus-400/10 blur-[130px]" />
      <div className="absolute left-1/2 top-0 h-px w-[70vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-cactus-300/40 to-transparent" />

      <div className="container-pad relative z-10 grid min-h-[calc(100vh-8rem)] items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-cactus-300/20 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cactus-300 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-cactus-300 shadow-[0_0_18px_rgba(89,255,172,0.9)]" />
            {siteConfig.tagline}
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="max-w-5xl text-[3rem] font-semibold leading-[0.95] tracking-[-0.065em] text-white sm:text-6xl md:text-7xl lg:text-[5.7rem]"
          >
            Smart digital systems that help businesses <span className="gradient-text">grow.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="mt-7 max-w-2xl text-base leading-8 text-white/66 sm:text-lg md:text-xl"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact">Get a Quote</Button>
            <Button href="/portfolio" variant="secondary">View Projects</Button>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-11 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 backdrop-blur-xl">
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="mt-1 text-xs leading-5 text-white/48">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 26 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[560px]"
        >
          <div className="absolute inset-0 rounded-full border border-cactus-300/10 bg-cactus-300/[0.035] blur-[1px]" />
          <div className="absolute inset-8 rounded-full border border-white/10" />
          <div className="absolute inset-20 rounded-full border border-cactus-300/15" />

          <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.4rem] border border-white/[0.12] bg-white/[0.075] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cactus-300">Cactus OS</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Business Growth System</h3>
              </div>
              <div className="rounded-full border border-cactus-300/20 bg-cactus-300/10 px-3 py-1 text-xs font-bold text-cactus-300">Live</div>
            </div>

            <div className="mt-7 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between text-xs text-white/48">
                  <span>Website performance</span>
                  <span>94%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[94%] rounded-full bg-cactus-300" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs text-white/45">Leads</p>
                  <p className="mt-2 text-2xl font-bold text-white">+38%</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs text-white/45">Load speed</p>
                  <p className="mt-2 text-2xl font-bold text-white">1.2s</p>
                </div>
              </div>

              <div className="rounded-2xl border border-cactus-300/15 bg-cactus-300/10 p-4">
                <p className="text-sm leading-6 text-white/72">
                  CMS, CRM, HRM, leads, projects, and reporting prepared as one scalable Laravel platform.
                </p>
              </div>
            </div>
          </div>

          <div className="cactus-bloom absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[45%_55%_48%_52%] opacity-80" />

          {floatingCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45 + index * 0.12 }}
              className={`absolute ${card.position} hidden rounded-3xl border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl sm:block`}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-cactus-300">{card.label}</p>
              <p className="mt-2 text-xl font-bold text-white">{card.value}</p>
            </motion.div>
          ))}

          <div className="absolute left-12 top-1/2 h-3 w-3 rounded-full bg-cactus-300 shadow-[0_0_26px_rgba(89,255,172,0.9)]" />
          <div className="absolute bottom-24 right-20 h-2 w-2 rounded-full bg-white/70" />
          <div className="absolute right-12 top-16 h-4 w-4 rounded-full border border-cactus-300/50" />
        </motion.div>
      </div>
    </section>
  );
}
