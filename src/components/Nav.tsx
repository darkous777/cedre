"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { CedarMark } from "@/components/Ornaments";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#commander", label: "Commander" },
  { href: "/#succursales", label: "Succursales" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const update = () => setStuck(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={stuck ? "site-nav is-stuck" : "site-nav"} id="haut">
      <div className="wrap nav-inner">
        <Link className="brand" href="/" aria-label="Restaurant Le Cèdre — accueil" onClick={() => setOpen(false)}>
          <CedarMark className="brand-mark" />
          Le Cèdre
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="visually-hidden">Ouvrir le menu de navigation</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <nav id="nav-links" className={open ? "nav-links is-open" : "nav-links"} aria-label="Navigation principale">
          {links.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a className="btn" href={`tel:${site.locations[0].phoneHref}`} onClick={() => setOpen(false)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.2 2.2z" />
            </svg>
            Appeler
          </a>
        </nav>
      </div>
    </header>
  );
}
