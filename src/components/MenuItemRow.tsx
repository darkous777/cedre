import { type MenuItem } from "@/content/menu";
import { formatPrice } from "@/lib/format";

export function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <article className="menu-item">
      <div className="menu-item-line">
        <span className="menu-item-name">
          {item.name}
          {item.spicy ? <span className="spicy-dot" role="img" aria-label="épicé" /> : null}
          {item.veg ? <span className="veg-tag">végé</span> : null}
        </span>
        <span className="menu-leader" aria-hidden="true" />
        <span className="menu-price price">{formatPrice(item.price)}</span>
      </div>
      {item.desc ? <p className="menu-item-desc">{item.desc}</p> : null}
    </article>
  );
}
