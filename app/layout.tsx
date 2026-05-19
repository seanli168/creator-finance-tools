import './globals.css';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  
  title: {
    default: 'Creator Finance Tools',
    template: '%s | Creator Finance Tools',
  },

  description:
    'Free creator monetization calculators for YouTube, TikTok, CPM, sponsorships, and online income estimation.',

  keywords: [
    'YouTube Money Calculator',
    'TikTok Money Calculator',
    'CPM Calculator',
    'Creator Finance',
    'YouTube CPM',
    'Influencer Earnings',
    'Creator Monetization',
  ],

  metadataBase: new URL(
    'https://creator-finance-tools.vercel.app'
  ),

  verification: {
  google: 'hLIw_o8BUFafwjpc0UcZKXStsz3XUIoKCUBlF7DnkaI',
},

  openGraph: {
    title: 'Creator Finance Tools',
    description:
      'Free online creator monetization calculators and SEO tools.',

    url: 'https://creator-finance-tools.vercel.app',

    siteName: 'Creator Finance Tools',

    locale: 'en_US',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Creator Finance Tools',

    description:
      'Estimate YouTube, TikTok, and creator earnings instantly.',
  },
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