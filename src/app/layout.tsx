import type { Metadata } from "next";
import { Molengo } from 'next/font/google';
import "./globals.css";
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "Bazingua",
  description: "Mini-jeux en vrac",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/icon-192x192.png" },
    { rel: "icon", url: "/icon-192x192.png" },
  ],
};

const molengo = Molengo({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${molengo.className} antialiased p-6`}
      >
        <div className='main'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
