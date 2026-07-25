"use client";

import { useReveal, useStaggerReveal } from "@/lib/animations/hooks";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "span" | "li";
};

/** Wrapper reveal singolo (fade + rise on scroll). */
export function Reveal({ children, delay, y, className = "", as = "div" }: RevealProps) {
  const ref = useReveal<HTMLDivElement>({ delay, y });
  const Tag: React.ElementType = as;
  return (
    <Tag ref={ref as React.RefObject<never>} data-reveal className={className}>
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  stagger?: number;
  y?: number;
  className?: string;
  as?: "div" | "ul" | "ol";
};

/** Wrapper reveal a cascata dei figli diretti. */
export function StaggerReveal({ children, stagger, y, className = "", as = "div" }: StaggerProps) {
  const ref = useStaggerReveal<HTMLDivElement>({ stagger, y });
  const Tag: React.ElementType = as;
  return (
    <Tag ref={ref as React.RefObject<never>} data-reveal-line className={className}>
      {children}
    </Tag>
  );
}
