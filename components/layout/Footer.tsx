import Link from "next/link";
import type { Service, SiteConfig } from "@/types/content";

type FooterProps = {
  siteConfig: SiteConfig | null;
  services: Service[];
};

export function Footer({ siteConfig, services = [] }: FooterProps) {
  const companyName = siteConfig?.name ?? "Cactus IT Solution";
  const description =
    siteConfig?.description ??
    "Cactus IT Solution builds websites, apps, software, CRM, HRM and digital systems for growing businesses.";

  const location = siteConfig?.location ?? "";
  const email = siteConfig?.email ?? "";
  const phone = siteConfig?.phone ?? "";

  const footerServices = Array.isArray(services) ? services.slice(0, 5) : [];

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-pad grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-cactus-500 text-lg font-black text-night">
              C
            </span>
            <span className="font-bold text-white">{companyName}</span>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/60">
            {description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>

          <div className="grid gap-3 text-sm text-white/58">
            {footerServices.length > 0 ? (
              footerServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="hover:text-cactus-300"
                >
                  {service.title}
                </Link>
              ))
            ) : (
              <span className="text-white/42">No services published yet.</span>
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>

          <div className="grid gap-3 text-sm text-white/58">
            {location ? <span>{location}</span> : null}

            {email ? (
              <a href={`mailto:${email}`} className="hover:text-cactus-300">
                {email}
              </a>
            ) : null}

            {phone ? (
              <a href={`tel:${phone}`} className="hover:text-cactus-300">
                {phone}
              </a>
            ) : null}

            {!location && !email && !phone ? (
              <span className="text-white/42">
                Contact details not added yet.
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="container-pad mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/42 md:flex-row">
        <p>
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
        <p>API-first frontend powered by Laravel CMS.</p>
      </div>
    </footer>
  );
}