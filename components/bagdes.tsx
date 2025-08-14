import Link from "next/link";

export default function Bagdes({
  tags,
  className,
}: {
  tags: string[];
  className?: string;
}) {
  return (
    <ul className="flex gap-1 flex-wrap">
      {tags.map((tag, i) => (
        <li className={`text-sm px-2 py-0.5 ${className}`} key={i}>
          <Link href={`/recipes?tag=${tag}`}>{tag}</Link> // link to filter
          recipes by tag
        </li>
      ))}
    </ul>
  );
}
