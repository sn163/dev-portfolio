import "../index.css";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sonny Nguyen",
  description: "Full Stack Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <Script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        />
      </head>
      <body>
        <div id="root">{children}</div>
        <Script type="module" src="/src/index.jsx"></Script>
      </body>
    </html>
  );
}
