import { ActionLink } from '@/components/action-link';

export default function NotFound() {
  return (
    <main id="main-content" className="shell min-h-[65vh] py-16 text-center">
      <p className="mb-5 eyebrow">404 · Halaman belum ditemukan</p>
      <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight font-bold tracking-[-0.04em]">
        Yuk, kembali
        <br />
        <span className="text-teal">ke cerita awal.</span>
      </h1>
      <p className="my-7 text-base text-muted">Halaman yang kamu cari tidak tersedia.</p>
      <ActionLink href="/">Kembali ke beranda</ActionLink>
    </main>
  );
}
