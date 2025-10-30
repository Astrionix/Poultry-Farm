import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  centered,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        centered ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  );
}
