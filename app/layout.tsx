import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ericshadrach.io"),
  title: {
    default: "Eric Shadrach Miller | Architect of Agentic AI Systems",
    template: "%s | Eric Shadrach Miller",
  },
  description: "Designing systems that teach us how to be human. PhD researcher and AI systems architect bridging dissertation theory and enterprise reality through Agentic AI.",
  keywords: ["AI", "Agentic AI", "Game Design", "VR", "Computational Thinking", "Interactive Storytelling", "Humics", "Neuro-Symbolic AI", "LLM"],
  authors: [{ name: "Eric Shadrach Miller", url: "https://ericshadrach.io" }],
  creator: "Eric Shadrach Miller",
  openGraph: {
    title: "Eric Shadrach Miller | Architect of Agentic AI Systems",
    description: "Designing systems that teach us how to be human. From dissertation theory to enterprise reality.",
    url: "https://ericshadrach.io",
    siteName: "Eric Shadrach Miller",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Shadrach Miller | Architect of Agentic AI Systems",
    description: "Designing systems that teach us how to be human.",
    creator: "@ericshadrachmiller",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
