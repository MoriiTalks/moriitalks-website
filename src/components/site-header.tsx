import Link from 'next/link';

import { ActionLink } from '@/components/action-link';
import { Wordmark } from '@/components/wordmark';

export function SiteHeader() {
  return (
    <header className="shell flex items-center justify-between gap-5 py-5 md:py-6">
      <Wordmark />
      <nav className="hidden gap-6 text-sm text-muted md:flex" aria-label="Navigasi utama">
        <Link className="hover:text-teal" href="/#morii">
          Kenali Morii
        </Link>
        <Link className="hover:text-teal" href="/#latihan">
          Cara berlatih
        </Link>
        <Link className="hover:text-teal" href="/#orang-tua">
          Untuk orang tua
        </Link>
      </nav>
      <ActionLink compact href="/download">
        Kabar rilis
      </ActionLink>
    </header>
  );
}
