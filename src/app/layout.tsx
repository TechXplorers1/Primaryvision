import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import ScrollToAnchor from '@/components/scroll-to-anchor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Primary Vision',
  description: 'Accelerate your Cloud native Journey',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ScrollToAnchor />
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
