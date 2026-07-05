import { images, type ImageKey } from "@/content/images";
import { type MenuCategory as MenuCategoryType } from "@/content/menu";
import { ImageSlot } from "@/components/ImageSlot";
import { MenuItemRow } from "@/components/MenuItemRow";
import { StarOrnament } from "@/components/Ornaments";

const categoryImages: Partial<Record<string, ImageKey>> = {
  salades: "salades",
  sandwichs: "falafel",
  assiettes: "grillades",
  desserts: "baklava",
};

export function MenuCategory({
  category,
  compact = false,
}: {
  category: MenuCategoryType;
  compact?: boolean;
}) {
  const imageKey = categoryImages[category.id];

  return (
    <section className="menu-category" id={`cat-${category.id}`} aria-labelledby={`title-${category.id}`}>
      <div className="menu-category-heading">
        <div>
          <h2 id={`title-${category.id}`}>
            <StarOrnament className="category-star" />
            {category.title}
          </h2>
          {category.note ? <p className="menu-category-note">{category.note}</p> : null}
        </div>
        {imageKey ? (
          <div className="menu-category-image">
            <ImageSlot
              slot={imageKey}
              sizes="(min-width: 900px) 220px, 42vw"
              className="image-cover"
              priority={false}
            />
            <span className="visually-hidden">{images[imageKey].alt}</span>
          </div>
        ) : null}
      </div>
      <div className={compact ? "menu-list menu-list-compact" : "menu-list"}>
        {category.items.map((item) => (
          <MenuItemRow item={item} key={item.name} />
        ))}
      </div>
    </section>
  );
}
