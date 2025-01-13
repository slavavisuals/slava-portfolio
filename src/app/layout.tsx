import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const metadata: Metadata = {
  title:
    'Front-End Engineer & Consultant | React.js, Next.js, & CMS Specialist - JustSlava.com',
  description:
    'Front-End Engineer and Consultant with over a decade of experience. Specializing in React.js, Next.js, and CMS solutions to build fast, scalable web apps, e-commerce platforms, SPAs, and dynamic content-driven websites.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'bg-gray-800 text-white antialiased font-sans'
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
