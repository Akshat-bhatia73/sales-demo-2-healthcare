import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KiwiQ Mission Control',
  description: 'AI-powered marketing intelligence platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-[#030712] via-[#0F172A] to-[#1E293B]`}>
        {children}
      </body>
    </html>
  );
}