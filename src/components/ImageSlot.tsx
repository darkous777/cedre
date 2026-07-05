import Image from "next/image";
import { images, type ImageAsset, type ImageKey } from "@/content/images";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "cedre";
const basePath = isGitHubPages ? `/${repositoryName}` : "";

function withBasePath(src: string) {
  if (!basePath || !src.startsWith("/")) return src;
  return `${basePath}${src}`;
}

export function ImageSlot({
  slot,
  className = "",
  priority = false,
  sizes,
  fill = false,
}: {
  slot: ImageKey;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
}) {
  const image: ImageAsset = images[slot];
  const source = withBasePath(fill ? (image.fileSmall ?? image.file) : image.file);

  if (fill) {
    return (
      <Image
        src={source}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes ?? "100vw"}
        className={className}
      />
    );
  }

  return (
    <Image
      src={source}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority={priority}
      sizes={sizes ?? "(min-width: 900px) 42vw, 100vw"}
      className={className}
    />
  );
}
