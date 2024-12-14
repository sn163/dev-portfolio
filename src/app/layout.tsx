import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Sonny Nguyen | Portfolio",
  description: "Full Stack Software Engineer",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className="m-0 overflow-x-hidden bg-neutral">
        <div id="root">{children}</div>
        <Analytics />
        <SpeedInsights />
        <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
      </body>
    </html>
  );
}
