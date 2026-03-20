import { PitchFeature, PitchFlowStep, PitchSection } from "@/types/pitch";

type BusinessModelSectionProps = {
  section: PitchSection;
  revenueStreams: PitchFeature[];
  expansion: PitchFlowStep[];
};

export function BusinessModelSection({
  section,
  revenueStreams,
  expansion,
}: BusinessModelSectionProps) {
  return (
    <section id={section.id} className="business-section">
      <div className="section-heading">
        {section.eyebrow ? <p className="section-eyebrow">{section.eyebrow}</p> : null}
        <h2>{section.title}</h2>
      </div>

      <div className="business-layout">
        <div className="narrative-copy">
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="revenue-panel">
          {revenueStreams.map((stream) => (
            <article key={stream.title} className="revenue-card">
              <h3>{stream.title}</h3>
              <p>{stream.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="expansion-track">
        {expansion.map((step, index) => (
          <article key={step.title} className="track-step">
            <span>{`0${index + 1}`}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
