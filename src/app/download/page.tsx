import type { Metadata } from 'next';
import Image from 'next/image';

import { ActionLink } from '@/components/action-link';

export const metadata: Metadata = {
  title: 'Status aplikasi',
  description: 'MoriiTalks sedang dikembangkan untuk Android dan iOS. Lihat status aplikasinya.',
};

export default function DownloadPage() {
  return (
    <main id="main-content" className="shell min-h-[65vh] py-12 text-center md:pb-24">
      <Image
        className="mx-auto mb-7 w-56 rounded-full bg-mint"
        src="/images/morii-wave.png"
        alt="Morii melambaikan tangan"
        width={260}
        height={260}
        sizes="224px"
      />
      <p className="mb-5 eyebrow">Satu langkah menuju cerita pertama</p>
      <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight font-bold tracking-[-0.04em]">
        Morii sedang
        <br />
        <span className="text-teal">bersiap menyapamu.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
        Tautan unduhan resmi akan hadir di sini setelah MoriiTalks tersedia di store.
      </p>
      <dl
        className="mx-auto my-8 grid max-w-lg gap-4 text-left sm:grid-cols-2"
        aria-label="Status ketersediaan aplikasi"
      >
        {['App Store', 'Google Play'].map((store) => (
          <div key={store} className="rounded-2xl border border-line bg-white p-6">
            <dt className="font-bold">{store}</dt>
            <dd className="mt-1 text-sm text-muted">Belum tersedia</dd>
          </div>
        ))}
      </dl>
      <p className="mb-7 text-xs text-muted">Belum ada tanggal rilis yang diumumkan.</p>
      <ActionLink href="/">Kenali Morii dulu</ActionLink>
    </main>
  );
}
