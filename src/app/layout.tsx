import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Prompt } from "./Client/Contexts/PromptFeatures";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creativity",
  description: "Generate your next idea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Prompt>
        <body className={inter.className}>{children}</body>
      </Prompt>
    </html>
  );
}
