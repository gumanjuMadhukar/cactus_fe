"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ScrollPanel } from "@/types/content";

gsap.registerPlugin(ScrollTrigger);

type ScrollStoryProps = {
  panels: ScrollPanel[];
};

export function ScrollStory({ panels }: ScrollStoryProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        const tween = gsap.to(track, {
          xPercent: -66.666,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.7,
            invalidateOnRefresh: true
          }
        });

        return () => tween.kill();
      });

      return () => media.revert();
    }, section);

    return () => ctx.revert();
  }, [panels.length]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 lg:h-[260vh] lg:py-0">
      <div className="container-pad flex h-full items-center lg:sticky lg:top-0 lg:h-screen">
        <div ref={trackRef} className="grid gap-6 lg:flex lg:w-[300vw] lg:gap-8">
          {panels.map((panel, index) => (
            <article key={panel.label} className="glass-card min-h-[420px] rounded-[2.4rem] p-8 lg:flex lg:w-[calc(100vw-96px)] lg:items-end lg:p-12">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.34em] text-cactus-300">0{index + 1} / {panel.label}</p>
                <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">{panel.title}</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">{panel.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
