import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

import './globals.css';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JXAI - Build your AI workflow',
  description:
    'Empower day to day with Deep Knowledge with all available ai tools. Build your AI workflow with JXAI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}