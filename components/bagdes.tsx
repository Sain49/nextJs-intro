import Link from "next/link";

export default function Bagdes({
  strings,
  className,
}: {
  strings: string[];
  className?: string;
}) {
  return (
    <ul className="flex gap-1 flex-wrap">
      {strings.map((tag, i) => (
        <li className={`text-sm px-2 py-0.5 ${className}`} key={i}>
          <Link href={`/recipes?tag=${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  );
}
