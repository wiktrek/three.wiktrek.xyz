import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '~/components/ui/toaster';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'three.wiktrek.xyz',
  description: 'App made with three.js',
  icons: ['/favicon.svg'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background text-text">
      <head></head>
      <body className={inter.className}>
        <main>{children}</main>

        <Toaster />
      </body>
    </html>
  );
}
