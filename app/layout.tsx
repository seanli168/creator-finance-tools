import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Creator Finance Tools',
  description:
    'Free creator economy calculators and monetization tools.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <header className="border-b">
          <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold"
            >
              Creator Finance Tools
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link
                href="/"
                className="hover:text-gray-600"
              >
                Home
              </Link>

              <Link
                href="/tools"
                className="hover:text-gray-600"
              >
                Tools
              </Link>

              <Link
                href="/about"
                className="hover:text-gray-600"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-gray-600"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="hover:text-gray-600"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t mt-24">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-gray-600 text-sm">
                © 2026 Creator Finance Tools. All rights reserved.
              </p>

              <div className="flex items-center gap-6 text-sm">
                <Link
                  href="/about"
                  className="hover:text-gray-600"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="hover:text-gray-600"
                >
                  Contact
                </Link>

                <Link
                  href="/privacy"
                  className="hover:text-gray-600"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}