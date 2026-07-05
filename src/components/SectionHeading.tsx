import { StarOrnament } from "@/components/Ornaments";

export function SectionHeading({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <StarOrnament className="section-star" />
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
