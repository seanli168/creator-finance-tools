import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Creator Finance Tools',
  description:
    'Free creator monetization calculators and finance tools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold"
            >
              Creator Finance Tools
            </Link>

            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/">Home</Link>
              <Link href="/tools">Tools</Link>
              <Link href="/about">About</Link>
              <Link href="/privacy-policy">Privacy</Link>
               <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t mt-20">
          <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-500">
            © 2026 Creator Finance Tools
          </div>
        </footer>
      </body>
    </html>
  );
}