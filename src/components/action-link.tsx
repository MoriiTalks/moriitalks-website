import Link from 'next/link';
import type { ReactNode } from 'react';

interface ActionLinkProps {
  children: ReactNode;
  href: string;
  compact?: boolean;
}

export function ActionLink({ children, href, compact = false }: ActionLinkProps) {
  const size = compact
    ? 'min-h-11 rounded-2xl px-4 py-3 text-xs'
    : 'min-h-14 rounded-2xl px-6 py-4 text-sm';

  return (
    <Link
      className={`inline-flex items-center justify-center gap-5 bg-teal font-semibold text-white no-underline hover:bg-teal-dark motion-safe:transition-colors ${size}`}
      href={href}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
