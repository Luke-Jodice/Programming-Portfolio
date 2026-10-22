export default function Tag({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark" | "outline";
}) {
  const styles = {
    light: "bg-ground",
    dark: "border border-night-line",
    outline: "border border-line bg-surface",
  } as const;
  return (
    <span
      className={`rounded-full px-2.5 py-1.5 font-mono text-xs ${styles[tone]}`}
    >
      {children}
    </span>
  );
}
