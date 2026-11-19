import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://atexsoft.vercel.app'),
  title: 'AtexSoft LLC — Innovate. Build. Transform.',
  description:
    'AtexSoft LLC builds world-class technology across AI agents, blockchain, IoT & embedded systems, cloud architecture & DevOps, software development, and consulting.',
  openGraph: {
    title: 'AtexSoft LLC — Innovate. Build. Transform.',
    description:
      'AtexSoft LLC builds world-class technology across AI agents, blockchain, IoT & embedded systems, cloud architecture & DevOps, software development, and consulting.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
