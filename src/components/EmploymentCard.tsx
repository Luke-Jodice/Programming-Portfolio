import Tag from "./Tag";

interface EmploymentCardProps {
  title: string;
  company: string;
  description: string[];
  keyparts: string[];
  timeframe?: string;
  tone?: "light" | "dark";
  /** Cap the number of bullet points shown (e.g. on the home page). */
  maxBullets?: number;
}

/** One row of the experience timeline. Render inside an <ol>. */
export default function EmploymentCard({
  title,
  company,
  description,
  keyparts,
  timeframe,
  tone = "light",
  maxBullets,
}: EmploymentCardProps) {
  const dark = tone === "dark";
  const bullets = maxBullets ? description.slice(0, maxBullets) : description;

  return (
    <li
      className={`flex flex-wrap gap-x-8 gap-y-2 border-t py-8 last:border-b ${
        dark ? "border-night-line" : "border-line"
      }`}
    >
      {timeframe ? (
        <p
          className={`basis-44 pt-1.5 font-mono text-[13px] uppercase ${
            dark ? "text-night-muted" : "text-muted"
          }`}
        >
          {timeframe}
        </p>
      ) : null}
      <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-4">
        <div>
          <h3 className="text-2xl font-bold tracking-[-0.02em]">{title}</h3>
          <p
            className={`mt-1 text-base ${dark ? "text-accent-soft" : "text-accent"}`}
          >
            {company}
          </p>
        </div>
        {keyparts.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {keyparts.map((part) => (
              <li key={part}>
                <Tag tone={dark ? "dark" : "outline"}>{part}</Tag>
              </li>
            ))}
          </ul>
        ) : null}
        {bullets.length > 0 ? (
          <ul
            className={`flex list-disc flex-col gap-2 pl-5 text-base leading-relaxed ${
              dark ? "text-night-body" : "text-body"
            }`}
          >
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}
