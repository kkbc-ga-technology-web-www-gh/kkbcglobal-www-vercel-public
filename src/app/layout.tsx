import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KKBC - B2B Marketing Agency',
  description: 'AI-driven marketing insights and services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="bg-blue-900 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">KKBC</Link>
            <ul className="flex space-x-6">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/industry">Industry</Link></li>
              <li><Link href="/learning-center">Learning Center</Link></li>
              <li><Link href="/our-work">Our Work</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2025 KKBC. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
