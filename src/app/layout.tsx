import type { Metadata } from 'next';
import { Playfair_Display, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anwin Anto — Technical Team Lead',
  description:
    'Technical Team Lead & Full Stack Developer. Serverless & Cloud Specialist. Node.js · AWS · React · Keycloak · HubSpot.',
  keywords: [
    'Technical Team Lead',
    'Full Stack Developer',
    'Serverless',
    'AWS',
    'Node.js',
    'React',
    'HubSpot',
    'Bengaluru',
  ],
  authors: [{ name: 'Anwin Anto', url: 'https://linkedin.com/in/anwin-anto' }],
  openGraph: {
    title: 'Anwin Anto — Technical Team Lead',
    description: 'Building systems that ship. Manual craft. AI velocity. Full spectrum.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${mono.variable} ${grotesk.variable}`}
    >
      <body>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
