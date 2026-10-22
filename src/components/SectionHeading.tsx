import type { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  title: string;
  id?: string;
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  action?: ReactNode;
}

export default function SectionHeading({
  index,
  title,
  id,
  tone = "light",
  as: Tag = "h2",
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-4">
      <div className="flex items-baseline gap-4">
        <span
          className={`font-mono text-sm ${tone === "dark" ? "text-accent-soft" : "text-accent"}`}
        >
          {index}
        </span>
        <Tag
          id={id}
          className="text-[clamp(34px,4vw,44px)] font-extrabold tracking-[-0.03em]"
        >
          {title}
        </Tag>
      </div>
      {action}
    </div>
  );
}
