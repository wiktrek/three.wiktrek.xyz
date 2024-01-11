import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '~/app/globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'sync windows - wiktrek.xyz',
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
      </body>
    </html>
  );
}
