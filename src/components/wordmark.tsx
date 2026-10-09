import Link from 'next/link';

export function Wordmark() {
  return (
    <Link
      className="text-[26px] font-extrabold tracking-[-0.05em] no-underline md:text-[29px]"
      href="/"
      aria-label="MoriiTalks, beranda"
    >
      morii<span className="text-teal">talks</span>
      <span className="text-coral" aria-hidden="true">
        .
      </span>
    </Link>
  );
}
