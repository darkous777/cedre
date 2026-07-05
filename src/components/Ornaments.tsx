type IconProps = {
  className?: string;
  title?: string;
};

export function CedarMark({ className, title }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      <g fill="currentColor">
        <path d="M32 4 19 17h26z" />
        <path d="M32 13 13 28h38z" />
        <path d="M32 24 8 41h48z" />
        <rect x="29" y="41" width="6" height="15" rx="1" />
      </g>
    </svg>
  );
}

export function StarOrnament({ className, title }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M12 0l2.6 7.4L22 8.6l-5.7 5 1.7 7.7L12 17.6l-6 3.7 1.7-7.7L2 8.6l7.4-1.2z"
        transform="rotate(22 12 12)"
      />
    </svg>
  );
}

export function LatticePattern({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <pattern id="cedar-lattice" width="72" height="72" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M36 4 44 28 68 36 44 44 36 68 28 44 4 36 28 28Z" />
            <circle cx="36" cy="36" r="6" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cedar-lattice)" />
    </svg>
  );
}
