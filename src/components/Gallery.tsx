import Image from "next/image";
import { gallery } from "@/content/images";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { withBasePath } from "@/lib/basePath";

export function Gallery() {
  return (
    <section className="section gallery-section" id="galerie">
      <div className="wrap">
        <Reveal>
          <SectionHeading title="Nos plats">
            Un aperçu des assiettes, sandwichs et mezzés préparés à la maison, tels que servis au comptoir.
          </SectionHeading>
        </Reveal>

        <Reveal as="ul" className="gallery-grid">
          {gallery.map((image) => (
            <li className="gallery-item" key={image.file}>
              <figure className="gallery-figure">
                <Image
                  src={withBasePath(image.file)}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  sizes="(min-width: 900px) 380px, (min-width: 600px) 48vw, 92vw"
                  className="gallery-image"
                />
                <figcaption className="visually-hidden">{image.title}</figcaption>
              </figure>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
