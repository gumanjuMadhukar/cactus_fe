import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { getServices, getSiteSettings } from "@/lib/api";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const DEFAULT_SITE_NAME = "Cactus IT Solution";
const DEFAULT_DESCRIPTION =
  "Cactus IT Solution builds websites, apps, software, CRM, HRM and digital systems for growing businesses.";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = await getSiteSettings();

  const siteName = siteConfig?.name ?? DEFAULT_SITE_NAME;
  const description = siteConfig?.description ?? DEFAULT_DESCRIPTION;

  return {
    title: {
      default: `${siteName} | Websites, Apps & Digital Systems`,
      template: `%s | ${siteName}`,
    },
    description,
    openGraph: {
      title: siteName,
      description,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [siteConfig, services] = await Promise.all([
    getSiteSettings(),
    getServices(),
  ]);

  return (
    <html lang="en" className={notoSerif.variable}>
      <body className={`${notoSerif.className} noise antialiased`}>
        <ScrollProgress />
        <Header siteConfig={siteConfig} />
        <main>{children}</main>
        <Footer siteConfig={siteConfig} services={services} />
      </body>
    </html>
  );
}