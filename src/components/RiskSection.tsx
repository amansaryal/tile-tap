import { PitchSection } from "@/types/pitch";

type RiskSectionProps = {
  section: PitchSection;
};

export function RiskSection({ section }: RiskSectionProps) {
  return (
    <section id={section.id} className="risk-section">
      <div className="section-heading">
        {section.eyebrow ? <p className="section-eyebrow">{section.eyebrow}</p> : null}
        <h2>{section.title}</h2>
      </div>
      <div className="risk-layout">
        <div className="narrative-copy">
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {section.bullets?.length ? (
          <ul className="risk-list">
            {section.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
