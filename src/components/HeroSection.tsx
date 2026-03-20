import Image from "next/image";

import { PitchCTA, PitchImage } from "@/types/pitch";

type HeroSectionProps = {
  brand: string;
  hero: {
    headline: string;
    subhead: string;
    body: string;
    image: PitchImage;
    ctas: PitchCTA[];
  };
  quote: {
    label: string;
    body: string;
  };
};

export function HeroSection({ brand, hero, quote }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="section-eyebrow">{brand}</p>
        <h1>{hero.headline}</h1>
        <p className="hero-subhead">{hero.subhead}</p>
        <p className="hero-body">{hero.body}</p>
        <div className="cta-row">
          {hero.ctas.map((cta) => (
            <a
              key={cta.label}
              className={`cta-button cta-${cta.variant}`}
              href={cta.href}
            >
              {cta.label}
            </a>
          ))}
        </div>
        <aside className="hero-quote">
          <span>{quote.label}</span>
          <p>{quote.body}</p>
        </aside>
      </div>
      <div className="hero-visual">
        <div className="route-badge">Metro to office, on schedule.</div>
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={820}
          height={980}
          priority={hero.image.priority}
          className="hero-image"
        />
        {hero.image.caption ? (
          <p className="asset-note">{hero.image.caption}</p>
        ) : null}
      </div>
    </section>
  );
}
