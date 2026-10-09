import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: { default: site.title, template: '%s | MoriiTalks' },
  description: site.description,
  icons: { icon: '/images/morii-icon.png', apple: '/images/morii-icon.png' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <a
          className="absolute -top-24 left-4 z-20 rounded-xl bg-teal px-5 py-4 text-white focus:top-3"
          href="#main-content"
        >
          Langsung ke konten
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
