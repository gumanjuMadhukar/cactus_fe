"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { submitContactInquiry } from "@/lib/client-api";
import type { Service, SiteConfig } from "@/types/content";

type ContactProps = {
  siteConfig: SiteConfig;
  services: Service[];
};

export function Contact({ siteConfig, services }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const result = await submitContactInquiry({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? "")
    });

    setStatus("success");
    setMessage(result.message);

    if (!result.fallback) {
      event.currentTarget.reset();
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container-pad grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div>
            <SectionHeading
              eyebrow="Start your project"
              title="Tell us what you want to build."
              description="This form is already wired for Laravel. If the API is not ready, the frontend safely falls back to preview mode instead of breaking."
            />
            <div className="mt-8 grid gap-4 text-sm text-white/62">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-cactus-300" /> {siteConfig.email}</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-cactus-300" /> {siteConfig.phone}</div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cactus-300" /> {siteConfig.location}</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass-card rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-white/68">
                Name
                <input name="name" required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-cactus-300/60" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm text-white/68">
                Email
                <input name="email" type="email" required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-cactus-300/60" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm text-white/68">
              Service
              <select name="service" className="rounded-2xl border border-white/10 bg-night px-4 py-3 text-white outline-none transition focus:border-cactus-300/60">
                <option>Choose a service</option>
                {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
              </select>
            </label>
            <label className="mt-5 grid gap-2 text-sm text-white/68">
              Message
              <textarea name="message" required rows={5} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-cactus-300/60" placeholder="Briefly tell us about your project." />
            </label>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center rounded-full bg-cactus-400 px-6 py-3 text-sm font-bold text-night shadow-glow transition hover:-translate-y-0.5 hover:bg-cactus-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send Inquiry"}
              </button>
              {message ? <p className="text-sm text-cactus-200">{message}</p> : null}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
