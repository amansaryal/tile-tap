import { PitchCTA } from "@/types/pitch";

type CTASectionProps = {
  ctas: {
    eyebrow: string;
    title: string;
    body: string;
    items: PitchCTA[];
  };
};

export function CTASection({ ctas }: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="section-heading">
        <p className="section-eyebrow">{ctas.eyebrow}</p>
        <h2>{ctas.title}</h2>
      </div>
      <p className="cta-copy">{ctas.body}</p>
      <div className="cta-row">
        {ctas.items.map((cta) => (
          <a key={cta.label} className={`cta-button cta-${cta.variant}`} href={cta.href}>
            {cta.label}
          </a>
        ))}
      </div>
      <p className="asset-note">
        Analytics insertion point: add Vercel Analytics or your preferred event tracking
        around these CTA interactions before launch.
      </p>
    </section>
  );
}
