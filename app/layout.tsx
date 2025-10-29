import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SplixData — AI knowledge engine for biopharma",
  description:
    "SplixData unifies scientific literature, patents, targets, pipelines, filings and financing signals into one trusted knowledge base.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
