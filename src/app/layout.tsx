import type { Metadata, Viewport } from "next";

import Footer from "~/components/Footer";
import Header from "~/components/Header";

import "~/styles/globals.css";

const SITE_URL = "https://lukejodice.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luke Jodice — Software Engineer",
    template: "%s · Luke Jodice",
  },
  description:
    "Personal portfolio of Luke Jodice — software engineer. Explore my projects, professional experience, and published articles.",
  authors: [{ name: "Luke Jodice", url: SITE_URL }],
  creator: "Luke Jodice",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Luke Jodice",
    title: "Luke Jodice — Software Engineer",
    description:
      "Personal portfolio of Luke Jodice — software engineer. Projects, experience, and writing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Jodice — Software Engineer",
    description:
      "Personal portfolio of Luke Jodice — software engineer. Projects, experience, and writing.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#4f7942",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="background-coloring antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
