import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: site.keywords,
  alternates: { canonical: "/" },
  openGraph: { title: site.title, description: site.ogDescription, url: "/", siteName: site.name, locale: "ko_KR", type: "website" },
  twitter: { card: "summary_large_image", title: site.title, description: site.ogDescription },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#org`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/icon`,
      email: site.email,
      ...(site.phone ? { telephone: site.phone } : {}),
      description: site.description,
      areaServed: "KR",
    },
    { "@type": "WebSite", "@id": `${site.url}/#website`, name: site.name, url: site.url, inLanguage: "ko-KR", publisher: { "@id": `${site.url}/#org` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      {site.gaId ? <GoogleAnalytics gaId={site.gaId} /> : null}
    </html>
  );
}
