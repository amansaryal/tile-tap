import Image from "next/image";

import { PitchCTA, PitchFeature, PitchImage } from "@/types/pitch";

type HeroSectionProps = {
  brand: string;
  hero: {
    headline: string;
    subhead: string;
    body: string;
    image: PitchImage;
    ctas: PitchCTA[];
    signals: PitchFeature[];
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
        <p className="hero-kicker">{brand}</p>
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

        <div className="hero-signal-grid">
          {hero.signals.map((signal) => (
            <article key={signal.title} className="hero-signal-card">
              <span>{signal.title}</span>
              <p>{signal.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-stage">
        <div className="hero-stage-panel">
          <div className="route-badge">Metro corridor operating system</div>
          <div className="hero-map">
            <div className="map-line map-line-primary" />
            <div className="map-line map-line-secondary" />
            <div className="map-node map-node-start">Station</div>
            <div className="map-node map-node-mid">TileTap</div>
            <div className="map-node map-node-end">Office cluster</div>
          </div>
          <div className="hero-stage-grid">
            <article className="hero-stage-card hero-stage-card-dark">
              <p className="hero-stage-label">Reliability Thesis</p>
              <h2>No bidding. No surge. No “driver is 12 minutes away.”</h2>
              <p>
                TileTap is designed for one repeated behavior: the weekday metro-to-office
                transfer where certainty matters more than flexibility.
              </p>
            </article>

            <figure className="hero-stage-visual">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={820}
                height={980}
                priority={hero.image.priority}
                className="hero-image"
              />
            </figure>

            <aside className="hero-quote">
              <span>{quote.label}</span>
              <p>{quote.body}</p>
            </aside>

            <article className="hero-stage-card hero-stage-card-accent">
              <p className="hero-stage-label">Why this matters</p>
              <ul className="hero-stage-list">
                <li>Concentrated commuter demand</li>
                <li>Employer-backed distribution</li>
                <li>Repeatable corridor rollout</li>
              </ul>
            </article>
          </div>
        </div>
        {hero.image.caption ? <p className="asset-note">{hero.image.caption}</p> : null}
      </div>
    </section>
  );
}
