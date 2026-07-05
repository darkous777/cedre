import { Hero } from "@/components/Hero";
import { LocationsSection } from "@/components/LocationsSection";
import { MenuHighlights } from "@/components/MenuHighlights";
import { OrderCards } from "@/components/OrderCards";
import { ReviewCta } from "@/components/ReviewCta";
import { StorySection } from "@/components/StorySection";

export default function Home() {
  return (
    <main id="contenu">
      <Hero />
      <MenuHighlights />
      <StorySection />
      <OrderCards />
      <LocationsSection />
      <ReviewCta />
    </main>
  );
}
