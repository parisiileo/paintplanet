"use client";

import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
};

/** Link con underline animata da sinistra (nav e link testuali). */
export function AnimatedLink({ href, children, className = "", active = false, onClick }: Props) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-block ${className}`}
      aria-current={active ? "page" : undefined}
    >
      {children}
      <span
        aria-hidden
        className={`absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 ${
          active ? "scale-x-100" : ""
        }`}
      />
    </Link>
  );
}
