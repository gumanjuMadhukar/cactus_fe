type TechStackProps = {
  techStack: string[];
};

export function TechStack({ techStack }: TechStackProps) {
  const items = [...techStack, ...techStack];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/[0.025] py-7">
      <div className="marquee-track flex w-max gap-3">
        {items.map((tech, index) => (
          <span key={`${tech}-${index}`} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/62">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
