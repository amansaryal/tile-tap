import { PitchFeature } from "@/types/pitch";

type FeatureGridProps = {
  eyebrow: string;
  title: string;
  items: PitchFeature[];
};

export function FeatureGrid({ eyebrow, title, items }: FeatureGridProps) {
  return (
    <section className="advantage-section">
      <div className="section-heading">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="feature-grid">
        {items.map((item) => (
          <article key={item.title} className="feature-card feature-card-accent">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
