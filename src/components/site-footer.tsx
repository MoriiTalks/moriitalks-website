import Link from 'next/link';

import { Wordmark } from '@/components/wordmark';

export function SiteFooter() {
  return (
    <footer className="shell flex flex-wrap items-center justify-between gap-6 py-10 md:py-12">
      <div>
        <Wordmark />
        <p className="mt-2 text-xs text-muted">Satu cerita. Satu langkah kecil.</p>
      </div>
      <nav className="flex gap-5 text-sm text-muted" aria-label="Navigasi footer">
        <Link className="hover:text-teal" href="/#pertanyaan">
          Pertanyaan umum
        </Link>
        <Link className="hover:text-teal" href="/download">
          Status aplikasi
        </Link>
      </nav>
      <p className="w-full border-t border-line pt-6 text-xs text-muted">
        MoriiTalks · Dalam pengembangan
      </p>
    </footer>
  );
}
