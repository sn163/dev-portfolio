import "../index.css";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Sonny Nguyen",
  description: "Full Stack Software Engineer",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-16 overflow-x-hidden scroll-smooth">
      <head>
        <Script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        />
      </head>
      <body className="m-0 overflow-x-hidden bg-neutral">
        <div id="root">{children}</div>
      </body>
      <SpeedInsights />
    </html>
  );
}
